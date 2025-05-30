export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      contact_messages: {
        Row: {
          created_at: string
          email: string
          id: string
          is_read: boolean | null
          message: string
          name: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          is_read?: boolean | null
          message: string
          name: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          is_read?: boolean | null
          message?: string
          name?: string
        }
        Relationships: []
      }
      crypto_assets: {
        Row: {
          coingecko_id: string | null
          created_at: string
          id: string
          is_borrowable_asset: boolean | null
          is_collateral_asset: boolean | null
          liquidation_threshold: number | null
          logo_url: string | null
          ltv_ratio: number | null
          market_cap: number | null
          name: string
          price_change_24h: number | null
          price_usd: number
          symbol: string
          updated_at: string
        }
        Insert: {
          coingecko_id?: string | null
          created_at?: string
          id?: string
          is_borrowable_asset?: boolean | null
          is_collateral_asset?: boolean | null
          liquidation_threshold?: number | null
          logo_url?: string | null
          ltv_ratio?: number | null
          market_cap?: number | null
          name: string
          price_change_24h?: number | null
          price_usd?: number
          symbol: string
          updated_at?: string
        }
        Update: {
          coingecko_id?: string | null
          created_at?: string
          id?: string
          is_borrowable_asset?: boolean | null
          is_collateral_asset?: boolean | null
          liquidation_threshold?: number | null
          logo_url?: string | null
          ltv_ratio?: number | null
          market_cap?: number | null
          name?: string
          price_change_24h?: number | null
          price_usd?: number
          symbol?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          first_name: string | null
          id: string
          last_name: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          first_name?: string | null
          id: string
          last_name?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          created_at: string
          id: string
          is_approved: boolean | null
          location: string | null
          name: string
          rating: number
          text: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_approved?: boolean | null
          location?: string | null
          name: string
          rating: number
          text: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_approved?: boolean | null
          location?: string | null
          name?: string
          rating?: number
          text?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      user_positions: {
        Row: {
          amount: number
          asset_symbol: string
          created_at: string
          id: string
          position_type: string
          updated_at: string
          user_id: string | null
          value_usd: number
          wallet_address: string
        }
        Insert: {
          amount?: number
          asset_symbol: string
          created_at?: string
          id?: string
          position_type: string
          updated_at?: string
          user_id?: string | null
          value_usd?: number
          wallet_address: string
        }
        Update: {
          amount?: number
          asset_symbol?: string
          created_at?: string
          id?: string
          position_type?: string
          updated_at?: string
          user_id?: string | null
          value_usd?: number
          wallet_address?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_positions_asset_symbol_fkey"
            columns: ["asset_symbol"]
            isOneToOne: false
            referencedRelation: "crypto_assets"
            referencedColumns: ["symbol"]
          },
        ]
      }
      user_wallets: {
        Row: {
          balance_bnb: number | null
          created_at: string
          id: string
          is_active: boolean | null
          network_id: string
          updated_at: string
          user_id: string | null
          wallet_address: string
          wallet_type: string
        }
        Insert: {
          balance_bnb?: number | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          network_id?: string
          updated_at?: string
          user_id?: string | null
          wallet_address: string
          wallet_type: string
        }
        Update: {
          balance_bnb?: number | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          network_id?: string
          updated_at?: string
          user_id?: string | null
          wallet_address?: string
          wallet_type?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin: {
        Args: { user_id: string }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
