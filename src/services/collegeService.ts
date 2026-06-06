import colleges from "@/data/final-colleges.json";
import { College } from "@/types/college";

export async function getColleges({
  pageParam = 1,
  search = "",
  location = "",
  rating = "",
}: {
  pageParam?: number;
  search?: string;
  location?: string;
  rating?: string;
}) {
  let result: any[] = colleges;

  if (search) {
    result = result.filter((college: any) =>
      college.college_name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (location) {
    result = result.filter((college: any) =>
      college.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  if (rating) {
    const r = Number(rating);
    result = result.filter((college: any) =>
      Number(college.rating || 0) >= r
    );
  }

  const limit = 20;
  const start = (pageParam - 1) * limit;

  return {
    data: result.slice(start, start + limit),
    totalResults: result.length,
    currentPage: pageParam,
    totalPages: Math.ceil(result.length / limit),
  };
}

export async function getLocations() {
  const locations = colleges.map((c: any) => c.location);
  return [...new Set(locations)] as string[];
}

// ✅ FIXED RETURN TYPE
export async function getCollegeById(id: string): Promise<College | null> {
  if (!id) return null;

  const college = colleges.find(
    (item: any) => String(item.id) === String(id)
  );

  if (!college) return null;

  return {
    ...college,
    reviews: college.reviews || [], // ✅ now valid
  } as College;
}