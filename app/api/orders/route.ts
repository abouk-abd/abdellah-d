import { NextRequest, NextResponse } from 'next/server';
import { createOrder, getOrders } from '@/src/db/orders.ts';
import { getOrCreateUser } from '@/src/db/users.ts';
import { adminAuth } from '@/src/lib/firebase-admin.ts';
import { supabase } from '@/src/lib/supabase.ts';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, phone, city, address, packId, packName, totalPrice, notes } = body;

    if (!fullName || !phone || !city || !packId || !totalPrice) {
      return NextResponse.json(
        { error: 'Missing required order fields' },
        { status: 400 }
      );
    }

    // Optional user authentication via Bearer token
    let userId: number | undefined;
    const authHeader = req.headers.get('authorization');
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split('Bearer ')[1];
      try {
        const decodedToken = await adminAuth.verifyIdToken(token);
        if (decodedToken.uid && decodedToken.email) {
          const dbUser = await getOrCreateUser(
            decodedToken.uid,
            decodedToken.email,
            decodedToken.name || undefined
          );
          if (dbUser) {
            userId = dbUser.id;
          }
        }
      } catch (authErr) {
        console.warn('Bearer token could not be verified for order, proceeding as guest order:', authErr);
      }
    }

    // Save order in Cloud SQL PostgreSQL
    const savedOrder = await createOrder({
      fullName: String(fullName).trim(),
      phone: String(phone).trim(),
      city: String(city).trim(),
      address: address ? String(address).trim() : undefined,
      packId: String(packId),
      packName: String(packName || 'Balurix Gut Relief'),
      totalPrice: Number(totalPrice),
      notes: notes ? String(notes).trim() : undefined,
      userId,
    });

    // Also attempt sync to Supabase project (https://bidmneoqtggvvdymttwu.supabase.co) if table 'orders' exists
    try {
      await supabase.from('orders').insert([
        {
          full_name: String(fullName).trim(),
          phone: String(phone).trim(),
          city: String(city).trim(),
          address: address ? String(address).trim() : null,
          pack_id: String(packId),
          pack_name: String(packName || 'Balurix Gut Relief'),
          total_price: Number(totalPrice),
          status: 'pending',
          created_at: new Date().toISOString(),
        }
      ]);
    } catch (supabaseErr) {
      console.warn('Supabase dual-write sync note (table may not be created yet in Supabase):', supabaseErr);
    }

    return NextResponse.json({
      success: true,
      orderId: savedOrder.id,
      message: 'Order created successfully and synchronized',
    });
  } catch (err: any) {
    console.error('Order creation error:', err);
    return NextResponse.json(
      { error: err.message || 'Unable to place order at this time. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.split('Bearer ')[1];
    await adminAuth.verifyIdToken(token);

    const ordersList = await getOrders(50);
    return NextResponse.json({ orders: ordersList });
  } catch (err: any) {
    console.error('Error fetching orders:', err);
    return NextResponse.json(
      { error: 'Failed to retrieve orders' },
      { status: 500 }
    );
  }
}
