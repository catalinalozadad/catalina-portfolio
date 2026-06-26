"use client";

import Link from "next/link";

type Props = {
  title: string;
};

export default function CaseStudyNavigation({ title }: Props) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 h-20 flex items-center justify-between">
        
        <Link
          href="/"
          className="text-sm tracking-wide hover:opacity-60 transition"
        >
          ← Work
        </Link>

        <div className="text-sm tracking-[0.15em] uppercase text-neutral-500">
          {title}
        </div>

        <Link
          href="/"
          className="text-sm tracking-wide hover:opacity-60 transition"
        >
          Back to Portfolio ↗
        </Link>

      </div>
    </header>
  );
}