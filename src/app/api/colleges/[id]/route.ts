import {
    NextResponse
}
    from "next/server";
import colleges
    from "@/data/final-colleges.json";
export async function GET(

    req: Request,
    {
        params
    }:
        {
            params: Promise<{
                id: string
            }>
        }
) {
    // unwrap params
    
    const {
        id
    }
        =
        await params;
    const college =
        (colleges as any[])
            .find(
                (item) =>
                    String(item.id)
                    ===
                    String(id)
            );
    if (!college) {
        return NextResponse.json(
            {
                message:
                    "College Not Found"
            },
            {
                status: 404
            }
        );
    }
    return NextResponse.json(
        college
    );
}