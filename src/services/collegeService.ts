import {
    College
}
    from "@/types/college";
    
export async function getColleges(
    {
        pageParam = 1,
        search = "",
        location = "",
        rating = ""
    }:
        {
            pageParam?: number;
            search?: string;
            location?: string;
            rating?: string;
        }
) {
    const params =
        new URLSearchParams();
    params.append(
        "page",
        String(pageParam)
    );
    if (search)
        params.append(
            "search",
            search
        );
    if (location)
        params.append(
            "location",
            location
        );
    if (rating)
        params.append(
            "rating",
            rating
        );
    const response =
        await fetch(
            `/api/colleges?${params}`,
            {
                cache: "no-store"
            }
        );
    if (!response.ok) {
        throw new Error(
            "Failed loading colleges"
        );
    }
    return response.json();
}
export async function getLocations() {

    const response =
        await fetch(
            "/api/colleges?page=1"
        );
    const json =
        await response.json();
    const colleges =
        json.data || json;
    const locations =
        colleges.map(
            (college: College) =>
                college.location
        );
    return [
        ...new Set(locations)
    ] as string[];
}
export async function getCollegeById(
    id:string
){
    const response =
        await fetch(
            `/api/colleges/${id}`,
            {
                cache:"no-store"
            }
        );
    if(!response.ok){
        console.log(
            "College API failed",
            response.status
        );
        return null;
    }
    const college =
        await response.json();
    return {
        ...college,
        reviews:
            college.reviews || []
    };
}