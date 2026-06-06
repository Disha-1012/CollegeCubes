"use client";

import { College }
    from "@/types/college";
import {
    useSavedStore
}
    from "@/store/savedStore";

export default function SaveButton({
    college
}: {
    college: College
}) {
    const save =
        useSavedStore(
            state => state.saveCollege
        );
    return (
        <button
            onClick={() =>
                save(college)
            }
            className="bg-purple-600tex t-white px-4 py-2 rounded"
        >
            Save College
        </button>
    )
}
