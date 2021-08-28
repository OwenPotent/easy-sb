import { ClientOptions } from "../Interfaces/Options";
export declare class SBClient {
    private supabaseURL;
    private supabaseKey;
    private options?;
    private client;
    constructor(options: ClientOptions);
    /**
     * Gets the given value from the given table
     *
     * @param table - SQL Table from Supabase Dashboard
     * @param value - Value used to find
     * @returns Given value
     */
    get(table: string, value?: string): Promise<any[] | null>;
    /**
     * Gets all the value from the given table, and pushes it into an array
     *
     * @param table SQL Table from Supabase Dashboard
     * @returns All values from the table
     */
    getAllValueFromTable(table: string): Promise<any[] | null>;
    /**
     * Performs a "DELETE" method on the given table, that being deleting the given table from the Database
     *
     * @param table SQL Table from Supabase Dashboard
     */
    delete(table: string): Promise<void>;
    /**
     * Performs an UPDATE on the table. Edits the value given
     *
     * @param table SQL Table from Supabase Dashboard
     * @param value Value to edit
     */
    edit(table: string, values: Partial<any>): Promise<void>;
    /**
     * Performs an UPSERT into the table. Upserts a new value into the table.
     *
     * @param table SQL Table from Supabase Dashboard
     * @param values Value to insert
     */
    upsert(table: string, values: Partial<any>): Promise<void>;
    /**
     * Performs an INSERT into the table. Inserts a new value into the table.
     *
     * @param table SQL Table from Supabase Dashboard
     * @param values Value to insert
     */
    insert(table: string, values: Partial<any>): Promise<void>;
}
