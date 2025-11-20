import { NextResponse } from "next/server";

// This route is not being used in the current setup
export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json(
    { message: "This feature is not enabled" },
    {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
