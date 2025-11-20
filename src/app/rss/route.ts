import { NextResponse } from "next/server";

// This route is not being used in the current setup
export const dynamic = "force-static";

export function GET() {
  return NextResponse.json(
    { message: "RSS feed is not enabled" },
    {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
