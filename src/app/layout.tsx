import type { Metadata } from "next";
import {
  Inter
}
  from "next/font/google";
import "./globals.css";
import Navbar
  from "@/components/Navbar";
import Footer
  from "@/components/Footer";
import QueryProvider
  from "@/components/providers/QueryProvider";
import ThemeProvider
  from "@/components/providers/ThemeProvider";
// Professional Font

const inter =
  Inter({
    subsets: ["latin"],
    display: "swap"
  });
export const metadata: Metadata = {
  title:
    "CollegeCubes | Discover Your Dream College",
  description:
    "Search, compare and predict colleges across India with CollegeHub",
  keywords: [
    "Indian colleges",
    "college predictor",
    "college comparison",
    "engineering colleges",
    "admission"
  ]
};
export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`
${inter.className}
min-h-screen
flex
flex-col
antialiased
transition-colors
duration-300
`}
      >
        <ThemeProvider>
          <QueryProvider>
            {/* Navbar */}

            <Navbar />
            {/* Main Content */}

            <main
              className="
              flex-1
              w-full
              "
            >
              {children}

            </main>
            {/* Footer */}

            <Footer />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}