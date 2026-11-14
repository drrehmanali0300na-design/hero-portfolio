import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

// Bootstrap 5 grid/utilities first, then Tailwind preflight (globals),
// then the portfolio theme files (they win where they overlap).
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "../styles/style.css";
import "../styles/animations.css";
import "../styles/responsive.css";

export const metadata: Metadata = {
  title: "Alex Carter — Full-Stack Web Developer",
  description:
    "Portfolio of Alex Carter, a Full-Stack Web Developer building fast, responsive websites and web applications with HTML5, CSS3, Bootstrap 5, JavaScript, Python and Django.",
  keywords: [
    "full-stack developer",
    "web developer portfolio",
    "HTML5",
    "CSS3",
    "Bootstrap 5",
    "JavaScript",
    "Python",
    "Django",
    "responsive web design",
    "frontend developer",
    "backend developer",
  ],
  authors: [{ name: "Alex Carter" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Alex Carter — Full-Stack Web Developer",
    description:
      "Building digital experiences that matter. Frontend with HTML5/CSS3/Bootstrap/JavaScript, backend with Python and Django.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080B12",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
