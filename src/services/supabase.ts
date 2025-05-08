import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ndzblfxeyqmyhaoateis.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || "";

if (!import.meta.env.VITE_SUPABASE_KEY)
  throw new Error("SUPABASE_KEY is required");

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
