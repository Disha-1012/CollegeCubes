import PredictorForm from "@/components/predictor/PredictorForm";

export default function Predictor() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">

      {/* ── Header Banner ── */}
      <div className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-5">
            <a href="/" className="hover:text-blue-600 transition-colors font-medium">
              Home
            </a>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-600 dark:text-gray-300 font-medium">Predictor</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            {/* Icon */}
            <div className="shrink-0 w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-md">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>

            <div>
              <h1
                className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight"
                style={{ fontFamily: "'Georgia','Cambria',serif" }}
              >
                College Predictor
              </h1>
              <p className="mt-1.5 text-gray-500 dark:text-gray-400 text-sm">
                Enter your exam and rank to discover the colleges where your
                admission chances are highest.
              </p>
            </div>
          </div>

          {/* How-it-works strip */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                step: "01",
                title: "Select Your Exam",
                desc: "Choose the entrance exam you appeared for.",
                icon: (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Enter Your Rank",
                desc: "Provide your rank or percentile score.",
                icon: (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Get Predictions",
                desc: "Receive a curated list of reachable colleges.",
                icon: (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className="flex items-start gap-3 bg-gray-50 dark:bg-slate-800/60 border border-gray-100 dark:border-slate-700 rounded-xl px-4 py-3.5"
              >
                <div className="shrink-0 w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider leading-none mb-0.5">
                    Step {item.step}
                  </p>
                  <p className="text-sm font-bold text-gray-800 dark:text-gray-100">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Form area ── */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10">

        {/* Form card */}
        <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl shadow-sm p-8">
          <div className="flex items-center gap-3 mb-7 pb-6 border-b border-gray-100 dark:border-slate-800">
            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-base font-extrabold text-gray-900 dark:text-white">
                Start Your Prediction
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Results are based on historical admission data across 500+ colleges.
              </p>
            </div>
          </div>

          <PredictorForm />
        </div>

        {/* Disclaimer */}
        <div className="mt-5 flex items-start gap-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 rounded-xl px-5 py-4">
          <svg className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
            <span className="font-bold">Disclaimer:</span> Predictions are based
            on previous years' cutoff data and are indicative only. Actual
            admission outcomes may vary based on seat availability, category, and
            institutional policies.
          </p>
        </div>

      </div>
    </div>
  );
}