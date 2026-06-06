import colleges from "@/data/final-colleges.json";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const college = colleges.find(
    (item: any) => String(item.id) === String(id)
  );

  if (!college) {
    return NextResponse.json(
      { error: "College not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(college);
}