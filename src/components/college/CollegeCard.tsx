import Link from "next/link";
import Card
    from "@/components/ui/Card";
import {
    College
}
    from "@/types/college";
import CompareButton
    from "@/components/college/CompareButton";

export default function CollegeCard({
    college
}: {
    college: College
}) {
    const placement =
        typeof college.placement === "object"
            &&
            college.placement !== null
            &&
            "average" in college.placement
            ?
            `₹${college.placement.average} LPA`
            :
            `₹${college.placement || "N/A"}`;
    const reviewCount =
        (college as College & {
            review_count?: number
        }).review_count;
    return (

        <Card>
            <div
                className="
                group
                hover:-translate-y-2
                transition-all
                duration-300
                "
            >
                {/* Header */}

                <div
                    className="
                    flex
                    justify-between
                    gap-3
                    items-start
                    "
                >
                    <h2
                        className="
                        text-xl
                        font-bold
                        text-gray-900 dark:text-white
                        group-hover:text-blue-600
                        transition
                        "
                    >
                        {college.college_name}
                    </h2>
                    <span
                        className="
                        bg-yellow-200
                        dark:bg-yellow-400
                        text-orange-700
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        font-semibold
                        whitespace-nowrap
                        "
                    >
                        ⭐ {college.rating ?? "N/A"}
                    </span>
                </div>
                {/* Location */}

                <p
                    className="
                    mt-4
                    text-gray-600 dark:text-gray-300
                    "
                >
                    📍 {college.location}
                </p>
                <div
                    className="
                    mt-5
                    space-y-3
                    text-gray-700 dark:text-gray-300
                    "
                >
                    <p>
                        💰
                        <span className="font-semibold">
                            Fees:
                        </span>
                        {" "}
                        ₹{college.fees ?? "N/A"}
                    </p>
                    <p>
                        🚀
                        <span className="font-semibold">
                            Package:
                        </span>
                        {" "}
                        <span
                            className="
                            text-green-600
                            dark:text-green-400
                            font-bold
                            "
                        >
                            {placement}
                        </span>
                    </p>
                    <p>
                        🏫
                        <span className="font-semibold">
                            Type:
                        </span>
                        {" "}
                        {college.type ?? "N/A"}
                    </p>
                    <p>
                        🎯
                        <span className="font-semibold">
                            Suitable For:
                        </span>
                        {" "}
                        {college.best_suit_for ?? "N/A"}
                    </p>
                    {
                        reviewCount !== undefined &&
                        <p>
                            💬
                            <span className="font-semibold">
                                Reviews:
                            </span>
                            {" "}
                            {reviewCount}
                        </p>
                    }
                </div>
                <div
                    className="
                    mt-6
                    flex
                    justify-between
                    items-center
                    gap-3
                    "
                >
                    <Link
                        href={`/colleges/${college.id}`}
                        className="
                        bg-gradient-to-r
                        from-blue-600
                        to-purple-600
                        text-white
                        px-4
                        py-2
                        rounded-xl
                        hover:scale-105
                        transition
                        shadow-md
                        "
                    >
                        View Details →
                    </Link>
                    <CompareButton
                        college={college}
                    />
                </div>
            </div>
        </Card>
    )
}