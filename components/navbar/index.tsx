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
        px-6
        "
      >

        <Link
          href="/"
          className="
          text-2xl
          font-black
          tracking-[-0.05em]
          text-white
          "
        >
          Zetein_
        </Link>


      </div>

    </header>

  );

}
