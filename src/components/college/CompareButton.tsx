"use client";
import {
    College
}
    from "@/types/college";
import {
    useCompareStore
}
    from "@/store/compareStore";
export default function CompareButton({
    college
}: {
    college: College
}) {
    const addCollege =
        useCompareStore(
            state => state.addCollege
        );
    const colleges =
        useCompareStore(
            state => state.colleges
        );
    const handleCompare = () => {
        // Maximum 4 college limit

        if (colleges.length >= 4) {
            alert(
                "Maximum 4 colleges can be compared"
            );
            return;
        }
        // Prevent duplicate college
        const alreadyAdded =
            colleges.some(
                item =>
                    item.id === college.id
            );
        if (alreadyAdded) {
            alert(
                "College already added for comparison"
            );
            return;
        }
        addCollege(college);
    };
    return (
        <button
            onClick={handleCompare}
            className="
            bg-purple-600
            text-white
            px-4
            py-2
            rounded-xl
            hover:bg-purple-700
            transition
            "
        >
            Add Compare
        </button>
    )
}