import { getCollegeById } from "@/services/collegeService";
import Card from "@/components/ui/Card";
import SaveButton from "@/components/college/SaveButton";

export default async function CollegeDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const college = await getCollegeById(id);

  if (!college)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 rounded-2xl bg-red-50 flex items-center justify-center mx-auto">
            <svg className="w-10 h-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900">College Not Found</h1>
          <p className="text-gray-500 text-sm">The college you're looking for doesn't exist or has been removed.</p>
          <a
            href="/colleges"
            className="inline-flex items-center gap-2 mt-2 text-blue-600 font-semibold text-sm hover:underline"
          >
            ← Back to Colleges
          </a>
        </div>
      </div>
    );

  const placement =
    typeof college.placement === "object" && college.placement !== null
      ? college.placement.average
      : college.placement;

  const rating = college.rating || 0;
  const ratingPercent = Math.min((Number(rating) / 10) * 100, 100);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">

      {/* ── Hero Header ── */}
      <div className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-10">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <a href="/" className="hover:text-blue-600 transition-colors font-medium">Home</a>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <a href="/colleges" className="hover:text-blue-600 transition-colors font-medium">Colleges</a>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-600 dark:text-gray-300 font-medium truncate max-w-[180px]">
              {college.college_name}
            </span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div className="flex items-start gap-5">
              {/* College avatar */}
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0121 21H3a12.083 12.083 0 012.84-10.422L12 14z" />
                </svg>
              </div>

              <div>
                <h1
                  className="text-2xl lg:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight"
                  style={{ fontFamily: "'Georgia','Cambria',serif" }}
                >
                  {college.college_name}
                </h1>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {college.location}
                  </span>

                  <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 inline-block" />

                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {college.type}
                  </span>

                  {/* Rating badge */}
                  <span className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full">
                    <svg className="w-3.5 h-3.5 fill-amber-400 text-amber-400" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    {rating || "N/A"}/10
                  </span>
                </div>
              </div>
            </div>

            {/* ── SaveButton — visually prominent wrapper ── */}
            <div className="shrink-0 flex flex-col items-stretch sm:items-end gap-1.5">
              {/*
                This wrapper makes SaveButton look like a proper CTA regardless
                of what HTML element SaveButton renders internally.
                The [&_button] and [&_a] descendant selectors reset any inherited
                styles and push white text + transparent background so the wrapper
                colour shows through cleanly.
              */}
              <div
                className="
                  inline-flex items-center justify-center gap-2
                  min-w-[152px] px-5 py-3
                  rounded-xl
                  bg-blue-600 hover:bg-blue-700
                  border-2 border-blue-600 hover:border-blue-700
                  text-white font-semibold text-sm
                  shadow-md hover:shadow-lg hover:shadow-blue-200 dark:hover:shadow-blue-900
                  active:scale-95
                  transition-all duration-200
                  cursor-pointer
                  [&_button]:bg-transparent [&_button]:border-0 [&_button]:p-0
                  [&_button]:text-white [&_button]:font-semibold [&_button]:text-sm
                  [&_button]:cursor-pointer [&_button]:outline-none
                  [&_a]:text-white [&_a]:font-semibold [&_a]:text-sm [&_a]:no-underline
                "
              >
                {/* Decorative bookmark icon sits to the left of whatever SaveButton renders */}
                <svg
                  className="w-4 h-4 shrink-0 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <SaveButton college={college} />
              </div>
              <p className="text-[10px] text-gray-400 text-center sm:text-right tracking-wide">
                Add to your shortlist
              </p>
            </div>

          </div>

          {/* Quick stat pills */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              {
                label: "Annual Fees",
                value: `₹${Number(college.fees).toLocaleString("en-IN")}`,
                icon: (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                label: "Avg. Package",
                value: `₹${placement}`,
                icon: (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
              },
              {
                label: "Best Suited For",
                value: college.best_suit_for,
                icon: (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="inline-flex items-center gap-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl px-4 py-2.5"
              >
                <span className="text-blue-600 dark:text-blue-400">{stat.icon}</span>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold leading-none mb-0.5">{stat.label}</p>
                  <p className="text-sm font-bold text-gray-800 dark:text-gray-100">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Body sections ── */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-10 space-y-6">

        {/* Overview */}
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Overview
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Institution Type", value: college.type },
              { label: "Best Suited For", value: college.best_suit_for },
              { label: "Annual Fees", value: `₹${Number(college.fees).toLocaleString("en-IN")}` },
              { label: "Rating", value: `${rating || "N/A"} / 10` },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-gray-50 dark:bg-slate-800/60 border border-gray-100 dark:border-slate-700 rounded-xl px-5 py-4"
              >
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">
                  {item.label}
                </p>
                <p className="text-base font-bold text-gray-800 dark:text-gray-100">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Rating visual bar */}
          <div className="mt-5 bg-gray-50 dark:bg-slate-800/60 border border-gray-100 dark:border-slate-700 rounded-xl px-5 py-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Overall Rating</p>
              <span className="text-sm font-extrabold text-amber-600">{rating || "N/A"} / 10</span>
            </div>
            <div className="w-full h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-400 rounded-full transition-all duration-700"
                style={{ width: `${ratingPercent}%` }}
              />
            </div>
          </div>
        </Card>

        {/* Placement */}
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-green-50 dark:bg-green-950/40 flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Placement
            </h2>
          </div>

          <div className="flex items-center justify-between bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 border border-green-100 dark:border-green-900/40 rounded-2xl px-6 py-5">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Average Package</p>
              <p className="text-3xl font-extrabold text-green-700 dark:text-green-400">
                ₹{placement}
              </p>
              <p className="text-xs text-gray-400 mt-1">Per annum (CTC)</p>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-green-600 flex items-center justify-center shadow-md">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </Card>

        {/* Courses */}
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-950/40 flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Courses
            </h2>
          </div>

          <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/40 rounded-2xl px-6 py-5 flex items-start gap-4">
            <svg className="w-5 h-5 text-purple-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Available programs are based on:{" "}
              <span className="font-bold text-gray-900 dark:text-white">
                {college.best_suit_for}
              </span>
            </p>
          </div>
        </Card>

        {/* Reviews */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Student Reviews
              </h2>
            </div>
            {college.reviews && college.reviews.length > 0 && (
              <span className="text-xs font-semibold text-gray-400 bg-gray-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                {college.reviews.length} review{college.reviews.length !== 1 ? "s" : ""}
              </span>
            )}
          </div>

          {college.reviews && college.reviews.length > 0 ? (
            <div className="space-y-4">
              {college.reviews.map((review: any) => {
                const reviewRating = Number(review.rating) || 0;
                const stars = Math.round(reviewRating / 2);
                return (
                  <div
                    key={review.id}
                    className="bg-gray-50 dark:bg-slate-800/60 border border-gray-100 dark:border-slate-700 rounded-2xl p-5 hover:shadow-sm transition-shadow"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
                          {review.user?.charAt(0)?.toUpperCase() || "U"}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 dark:text-white text-sm">
                            {review.user}
                          </p>
                          <div className="flex items-center gap-0.5 mt-0.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <svg
                                key={s}
                                className={`w-3 h-3 ${s <= stars ? "text-amber-400 fill-amber-400" : "text-gray-300 fill-gray-200"}`}
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <span className="shrink-0 inline-flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full">
                        <svg className="w-3 h-3 fill-amber-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        {review.rating}/10
                      </span>
                    </div>
                    <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {review.comment}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-10 gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">No reviews yet</p>
              <p className="text-xs text-gray-400">Be the first to share your experience.</p>
            </div>
          )}
        </Card>

      </div>
    </div>
  );
}