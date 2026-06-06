"use client";

interface Props {
    search: string;
    setSearch:
    (value: string) => void;
    location: string;
    setLocation:
    (value: string) => void;
    rating: string;
    setRating:
    (value: string) => void;
    locations: string[];
}
export default function FilterBar({

    search,
    setSearch,
    location,
    setLocation,
    rating,
    setRating,
    locations
}: Props) {
    const inputStyle = `
    border
    rounded-xl
    p-3
    w-full
    bg-white
    dark:bg-slate-900
    text-gray-900
    dark:text-white
    placeholder:text-gray-400
    dark:placeholder:text-gray-500
    border-gray-300
    dark:border-gray-700
    outline-none
    focus:ring-2
    focus:ring-blue-500
    transition-all
    duration-300
    `;
    const selectStyle = `
    border
    rounded-xl
    p-3
    w-full
    bg-white
    dark:bg-slate-900
    text-gray-900
    dark:text-white
    border-gray-300
    dark:border-gray-700
    outline-none
    focus:ring-2
    focus:ring-blue-500
    transition-all
    duration-300
    [&>option]:bg-white
    dark:[&>option]:bg-slate-900
    [&>option]:text-gray-900
    dark:[&>option]:text-white
    `;
    return (

        <div
            className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-4
            mb-8
            "
        >
            {/* Search */}

            <input
                value={search}
                onChange={
                    (e) =>
                        setSearch(
                            e.target.value
                        )
                }
                placeholder="Search college..."
                className={inputStyle}
            />
            {/* Location */}

            <select
                value={location}
                onChange={
                    (e) =>
                        setLocation(
                            e.target.value
                        )
                }
                className={selectStyle}
            >
                <option value="">
                    All Locations
                </option>
                {
                    locations.map(
                        (loc) => (
                            <option
                                key={loc}
                                value={loc}
                            >
                                {loc}
                            </option>
                        )
                    )
                }
            </select>
            {/* Rating */}

            <select
                value={rating}
                onChange={
                    (e) =>
                        setRating(
                            e.target.value
                        )
                }
                className={selectStyle}
            >
                <option value="">
                    All Ratings
                </option>
                <option value="5">
                    ⭐ 1-5+
                </option>
                <option value="6">
                    ⭐ 6+
                </option>
                <option value="7">
                    ⭐ 7+
                </option>
                <option value="8">
                    ⭐ 8+
                </option>
                <option value="9">
                    ⭐ 9+
                </option>
                <option value="10">
                    ⭐ 10
                </option>
            </select>
        </div>
    )
}