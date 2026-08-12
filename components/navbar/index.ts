"use client";

import { useEffect, useState } from "react";


export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 60);

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
        duration-500

        ${
          scrolled
            ? "bg-[#111111] text-[#F5F1E8] shadow-sm"
            : "bg-transparent text-[#171717]"
        }

      `}

    >

      <div

        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          px-8
        "

      >

        <div

          className="
            font-serif
            text-2xl
            tracking-wide
          "

        >

          ζητεῖν

        </div>


      </div>


    </header>

  );

}
