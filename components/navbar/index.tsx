"use client";

import Link from "next/link";


export default function Navbar() {

  return (

    <header
      className="
      fixed
      top-0
      left-0
      z-50
      w-full
      bg-transparent
      "
    >

      <div
        className="
        mx-auto
        flex
        h-20
        max-w-6xl
        items-center
        justify-between
        px-6
        "
      >

        <Link
          href="/"
          className="
          text-xl
          font-black
          tracking-[-0.04em]
          text-white
          "
        >
          Zetein
          <span className="cursor-blink">
            _
          </span>

        </Link>


      </div>

    </header>

  );

}
