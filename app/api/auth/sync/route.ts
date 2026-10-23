import { NextRequest, NextResponse } from 'next/server';
import { adminAuth } from '@/src/lib/firebase-admin.ts';
import { getOrCreateUser } from '@/src/db/users.ts';

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Missing authorization token' }, { status: 401 });
    }

    const token = authHeader.split('Bearer ')[1];
    const decodedToken = await adminAuth.verifyIdToken(token);

    if (!decodedToken.uid || !decodedToken.email) {
      return NextResponse.json({ error: 'Invalid token payload' }, { status: 400 });
    }

    const user = await getOrCreateUser(
      decodedToken.uid,
      decodedToken.email,
      decodedToken.name || undefined
    );

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        role: user.role,
      },
    });
  } catch (err: any) {
    console.error('Error synchronizing user:', err);
    return NextResponse.json(
      { error: 'Failed to synchronize user session' },
      { status: 500 }
    );
  }
}
