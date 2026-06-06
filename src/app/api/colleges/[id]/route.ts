import colleges from "@/data/final-colleges.json";
import { NextRequest, NextResponse } from "next/server";
import { getCollegeById } from "@/services/collegeService";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    const college = await getCollegeById(id);

    if (!college) {
      return NextResponse.json(
        { error: "College not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(college);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}