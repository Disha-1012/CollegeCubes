"use client";

import { useSavedStore } from "@/store/savedStore";

export default function SavedPage() {
  const saved = useSavedStore((state) => state.saved);

  /* ── Empty state ── */
  if (saved.length === 0)
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-slate-950 flex items-center justify-center px-6">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 rounded-2xl bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center mx-auto">
            <svg
              className="w-10 h-10 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            No Saved Colleges
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs mx-auto">
            Bookmark colleges while browsing to revisit and compare them here
            anytime.
          </p>
          <a
            href="/colleges"
            className="inline-flex items-center gap-2 mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z"
              />
            </svg>
            Browse Colleges
          </a>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">

      {/* ── Header Banner ── */}
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
            <span className="text-gray-600 dark:text-gray-300 font-medium">Saved</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </div>
              <div>
                <h1
                  className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight"
                  style={{ fontFamily: "'Georgia','Cambria',serif" }}
                >
                  Saved Colleges
                </h1>
                <p className="mt-1 text-gray-500 dark:text-gray-400 text-sm">
                  Your personal shortlist — review and manage saved colleges.
                </p>
              </div>
            </div>

            {/* Count chip */}
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold px-4 py-2 rounded-full shrink-0">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              {saved.length} Saved College{saved.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>
      </div>

      {/* ── Grid ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {saved.map((college) => {
            const rating = Number(college.rating || 0);
            const ratingPct = Math.min((rating / 10) * 100, 100);

            return (
              <div
                key={college.id}
                className="group bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden flex flex-col"
              >
                {/* Card top accent bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 to-blue-400" />

                <div className="p-6 flex flex-col gap-4 flex-1">

                  {/* College identity */}
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0121 21H3a12.083 12.083 0 012.84-10.422L12 14z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-base font-extrabold text-gray-900 dark:text-white leading-snug line-clamp-2">
                        {college.college_name}
                      </h2>
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                        <svg className="w-3.5 h-3.5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {college.location}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gray-100 dark:bg-slate-800" />

                  {/* Rating */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                        Rating
                      </span>
                      <div className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 fill-amber-400 text-amber-400" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span className="text-sm font-extrabold text-gray-800 dark:text-gray-100">
                          {college.rating || "N/A"}
                          <span className="text-xs font-medium text-gray-400">/10</span>
                        </span>
                      </div>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-400 rounded-full transition-all duration-500"
                        style={{ width: `${ratingPct}%` }}
                      />
                    </div>
                  </div>

                  {/* Fees & type row */}
                  {(college.fees || college.type) && (
                    <div className="flex flex-wrap gap-2">
                      {college.fees && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 px-2.5 py-1 rounded-lg">
                          <svg className="w-3 h-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          ₹{Number(college.fees).toLocaleString("en-IN")}
                        </span>
                      )}
                      {college.type && (
                        <span className="inline-flex items-center text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900 px-2.5 py-1 rounded-lg">
                          {college.type}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-3 mt-auto pt-2">
                    <a
                      href={`/colleges/${college.id}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 px-4 py-2.5 rounded-xl transition-all duration-150"
                    >
                      View Details
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>

                    <button
                      onClick={() =>
                        useSavedStore.getState().removeCollege(college.id)
                      }
                      className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-red-500 hover:text-red-600 border border-red-100 dark:border-red-900/40 hover:border-red-300 hover:bg-red-50 dark:hover:bg-red-950/30 px-4 py-2.5 rounded-xl transition-all duration-150"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Remove
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-gray-400 mt-10 pb-4">
          Saved colleges are stored locally on your device.
        </p>
      </div>
    </div>
  );
}