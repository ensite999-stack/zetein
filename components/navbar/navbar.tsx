"use client";

import Image from "next/image";
import Link from "next/link";
import NavigationSheet from "./navigation-sheet";


export default function Navbar() {

  return (

    <header
      className="
      fixed
      top-0
      left-0
      z-50
      w-full
      "
    >

      <nav
        className="
        flex
        h-20

        items-center
        justify-between

        bg-background/80

        backdrop-blur-xl

        border-b
        border-border/50

        px-3

        sm:px-5

        lg:px-6

        "
      >


        {/* Logo */}

        <Link
          href="/"
          className="
          flex
          items-center

          gap-1

          shrink-0
          "
        >

          <Image

            src="/zetein-logo.jpg"

            alt="Zetein"

            width={44}

            height={44}

            className="
            h-11
            w-11
            object-contain
            "

            priority

          />


          <span

            className="
            text-xl
            font-bold
            tracking-tight
            "

          >

            Zetein

          </span>


        </Link>




        {/* Right */}

        <div

          className="
          flex
          items-center
          gap-3
          "

        >



          {/* Register */}

          <Link

            href="/register"

            className="

            rounded-full

            bg-primary

            px-5

            py-2


            text-sm

            font-semibold


            text-primary-foreground


            transition


            hover:opacity-90


            "

          >

            Register

          </Link>





          {/* Menu */}

          <NavigationSheet />


        </div>



      </nav>


    </header>

  );

}
