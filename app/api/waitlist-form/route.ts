import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email } = await req.json();

  const formUrl = process.env.FORM_URL as string;
  const formId1 = process.env.FORM_ID1 as string;
  const formId2 = process.env.FORM_ID2 as string;

  const formBody = new URLSearchParams({
    [formId1]: name,
    [formId2]: email,
  });

  try {
    const response = await fetch(formUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody.toString(),
    });

    return NextResponse.json({ success: response.ok });
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to submit form",
    });
  }
}
