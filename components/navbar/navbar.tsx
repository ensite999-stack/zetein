"use client";

import Image from "next/image";
import Link from "next/link";
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

      z-50

      w-full

      border-b

      border-border/40

      bg-background/70

      backdrop-blur-xl

      "

    >

      <nav

        className="
        mx-auto

        flex

        h-20

        w-full

        items-center


        px-4


        sm:px-6


        lg:px-8

        "

      >



        {/* Logo */}

        <Link

          href="/"

          className="
          flex

          items-center

          gap-2

          "

        >

          <Image

            src="/zetein-logo.png"

            alt="Zetein"

            width={42}

            height={42}

            priority

            className="
            h-10

            w-10

            object-contain

            "

          />


          <span

            className="
            text-2xl

            font-bold

            tracking-tight

            text-foreground

            "

          >

            Zetein

          </span>


        </Link>





        {/* Desktop Register */}

        <div

          className="
          ml-auto

          hidden

          items-center

          gap-6

          md:flex

          "

        >

          <Link

            href="/register"

            className="
            text-base

            font-medium

            text-foreground

            hover:text-primary

            transition

            "

          >

            Register

          </Link>


        </div>





        {/* Mobile Menu */}

        <div

          className="
          ml-auto

          flex

          items-center

          "

        >

          <Sheet>


            <SheetTrigger asChild>

              <button

                className="
                flex

                h-10

                w-10

                items-center

                justify-center

                text-foreground

                "

              >

                <Menu

                  size={30}

                  strokeWidth={2.5}

                />

              </button>


            </SheetTrigger>




            <SheetContent

              side="right"

              className="
              w-[300px]

              "

            >


              <div

                className="
                mt-10

                flex

                flex-col

                gap-8

                "

              >


                <Link

                  href="/login"

                  className="
                  text-lg

                  font-semibold

                  "

                >

                  Login

                </Link>



                <Link

                  href="/register"

                  className="
                  text-lg

                  font-semibold

                  "

                >

                  Register

                </Link>




                <div

                  className="
                  border-t

                  pt-6

                  "

                >

                  <p

                    className="
                    mb-4

                    text-sm

                    text-muted-foreground

                    "

                  >

                    Theme

                  </p>


                  <ThemeToggle />


                </div>


              </div>


            </SheetContent>


          </Sheet>


        </div>


      </nav>


    </header>


  );

}
