import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  const data = await fetch(`https://dummyjson.com/posts/${slug}`);

  const post = await data.json();

  return NextResponse.json({ post });
}
