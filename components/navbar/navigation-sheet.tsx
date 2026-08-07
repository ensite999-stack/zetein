"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";


import { Sun, Moon } from "lucide-react";

import { useTheme } from "next-themes";



export default function NavigationSheet() {


  const {
    setTheme
  } = useTheme();



  return (

    <Sheet>


      <SheetTrigger asChild>


        <button

          aria-label="Menu"

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




      <SheetContent>


        <SheetTitle
          className="
          mt-8
          text-2xl
          font-bold
          "
        >

          Zetein

        </SheetTitle>



        <div

          className="
          mt-10

          flex

          flex-col

          gap-7

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

            href="/about"

            className="
            text-lg
            font-semibold
            "

          >

            About Zetein

          </Link>





          <div

            className="
            mt-5
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

              Appearance

            </p>



            <div

              className="
              flex
              gap-3
              "

            >


              <button

                onClick={() => setTheme("light")}

                className="
                flex
                items-center
                gap-2

                rounded-xl

                border

                px-4

                py-3

                "

              >

                <Sun size={18}/>

                Light

              </button>




              <button

                onClick={() => setTheme("dark")}

                className="
                flex
                items-center
                gap-2

                rounded-xl

                border

                px-4

                py-3

                "

              >

                <Moon size={18}/>

                Dark

              </button>


            </div>


          </div>


        </div>


      </SheetContent>


    </Sheet>

  );

}
