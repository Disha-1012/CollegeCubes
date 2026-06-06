export default function Home() {
  return (
    
    <main className="bg-white min-h-screen font-sans">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-white">

        {/* Subtle grid overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Soft blue glow top-left */}
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-blue-100 blur-[120px] opacity-60 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-20 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left copy */}
          <div>
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse inline-block" />
              India's Smartest College Discovery Platform
            </span>

            <h1
              className="text-5xl lg:text-6xl font-extrabold text-gray-950 leading-[1.1] tracking-tight"
              style={{ fontFamily: "'Georgia', 'Cambria', serif" }}
            >
              Find the College <br />
              <span className="text-blue-600">Built for</span> <br />
              Your Future
            </h1>

            <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-lg">
              Explore 500+ colleges across India — compare courses, analyse
              placement records, read authentic reviews, and make a decision
              you'll be proud of.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/colleges"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-blue-200 hover:shadow-xl transition-all duration-200 text-base"
              >
                Explore Colleges
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/predictor"
                className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-blue-300 text-gray-800 font-semibold px-8 py-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-base"
              >
                Predict My College
              </a>
            </div>

            {/* Trust bar */}
            <div className="mt-12 flex flex-wrap gap-8">
              {[
                { value: "500+", label: "Colleges Listed" },
                { value: "1.2L+", label: "Students Guided" },
                { value: "98%", label: "Accurate Predictions" },
              ].map((s) => (
                <div key={s.value}>
                  <p className="text-2xl font-extrabold text-gray-900">{s.value}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right image collage */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden h-52 bg-blue-50">
                <img
                  src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/07/20152000/FI.jpg"
                  alt="College campus"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-36 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80"
                  alt="Students studying"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-2xl overflow-hidden h-36 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80"
                  alt="Campus library"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-52 bg-blue-50">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80"
                  alt="Graduation ceremony"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-gray-50 border-y border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              How CollegeCubes Works
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Three simple steps to shortlist your ideal college and plan your
              academic journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Search & Filter",
                desc: "Browse 500+ colleges by stream, location, fees, or entrance exam. Our smart filters surface the most relevant options instantly.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Compare Colleges",
                desc: "Place up to 3 colleges side-by-side. Evaluate fees, placements, faculty ratings and cut-off trends in a single glance.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Predict & Decide",
                desc: "Enter your exam name and rank. Our predictor instantly recommends colleges where your chances of admission are highest.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-4xl font-black text-gray-100 select-none leading-none">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / PLATFORM DESCRIPTION ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl h-96">
              <img
                src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=900&q=80"
                alt="Students on campus"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white border border-gray-100 rounded-2xl shadow-xl p-5 flex items-center gap-4 max-w-xs">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Average Placement Package</p>
                <p className="text-xl font-extrabold text-gray-900">₹8.4 LPA</p>
                <p className="text-xs text-green-600 font-semibold mt-0.5">↑ 12% vs last year</p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="text-blue-600 text-sm font-bold uppercase tracking-widest">
              About the Platform
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Designed to Simplify <br /> Every College Decision
            </h2>
            <p className="mt-5 text-gray-500 leading-relaxed">
              Choosing the right college is one of the most important decisions of
              your life. CollegeCubes was built to take the guesswork out of it.
              We aggregate data from hundreds of institutions — accreditation
              status, fee structures, NAAC ratings, placement statistics, and
              student reviews — and present them in a way that is clear,
              comparable, and actionable.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Whether you are a JEE aspirant looking for the best NITs, a CAT
              taker shortlisting IIMs, or a Class 12 student exploring arts and
              commerce colleges, our platform gives you the tools to research
              confidently and decide wisely.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Verified data updated every semester",
                "Placement reports from 500+ colleges",
                "Rank-based college predictor for 20+ exams",
                "Side-by-side comparison for up to 3 colleges",
              ].map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-gray-700 text-sm">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CAREER PATH SECTION ── */}
      <section className="bg-gray-50 border-y border-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 text-sm font-bold uppercase tracking-widest">
              Career Clarity
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Match Your Ambition <br /> to the Right Stream
            </h2>
            <p className="mt-5 text-gray-500 leading-relaxed">
              Not sure which stream to pick? Our platform maps thousands of career
              paths back to the colleges and courses that lead there. Explore
              engineering, management, medicine, law, design, and more — with
              salary benchmarks and real alumni outcomes to back every suggestion.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { stream: "Engineering", colleges: "210 Colleges", color: "bg-blue-50 border-blue-200 text-blue-800" },
                { stream: "Management", colleges: "140 Colleges", color: "bg-slate-50 border-slate-200 text-slate-800" },
                { stream: "Medicine", colleges: "85 Colleges", color: "bg-blue-50 border-blue-200 text-blue-800" },
                { stream: "Law & Arts", colleges: "65 Colleges", color: "bg-slate-50 border-slate-200 text-slate-800" },
              ].map((s) => (
                <a
                  key={s.stream}
                  href="/colleges"
                  className={`border rounded-xl px-5 py-4 hover:shadow-sm transition-all duration-150 ${s.color}`}
                >
                  <p className="font-bold text-sm">{s.stream}</p>
                  <p className="text-xs mt-0.5 opacity-70">{s.colleges}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl h-96">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&q=80"
              alt="Student planning career path"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              Everything You Need to Decide Right
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              CollegeCubes packs all the research tools into one focused platform —
              no subscriptions, no noise.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Detailed College Pages",
                desc: "Courses, faculty, placements, hostel, fees — every detail in one place.",
                href: "/colleges",
                icon: "🏛️",
              },
              {
                title: "Smart Comparison",
                desc: "Compare up to 3 colleges across 15+ parameters side by side.",
                href: "/compare",
                icon: "⚖️",
              },
              {
                title: "Rank Predictor",
                desc: "Enter your exam and rank; get a curated list of reachable colleges.",
                href: "/predictor",
                icon: "🎯",
              },
              {
                title: "Authentic Reviews",
                desc: "Read honest student reviews on academics, placements, and campus life.",
                href: "/colleges",
                icon: "⭐",
              },
            ].map((f) => (
              <a
                key={f.title}
                href={f.href}
                className="group bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col gap-4"
              >
                <span className="text-3xl">{f.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-base">
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">{f.desc}</p>
                </div>
                <span className="mt-auto inline-flex items-center gap-1 text-blue-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-blue-400 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12 tracking-tight">
            What Students Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "The rank predictor was spot-on. I got into exactly the college it suggested for my JEE rank. Saved me weeks of research.",
                name: "Arjun Mehta",
                detail: "B.Tech CSE, NIT Trichy",
                avatar: "AM",
              },
              {
                quote:
                  "Comparing placement stats of 3 MBA colleges in one screen helped me finally choose SIBM Pune over the others.",
                name: "Priya Sharma",
                detail: "MBA, SIBM Pune",
                avatar: "PS",
              },
              {
                quote:
                  "The college detail pages are incredibly thorough. I could see hostel fees, NAAC grade, and alumni reviews all at once.",
                name: "Rohan Das",
                detail: "BDS, Manipal College",
                avatar: "RD",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 flex flex-col gap-4"
              >
                <svg className="w-8 h-8 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-white/90 text-sm leading-relaxed flex-1">{t.quote}</p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/20">
                  <div className="w-9 h-9 rounded-full bg-white/20 text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/60 text-xs">{t.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            Your dream college is <span className="text-blue-600">one search away.</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Join over 1.2 lakh students who made confident admissions decisions
            with CollegeCubes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/colleges"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-blue-200 hover:shadow-xl transition-all duration-200 text-base"
            >
              Start Exploring
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/predictor"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-blue-300 text-gray-800 font-semibold px-8 py-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-base"
            >
              Try the Predictor
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}