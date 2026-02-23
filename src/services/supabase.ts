import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";

if (!import.meta.env.VITE_SUPABASE_URL)
  throw new Error("SUPABASE_URL is required");
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || "";

if (!import.meta.env.VITE_SUPABASE_KEY)
  throw new Error("SUPABASE_KEY is required");

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
