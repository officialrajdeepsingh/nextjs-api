import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request?.nextUrl.searchParams;

  const getLimit = searchParams.get("limit") || 5;
  const getSkip = searchParams.get("skip") || 0;

  const data = await fetch(
    `https://dummyjson.com/posts?limit=${getLimit}&skip=${getSkip}`,
  );

  const { posts, total, skip, limit } = await data.json();

  return NextResponse.json({ posts, total, skip, limit });
}
