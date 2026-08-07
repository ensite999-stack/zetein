"use client";

import Image from "next/image";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import ThemeToggle from "@/components/theme-toggle";


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

        px-5
        sm:px-10


        bg-[#06152f]/90


        backdrop-blur-xl


        border-b

        border-white/10


        shadow-lg

        "

      >


        {/* Logo */}

        <div

          className="
          flex
          items-center
          gap-3
          "

        >

          <Image

            src="/zetein-logo.jpg"

            alt="Zetein"

            width={45}

            height={45}

            className="
            object-contain
            "

          />


          <span

            className="
            text-2xl
            font-bold
            text-white
            "

          >

            Zetein

          </span>


        </div>





        {/* Register */}

        <div

          className="
          hidden
          md:flex
          "

        >

          <button

            className="
            rounded-full

            bg-white

            px-7

            py-2

            font-semibold

            text-[#06152f]

            "

          >

            Register

          </button>


        </div>





        {/* Menu */}

        <Sheet>


          <SheetTrigger asChild>


            <button

              className="

              flex

              h-14

              w-14


              items-center

              justify-center


              rounded-2xl


              border

              border-white/20


              bg-white/10


              text-white


              shadow-xl


              backdrop-blur-xl


              "

            >

              <Menu

                size={34}

                strokeWidth={3}

              />


            </button>


          </SheetTrigger>





          <SheetContent

            className="
            bg-[#06152f]
            text-white
            border-white/10
            "

          >


            <div

              className="
              mt-12
              flex
              flex-col
              gap-8
              text-xl
              font-semibold
              "

            >

              <a href="/login">

                Login

              </a>



              <a href="/about">

                About Zetein

              </a>



              <ThemeToggle />


            </div>


          </SheetContent>


        </Sheet>


      </nav>


    </header>

  );

}
