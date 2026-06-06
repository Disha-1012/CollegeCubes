"use client";

import {
    useInfiniteQuery,
    useQuery,
} from "@tanstack/react-query";

import {
    useState,
    useEffect,
    useRef,
} from "react";

import { useDebounce } from "use-debounce";

import CollegeCard from "@/components/college/CollegeCard";
import FilterBar from "@/components/college/FilterBar";
import { getColleges, getLocations } from "@/services/collegeService";
import { College } from "@/types/college";

export default function Colleges() {
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");
    const [rating, setRating] = useState("");
    const [visibleCount, setVisibleCount] = useState(20);
    const topRef = useRef<HTMLDivElement | null>(null);
    const [debouncedSearch] = useDebounce(search, 500);

    const { data: locations = [] } = useQuery({
        queryKey: ["locations"],
        queryFn: getLocations,
    });

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
    } = useInfiniteQuery({
        queryKey: ["colleges", debouncedSearch, location, rating],
        queryFn: ({ pageParam }) =>
            getColleges({ pageParam, search: debouncedSearch, location, rating }),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            if (lastPage.currentPage < lastPage.totalPages)
                return lastPage.currentPage + 1;
            return undefined;
        },
    });

    useEffect(() => {
        setVisibleCount(20);
    }, [debouncedSearch, location, rating]);

    if (isLoading)
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4">
                <div className="relative w-14 h-14">
                    <div className="absolute inset-0 rounded-full border-4 border-blue-100" />
                    <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
                </div>
                <p className="text-gray-500 text-sm font-medium tracking-wide animate-pulse">
                    Fetching colleges…
                </p>
            </div>
        );

    const allColleges = data?.pages.flatMap((page) => page.data) || [];
    const visibleColleges = allColleges.slice(0, visibleCount);

    const handleSeeMore = async () => {
        if (visibleCount + 20 <= allColleges.length) {
            setVisibleCount((prev) => prev + 20);
        } else if (hasNextPage) {
            await fetchNextPage();
            setVisibleCount((prev) => prev + 20);
        }
    };

    const handleSeeLess = () => {
        setVisibleCount(20);
        topRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const totalShowing = visibleColleges.length;
    const totalAvailable = allColleges.length;

    return (
        <div
            ref={topRef}
            className="min-h-screen bg-gray-50 dark:bg-slate-950"
        >
            {/* ── Page Header Banner ── */}
            <div className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-xs text-gray-400 mb-5">
                        <a href="/" className="hover:text-blue-600 transition-colors font-medium">
                            Home
                        </a>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300 font-medium">Colleges</span>
                    </nav>

                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                        <div>
                            <h1
                                className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight"
                                style={{ fontFamily: "'Georgia','Cambria',serif" }}
                            >
                                Explore Colleges
                            </h1>
                            <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
                                Discover, filter, and compare top colleges across India.
                            </p>
                        </div>

                        {/* Live result count chip */}
                        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold px-4 py-2 rounded-full shrink-0">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse inline-block" />
                            {totalAvailable} College{totalAvailable !== 1 ? "s" : ""} Found
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Main content ── */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">

                {/* Filter bar */}
                <div className="mb-8">
                    <FilterBar
                        search={search}
                        setSearch={setSearch}
                        location={location}
                        setLocation={setLocation}
                        rating={rating}
                        setRating={setRating}
                        locations={locations}
                    />
                </div>

                {/* Results info row */}
                {totalAvailable > 0 && (
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Showing{" "}
                            <span className="font-semibold text-gray-800 dark:text-gray-200">
                                {totalShowing}
                            </span>{" "}
                            of{" "}
                            <span className="font-semibold text-gray-800 dark:text-gray-200">
                                {totalAvailable}
                            </span>{" "}
                            colleges
                        </p>
                        {/* Progress bar */}
                        <div className="hidden sm:flex items-center gap-3">
                            <div className="w-36 h-1.5 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-blue-600 rounded-full transition-all duration-500"
                                    style={{ width: `${Math.min((totalShowing / totalAvailable) * 100, 100)}%` }}
                                />
                            </div>
                            <span className="text-xs text-gray-400 font-medium">
                                {Math.round(Math.min((totalShowing / totalAvailable) * 100, 100))}%
                            </span>
                        </div>
                    </div>
                )}

                {/* Empty state */}
                {visibleColleges.length === 0 && !isLoading && (
                    <div className="flex flex-col items-center justify-center py-24 gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center">
                            <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z" />
                            </svg>
                        </div>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">No colleges found</p>
                        <p className="text-sm text-gray-400">Try adjusting your search or filter criteria.</p>
                    </div>
                )}

                {/* College grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleColleges.map((college: College) => (
                        <CollegeCard key={college.id} college={college} />
                    ))}
                </div>

                {/* ── Pagination controls ── */}
                <div className="mt-14 flex flex-col items-center gap-4">

                    {/* Buttons row */}
                    {(visibleCount < allColleges.length || hasNextPage) && (
                        <button
                            onClick={handleSeeMore}
                            disabled={isFetchingNextPage}
                            className="
                group inline-flex items-center gap-2.5
                bg-blue-600 hover:bg-blue-700 disabled:opacity-70
                text-white font-semibold text-sm
                px-8 py-3.5 rounded-xl
                shadow-sm hover:shadow-blue-200 dark:hover:shadow-blue-900 hover:shadow-lg
                hover:-translate-y-[1px]
                transition-all duration-200
              "
                        >
                            {isFetchingNextPage ? (
                                <>
                                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                    </svg>
                                    Loading…
                                </>
                            ) : (
                                <>
                                    Load More Colleges
                                    <svg className="w-4 h-4 group-hover:translate-y-[1px] transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </>
                            )}
                        </button>
                    )}

                    {visibleCount > 20 && (
                        <button
                            onClick={handleSeeLess}
                            className="
                group inline-flex items-center gap-2
                bg-white dark:bg-slate-800
                border border-gray-200 dark:border-slate-700
                text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400
                font-semibold text-sm
                px-8 py-3.5 rounded-xl
                shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800
                hover:-translate-y-[1px]
                transition-all duration-200
              "
                        >
                            <svg className="w-4 h-4 group-hover:-translate-y-[1px] transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                            </svg>
                            Show Less
                        </button>
                    )}

                    {/* End-of-list notice */}
                    {!hasNextPage && visibleCount >= allColleges.length && allColleges.length > 0 && (
                        <div className="flex flex-col items-center gap-2 pt-2">
                            <div className="flex items-center gap-3 text-gray-400 text-xs">
                                <span className="h-px w-16 bg-gray-200 dark:bg-slate-700 inline-block" />
                                You've viewed all {totalAvailable} colleges
                                <span className="h-px w-16 bg-gray-200 dark:bg-slate-700 inline-block" />
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}