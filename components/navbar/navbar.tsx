"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { NavigationSheet } from "./navigation-sheet";


export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);


  return (

    <header
      className={`
        fixed
        top-0
        left-0
        z-50
        w-full

        transition-all
        duration-300

        ${
          scrolled
            ? `
              bg-background/70
              backdrop-blur-xl
              shadow-sm
              border-b
            `
            :
              `
              bg-transparent
              border-transparent
            `
        }
      `}
    >


      <div
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
            "
          >
            Zetein
          </span>

        </div>



        {/* Desktop Register */}

        <div
          className="
            hidden
            md:block
          "
        >

          <button
            className="
              rounded-xl
              px-5
              py-2

              font-semibold

              hover:bg-muted

              transition
            "
          >
            Register
          </button>

        </div>



        {/* Mobile menu */}

        <NavigationSheet />


      </div>


    </header>

  );
}
