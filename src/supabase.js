import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qnuudofrbwbvatocxnrd.supabase.co";
const supabaseKey = "sb_publishable_Elq-ERG_9ImgBzBR8nm31w_a9QWSd3x";

export const supabase = createClient(supabaseUrl, supabaseKey);