import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const requestBody = await request.json();

  const { title, body, userId } = requestBody;

  const data = await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "Lorem ipsum dolor sit amet.",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      userId: 5,
    }),
  });

  const post = await data.json();

  return NextResponse.json({
    success: "Your post has been created successfully.",
    post,
  });
}
