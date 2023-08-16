export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          category: string | null
          created_at: string
          description: string
          id: string
          img: string | null
          name: string
          price: number
        }
        Insert: {
          category?: string | null
          created_at?: string
          description: string
          id?: string
          img?: string | null
          name: string
          price: number
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string
          id?: string
          img?: string | null
          name?: string
          price?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
