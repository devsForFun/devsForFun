import { supabase } from "@/lib/supabaseCient";
import { NextResponse } from "next/server";

export async function GET() {
  const { data, error } = await supabase.from("s1-leads-info").select("*");

  if (error) {
    console.error("Error fetching leads info:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch leads info",
    });
  }

  const leadsInfo = data;

  return NextResponse.json(leadsInfo);
}
