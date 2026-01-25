import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// MODO DEMO - Supabase desativado temporariamente
// Para ativar: adicione VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY no Vercel
export const supabase: SupabaseClient | null = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export const isSupabaseEnabled = !!supabase;

// Types for our database
export interface User {
    id: string;
    email: string;
    name: string;
    website?: string;
    created_at: string;
    updated_at: string;
}

export interface UserDashboard {
    id: string;
    user_id: string;
    goal?: string;
    income?: number;
    clients?: number;
    created_at: string;
    updated_at: string;
}
