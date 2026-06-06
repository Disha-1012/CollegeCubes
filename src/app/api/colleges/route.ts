import {
    NextResponse
}
    from "next/server";
import colleges
    from "@/data/final-colleges.json";
export async function GET(
    req: Request
) {
    const {
        searchParams
    }
        =
        new URL(req.url);
    const page =
        Number(
            searchParams.get("page")
        )
        ||
        1;
    const limit = 20;
    const search =
        searchParams.get("search")
        ||
        "";
    const location =
        searchParams.get("location")
        ||
        "";
    const rating =
        Number(
            searchParams.get("rating")
        )
        ||
        0;
    let result: any[] =
        colleges;
    // Search filter
    if (search) {
        result =
            result.filter(
                (college: any) =>
                    college.college_name
                        .toLowerCase()
                        .includes(
                            search.toLowerCase()
                        )
            );
    }
    // Location filter
    if (location) {
        result =
            result.filter(
                (college: any) =>
                    college.location
                        .toLowerCase()
                        .includes(
                            location.toLowerCase()
                        )
            );
    }
    // Rating filter

    if (rating) {
        if (rating === 5) {
            result =
                result.filter(
                    college =>
                        Number(college.rating || 0)
                        >= 1
                        &&
                        Number(college.rating || 0)
                        <= 5
                );
        }
        else {
            result =
                result.filter(
                    college =>
                        Number(college.rating || 0)
                        >= rating
                );
        }
    }
    // Pagination
    const total =
        result.length;
    const start =
        (page - 1)
        *
        limit;
    const paginated =
        result.slice(
            start,
            start + limit
        );
    return NextResponse.json({
        data: paginated,
        currentPage: page,
        totalPages:
            Math.ceil(
                total / limit
            ),
        totalResults: total
    });
}