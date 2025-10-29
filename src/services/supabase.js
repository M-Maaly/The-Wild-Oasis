import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://pebzqkzedofuymicqttl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlYnpxa3plZG9mdXltaWNxdHRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3NDYzMTcsImV4cCI6MjA3NDMyMjMxN30.SZgP6ohF4A5SLlCgphuzjdo801kHCxp_zsvkNbYa2so";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
