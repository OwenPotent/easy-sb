import { createClient, SupabaseClient, SupabaseClientOptions } from "@supabase/supabase-js";
import { ClientOptions } from "../Interfaces/Options";

export class SBClient {

    private supabaseURL: string
    private supabaseKey: string
    private options?: SupabaseClientOptions
    private client!: SupabaseClient

    constructor(options: ClientOptions) {
        this.supabaseURL = options.supabaseURL
        this.supabaseKey = options.supabaseKey
        this.options = options.options;

        (() => {
            createClient(this.supabaseURL, this.supabaseKey, this.options)
        })()
    }

    /**
     * Gets the given value from the given table
     * 
     * @param table - SQL Table from Supabase Dashboard
     * @param value - Value used to find
     * @returns Given value
     */
    public async get(table: string, value?: string) {
        const data = await this.client.from(table).select(value)

        return data.data;
    }

    /**
     * Gets all the value from the given table, and pushes it into an array
     * 
     * @param table SQL Table from Supabase Dashboard
     * @returns All values from the table
     */
    public async getAll(table: string) {
        const data = await this.client.from(table).select("*")

        return data.data;
    }

    /**
     * Performs a "DELETE" method on the given table, that being deleting the given table from the Database
     * 
     * @param table SQL Table from Supabase Dashboard
     */
    public async delete(table: string) {
        await this.client.from(table).delete()
    }

    /**
     * Performs an UPDATE on the table. Edits the value given
     * 
     * @param table SQL Table from Supabase Dashboard
     * @param value Value to edit
     */
    public async edit(table: string, values: Partial<any>) {
        await this.client.from(table).update(values)
    }

    /**
     * Performs an UPSERT into the table. Upserts a new value into the table.
     * 
     * @param table SQL Table from Supabase Dashboard
     * @param values Value to insert
     */
    public async upsert(table: string, values: Partial<any>) {
        await this.client.from(table).upsert(values)
    }

    /**
     * Performs an INSERT into the table. Inserts a new value into the table.
     * 
     * @param table SQL Table from Supabase Dashboard
     * @param values Value to insert
     */
    public async insert(table: string, values: Partial<any>) {
        await this.client.from(table).insert(values)
    }
}