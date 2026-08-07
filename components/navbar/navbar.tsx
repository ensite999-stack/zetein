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


        w-full


        items-center


        justify-between



        border-b

        border-border/50



        bg-background/80



        px-4


        backdrop-blur-xl



        sm:px-8



        "

      >



        {/* Logo */}


        <Link

          href="/"

          className="

          flex

          items-center


          gap-1


          "

        >



          <Image

            src="/zetein-logo.jpg"

            alt="Zetein"

            width={42}

            height={42}

            className="

            h-10

            w-10


            object-contain


            "

            priority

          />



          <span

            className="

            text-xl

            font-bold

            tracking-tight


            text-foreground


            "

          >

            Zetein


          </span>


        </Link>





        {/* Right menu */}


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

            hidden


            rounded-full


            bg-primary


            px-6


            py-2


            text-sm


            font-semibold


            text-primary-foreground


            transition


            hover:opacity-90


            md:block


            "

          >

            Register


          </Link>





          {/* Hamburger */}


          <NavigationSheet />


        </div>



      </nav>



    </header>


  );

}
