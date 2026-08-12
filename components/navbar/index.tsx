"use client";

import Link from "next/link";


export default function Navbar() {


  return (

    <header

      className="
      fixed
      left-0
      top-0
      z-50
      w-full
      bg-transparent
      "

    >


      <nav

        className="
        mx-auto
        flex
        h-20
        max-w-7xl
        items-center
        justify-center
        px-6
        "

      >


        <Link

          href="/"

          className="
          hidden
          "

        >

          Zetein

        </Link>


      </nav>


    </header>

  );


}
