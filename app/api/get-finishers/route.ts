import { supabase } from "@/lib/supabaseCient";
import { NextResponse } from "next/server";

export async function GET() {
  // fetch data from supbase, in the table called "s1-finishers" and return the json response
  const { data, error } = await supabase.from("s1-finishers").select("*"); // select all columns

  if (error) {
    console.error("Error fetching finishers:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch finishers",
    });
  }

  const finishers = data;

  return NextResponse.json(finishers);
}
