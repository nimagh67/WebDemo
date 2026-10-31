import { NextResponse } from "next/server";

// Keeps this route exportable when building a static site (NEXT_STATIC_EXPORT=1)
export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({ message: "Hello, world!" });
}