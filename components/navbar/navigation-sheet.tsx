"use client";


import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


import {
  Menu,
} from "lucide-react";


import ThemeToggle from "@/components/theme-toggle";



export default function NavigationSheet() {


  return (

    <Sheet>


      <SheetTrigger asChild>


        <button

          aria-label="Open menu"

          className="

          flex

          h-12

          w-12


          items-center

          justify-center


          rounded-full


          border

          border-border


          bg-background/70


          backdrop-blur-xl


          transition


          hover:border-primary


          "

        >


          <Menu

            size={28}

            strokeWidth={2.5}

          />


        </button>


      </SheetTrigger>





      <SheetContent

        side="right"

        className="

        w-[320px]

        bg-background

        "

      >



        <SheetHeader>


          <SheetTitle

            className="

            text-left

            text-2xl

            font-bold

            "

          >

            Zetein

          </SheetTitle>


        </SheetHeader>





        <div

          className="

          mt-10

          flex

          flex-col

          gap-6

          "

        >



          <Link

            href="/login"

            className="

            text-lg

            font-semibold


            transition


            hover:text-primary


            "

          >

            Login

          </Link>





          <Link

            href="/about"

            className="

            text-lg

            font-semibold


            transition


            hover:text-primary


            "

          >

            About Zetein

          </Link>





          <div

            className="

            mt-4

            border-t

            border-border

            pt-6

            "

          >


            <div

              className="

              flex

              items-center

              justify-between

              "

            >


              <span

                className="

                text-sm

                font-medium

                text-muted-foreground

                "

              >

                Appearance

              </span>


              <ThemeToggle />


            </div>


          </div>




        </div>



      </SheetContent>



    </Sheet>


  );

}
