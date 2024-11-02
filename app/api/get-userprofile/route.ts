import { supabase } from "@/lib/supabaseCient";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Extract the ID from the query parameters
  const { searchParams } = new URL(request.url);
  const userName = searchParams.get("username"); // Assuming you want to get by 'id'
  if (!userName) {
    return NextResponse.json({
      success: false,
      error: "No person ID provide",
    });
  }

  // Fetch data for the specific person from the "s1-finishers" table
  const { data, error } = await supabase
    .from("s1-finishers")
    .select("*")
    .eq("username", userName) // Assuming 'id' is the column used to identify the person
    .single(); // Use .single() to get a single record

  if (error) {
    console.error("Error fetching finisher:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch finisher",
    });
  }

  return NextResponse.json(data);
}
