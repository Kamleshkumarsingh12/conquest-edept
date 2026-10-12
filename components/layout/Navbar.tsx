
"use client";

import Link from "next/link";

const navLinks = [
  { label: "Tracks", href: "#tracks" },
  { label: "Prizes", href: "#prizes" },
  { label: "Dates", href: "#key-dates" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
      >
        {/* Brand */}
        <Link
          href="/"
          className="flex flex-col leading-none"
          aria-label="Conquest by edept home"
        >
          <span className="text-xl font-black tracking-tight text-[#102b50] sm:text-2xl">
            CONQUEST<span className="text-[#f2a900]">.</span>
          </span>

          <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-500 sm:text-xs">
            by edept · Tech Olympiad 2026
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-[#102b50]"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/register"
            className="rounded-full bg-[#102b50] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#193e6d]"
          >
            Register free <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* Mobile registration button */}
        <Link
          href="/register"
          className="rounded-full bg-[#102b50] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#193e6d] md:hidden"
        >
          Register free
        </Link>
      </nav>
    </header>
  );
}
