import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://bidmneoqtggvvdymttwu.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || 'sb_publishable_OF9qnG6jpO7iwdvCwPZ1rw_fIJec5lj';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function verifySupabaseUser(token: string) {
  try {
    const { data: { user }, error } = await supabase.auth.getUser(token);
    if (error || !user) {
      return null;
    }
    return user;
  } catch (err) {
    console.error('verifySupabaseUser error:', err);
    return null;
  }
}
