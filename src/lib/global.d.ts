import type { Database as DB } from "./database.types"

declare global {
    type Database = DB
    type product = DB["public"]["Tables"]["products"]["Row"]
}