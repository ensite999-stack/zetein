"use client";

import { useEffect, useState } from "react";

import { Logo } from "./logo";
import { NavigationSheet } from "./navigation-sheet";


export function Navbar() {

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

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
              border-border
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
          flex
          h-16
          w-full
          items-center
          justify-between

          px-3

          sm:px-6

          lg:px-10
        "
      >

        {/* Logo */}

        <Logo />


        <div
          className="
            flex
            items-center
            gap-4
          "
        >

          {/* 注册 */}

          <a
            href="/register"
            className="
              text-sm
              font-semibold
              text-foreground
              transition
              hover:opacity-70
            "
          >
            Register
          </a>


          {/* 菜单 */}

          <NavigationSheet />

        </div>


      </div>

    </header>
  );
}
