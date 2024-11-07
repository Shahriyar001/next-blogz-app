import { NextRequest, NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({ message: "Hello from server" });
};

export const POST = (request: Request) => {
  return NextRequest.json({ message: "Hello from server" });
};

export const DELETE = () => {
  return NextResponse.json({ message: "Hello from server" });
};

export const PUT = () => {
  return NextResponse.json({ message: "Hello from server" });
};

export const PATCH = () => {
  return NextResponse.json({ message: "Hello from server" });
};
