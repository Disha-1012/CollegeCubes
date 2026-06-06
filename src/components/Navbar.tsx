"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { name: "Home", path: "/" },
  { name: "Colleges", path: "/colleges" },
  { name: "Compare", path: "/compare" },
  { name: "Predictor", path: "/predictor" },
  { name: "Saved", path: "/saved" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  /* Scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Sliding indicator */
  useEffect(() => {
    if (!navRef.current) return;
    const activeLink = navRef.current.querySelector<HTMLElement>("[data-active='true']");
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth, opacity: 1 });
    }
  }, [pathname]);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <style>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes mobileIn {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes logoShimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .nav-link-item { animation: fadeSlideDown 0.35s ease both; }
        .logo-text {
          background: linear-gradient(90deg, #1d4ed8 0%, #2563eb 30%, #60a5fa 50%, #2563eb 70%, #1d4ed8 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: logoShimmer 4s linear infinite;
        }
        .mobile-link { animation: mobileIn 0.25s ease both; }
        .pill-indicator {
          transition: left 0.3s cubic-bezier(0.4,0,0.2,1),
                      width 0.3s cubic-bezier(0.4,0,0.2,1),
                      opacity 0.2s ease;
        }
        .hamburger-line {
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.2s ease;
          transform-origin: center;
        }
      `}</style>

      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.08)] border-b border-gray-100 dark:border-gray-800"
            : "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-[68px]">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm group-hover:shadow-blue-300 group-hover:scale-105 transition-all duration-200">
                <svg className="w-4.5 h-4.5 text-white" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0121 21H3a12.083 12.083 0 012.84-10.422L12 14z" />
                </svg>
              </div>
              <span
                className="text-[1.35rem] font-extrabold tracking-tight logo-text"
                style={{ fontFamily: "'Georgia', 'Cambria', serif", letterSpacing: "-0.02em" }}
              >
                CollegeCubes
              </span>
            </Link>

            {/* ── Desktop nav ── */}
            <div className="hidden md:flex items-center gap-1 relative" ref={navRef}>
              {/* Sliding pill indicator */}
              <div
                className="pill-indicator absolute bottom-[-2px] h-[3px] rounded-full bg-blue-600"
                style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                  opacity: indicatorStyle.opacity,
                }}
              />

              {links.map((link, i) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    data-active={isActive}
                    className={`
                      nav-link-item relative px-4 py-2 rounded-lg text-sm font-semibold
                      transition-all duration-200
                      ${isActive
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40"
                      }
                    `}
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute inset-0 rounded-lg bg-blue-50 dark:bg-blue-950/40 -z-10" />
                    )}
                  </Link>
                );
              })}

              {/* Divider */}
              <div className="w-px h-5 bg-gray-200 dark:bg-gray-700 mx-2" />

              <ThemeToggle />

              {/* CTA */}
              <Link
                href="/colleges"
                className="
                  nav-link-item ml-2 px-5 py-2 rounded-lg
                  bg-blue-600 hover:bg-blue-700
                  text-white text-sm font-semibold
                  shadow-sm hover:shadow-blue-200 dark:hover:shadow-blue-900
                  hover:shadow-md hover:-translate-y-[1px]
                  transition-all duration-200
                  flex items-center gap-1.5
                "
                style={{ animationDelay: "320ms" }}
              >
                Get Started
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* ── Mobile right cluster ── */}
            <div className="flex md:hidden items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                aria-expanded={open}
                className="w-9 h-9 rounded-lg flex flex-col items-center justify-center gap-[5px] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <span
                  className="hamburger-line w-5 h-[2px] rounded-full bg-gray-700 dark:bg-gray-200"
                  style={{
                    transform: open ? "translateY(7px) rotate(45deg)" : "none",
                  }}
                />
                <span
                  className="hamburger-line w-5 h-[2px] rounded-full bg-gray-700 dark:bg-gray-200"
                  style={{ opacity: open ? 0 : 1 }}
                />
                <span
                  className="hamburger-line w-5 h-[2px] rounded-full bg-gray-700 dark:bg-gray-200"
                  style={{
                    transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
                  }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 px-6 pt-4 pb-6 space-y-1">
            {links.map((link, i) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className={`
                    mobile-link flex items-center justify-between
                    px-4 py-3 rounded-xl text-base font-semibold
                    transition-colors duration-150
                    ${isActive
                      ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/60"
                    }
                  `}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {link.name}
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                  )}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
              <Link
                href="/colleges"
                onClick={() => setOpen(false)}
                className="
                  mobile-link flex items-center justify-center gap-2
                  w-full py-3 rounded-xl
                  bg-blue-600 hover:bg-blue-700
                  text-white text-base font-semibold
                  transition-colors duration-150
                "
                style={{ animationDelay: "260ms" }}
              >
                Get Started
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}