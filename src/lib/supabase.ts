import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.PUBLIC_SUPABASE_URL ?? import.meta.env.SUPABASE_URL;
const anon = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
const service =
  import.meta.env.SUPABASE_SERVICE_ROLE_KEY ?? import.meta.env.SUPABASE_SECRET_KEY;

const opts = { auth: { persistSession: false, autoRefreshToken: false } };

// Untuk login dan baca data publik
export const supabasePublic = createClient(url, anon, opts);

// HANYA untuk server (middleware dan API). Jangan dipakai di kode browser.
export const supabaseAdmin = createClient(url, service, opts);