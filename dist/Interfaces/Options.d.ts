import { SupabaseClientOptions } from "@supabase/supabase-js";
export interface ClientOptions {
    supabaseURL: string;
    supabaseKey: string;
    options?: SupabaseClientOptions;
}
