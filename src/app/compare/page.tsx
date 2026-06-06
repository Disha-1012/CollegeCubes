"use client";

import { useCompareStore } from "@/store/compareStore";

export default function Compare() {
  const colleges = useCompareStore((state) => state.colleges);
  const remove = useCompareStore((state) => state.removeCollege);

  const bestCollege =
    colleges.length > 0
      ? colleges.reduce((a, b) =>
          Number(a.rating || 0) > Number(b.rating || 0) ? a : b
        )
      : null;

  /* ── Empty state ── */
  if (colleges.length === 0)
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
                d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            No Colleges Selected
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs mx-auto">
            Browse the college listing and add up to 3 colleges to compare
            side-by-side.
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

  /* ── Row definitions ── */
  const rows: {
    label: string;
    icon: React.ReactNode;
    render: (c: (typeof colleges)[0]) => React.ReactNode;
    highlight?: (c: (typeof colleges)[0]) => boolean;
  }[] = [
    {
      label: "Rating",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      render: (c) => {
        const r = Number(c.rating || 0);
        const pct = Math.min((r / 10) * 100, 100);
        return (
          <div className="flex flex-col items-center gap-2">
            <span className="text-lg font-extrabold text-gray-900 dark:text-white">
              {c.rating || "N/A"}
              <span className="text-xs font-medium text-gray-400">/10</span>
            </span>
            <div className="w-full h-1.5 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-400 rounded-full transition-all duration-500"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        );
      },
      highlight: (c) => c.id === bestCollege?.id,
    },
    {
      label: "Location",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      render: (c) => (
        <span className="text-sm text-gray-700 dark:text-gray-300">
          {c.location || "N/A"}
        </span>
      ),
    },
    {
      label: "Annual Fees",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      render: (c) => {
        const fees = c.fees ? Number(c.fees).toLocaleString("en-IN") : null;
        return (
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
            {fees ? `₹${fees}` : "N/A"}
          </span>
        );
      },
      highlight: (c) => {
        if (colleges.length < 2) return false;
        const minFees = Math.min(...colleges.map((x) => Number(x.fees || Infinity)));
        return Number(c.fees) === minFees;
      },
    },
    {
      label: "Type",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      render: (c) => (
        <span className="inline-flex items-center bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full">
          {c.type || "N/A"}
        </span>
      ),
    },
    {
      label: "Reviews",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      render: (c) => {
        const reviews = (c as typeof c & { review_count?: number }).review_count;
        return (
          <span className="text-sm text-gray-700 dark:text-gray-300">
            {reviews ?? "N/A"}
          </span>
        );
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">

      {/* ── Header ── */}
      <div className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-5">
            <a href="/" className="hover:text-blue-600 transition-colors font-medium">Home</a>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-600 dark:text-gray-300 font-medium">Compare</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1
                className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight"
                style={{ fontFamily: "'Georgia','Cambria',serif" }}
              >
                College Comparison
              </h1>
              <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
                Comparing {colleges.length} college{colleges.length !== 1 ? "s" : ""} side-by-side across key parameters.
              </p>
            </div>
            <a
              href="/colleges"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 border border-blue-200 hover:border-blue-400 px-4 py-2 rounded-xl transition-all duration-150 shrink-0"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Add College
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-10 space-y-6">

        {/* ── Best Choice Banner ── */}
        {bestCollege && (
          <div className="flex items-center gap-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 border border-green-200 dark:border-green-800 rounded-2xl px-6 py-4 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center shrink-0 shadow">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-green-700 dark:text-green-400 uppercase tracking-wider font-semibold">
                Best Choice
              </p>
              <p className="text-base font-extrabold text-green-900 dark:text-green-200">
                {bestCollege.college_name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                Based on highest rating — {bestCollege.rating}/10
              </p>
            </div>
          </div>
        )}

        {/* ── Comparison Table ── */}
        <div className="overflow-x-auto rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm">
          <table className="min-w-full bg-white dark:bg-slate-900">

            {/* College header row */}
            <thead>
              <tr className="border-b border-gray-100 dark:border-slate-800">
                {/* Feature label column header */}
                <th className="w-40 px-6 py-5 text-left bg-gray-50 dark:bg-slate-800/60">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Parameter
                  </span>
                </th>

                {colleges.map((c) => {
                  const isBest = c.id === bestCollege?.id;
                  return (
                    <th
                      key={c.id}
                      className={`px-6 py-5 text-center min-w-[180px] ${
                        isBest
                          ? "bg-green-50 dark:bg-green-950/20"
                          : "bg-white dark:bg-slate-900"
                      }`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        {/* College icon */}
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            isBest
                              ? "bg-green-600"
                              : "bg-blue-600"
                          } shadow-sm`}
                        >
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0121 21H3a12.083 12.083 0 012.84-10.422L12 14z" />
                          </svg>
                        </div>

                        <div>
                          <p className={`text-sm font-extrabold leading-tight ${isBest ? "text-green-800 dark:text-green-200" : "text-gray-900 dark:text-white"}`}>
                            {c.college_name}
                          </p>
                          {isBest && (
                            <span className="inline-flex items-center gap-1 mt-1 text-[10px] font-bold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/40 border border-green-200 dark:border-green-800 px-2 py-0.5 rounded-full">
                              ★ Top Pick
                            </span>
                          )}
                        </div>

                        {/* Remove button */}
                        <button
                          onClick={() => remove(c.id)}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 px-2.5 py-1 rounded-lg transition-all duration-150"
                        >
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          Remove
                        </button>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            {/* Data rows */}
            <tbody>
              {rows.map((row, rowIdx) => (
                <tr
                  key={row.label}
                  className={`border-t border-gray-100 dark:border-slate-800 ${
                    rowIdx % 2 === 0 ? "bg-white dark:bg-slate-900" : "bg-gray-50/60 dark:bg-slate-800/20"
                  }`}
                >
                  {/* Row label */}
                  <td className="px-6 py-5 bg-gray-50 dark:bg-slate-800/60 border-r border-gray-100 dark:border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <span className="text-blue-500 dark:text-blue-400 shrink-0">{row.icon}</span>
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        {row.label}
                      </span>
                    </div>
                  </td>

                  {/* Data cells */}
                  {colleges.map((c) => {
                    const isHighlighted = row.highlight?.(c) ?? false;
                    return (
                      <td
                        key={c.id}
                        className={`px-6 py-5 text-center ${
                          isHighlighted
                            ? "bg-green-50/60 dark:bg-green-950/10"
                            : ""
                        }`}
                      >
                        <div className="flex flex-col items-center gap-1">
                          {row.render(c)}
                          {isHighlighted && (
                            <span className="text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-wide">
                              {row.label === "Annual Fees" ? "Lowest" : "Best"}
                            </span>
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-gray-400 pb-4">
          Data sourced from verified college profiles · Last updated this semester
        </p>

      </div>
    </div>
  );
}