"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex h-20 max-w-6xl items-center px-6">
        <Link
          href="/"
          className="
            text-[22px]
            font-extrabold
            tracking-[-0.04em]
            text-white
            transition-opacity
            hover:opacity-80
          "
        >
          Zetein_
        </Link>
      </div>
    </header>
  );
}
