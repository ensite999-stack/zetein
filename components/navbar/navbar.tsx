"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {

  const [open, setOpen] = useState(false);


  return (

    <header
      className="
      fixed
      top-0
      left-0
      z-50
      w-full

      border-b
      border-black/5

      bg-background/70

      backdrop-blur-xl

      transition-all

      "
    >

      <nav
        className="
        mx-auto
        flex
        h-20

        w-full

        items-center

        justify-between

        px-4

        sm:px-8

        lg:px-12

        "
      >


        {/* Logo */}

        <Link
          href="/"
          className="
          flex
          items-center
          gap-2

          shrink-0

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

            transition

            hover:text-primary

            "
          >

            Register

          </Link>


        </div>



        {/* Mobile Menu */}

        <button

          onClick={() => setOpen(!open)}

          aria-label="Menu"

          className="
          flex

          h-14

          w-14

          items-center

          justify-center


          rounded-2xl


          border

          border-border


          bg-background/60


          backdrop-blur-xl


          shadow-sm


          transition


          hover:border-primary


          "

        >

          <Menu

            size={30}

            strokeWidth={3}

            className="
            text-foreground

            "

          />


        </button>



      </nav>



      {/* Menu Drawer */}

      <div

        className={cn(

          "
          absolute
          left-0
          top-20

          w-full

          border-b

          border-border

          bg-background/90

          backdrop-blur-xl

          transition-all

          duration-300

          md:hidden

          ",

          open

          ? "opacity-100 translate-y-0"

          : "pointer-events-none -translate-y-5 opacity-0"

        )}

      >

        <div

          className="
          flex

          flex-col

          gap-5

          p-6

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



        </div>


      </div>


    </header>

  );

}
