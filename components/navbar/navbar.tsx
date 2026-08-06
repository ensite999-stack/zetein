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


        bg-background/40

        backdrop-blur-xl


        border-b

        border-white/20


        shadow-sm

        "

      >



        {/* Logo */}

        <div
          className="
          flex
          items-center
          gap-2
          "
        >


          <Image

            src="/zetein-logo.jpg"

            alt="Zetein"

            width={42}

            height={42}

            className="
            object-contain
            "

          />


          <span

            className="
            text-2xl
            font-bold
            tracking-tight
            "

          >

            Zetein

          </span>


        </div>





        {/* Desktop Register */}

        <div

          className="
          hidden
          md:flex

          items-center

          gap-8

          "

        >


          <a

            href="/register"

            className="
            text-lg
            font-semibold
            "

          >

            Register

          </a>


        </div>






        {/* Mobile Menu */}


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


              bg-background/60


              backdrop-blur-xl


              shadow-md


              "

            >

              <Menu

                size={32}

                strokeWidth={3}

              />

            </button>


          </SheetTrigger>




          <SheetContent>


            <div
              className="
              mt-10
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
