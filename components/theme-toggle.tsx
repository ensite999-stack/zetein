"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


export default function ThemeToggle() {

  const {
    theme,
    setTheme,
  } = useTheme();


  const [mounted, setMounted] = useState(false);



  useEffect(() => {

    setMounted(true);

  }, []);



  if (!mounted) {

    return (

      <button

        className="
        h-11
        w-11

        rounded-full

        border

        border-border

        bg-background

        "

      />

    );

  }



  return (

    <button


      onClick={() =>

        setTheme(
          theme === "dark"
            ? "light"
            : "dark"
        )

      }


      aria-label="Toggle theme"


      className="

      flex

      h-11

      w-11


      items-center

      justify-center


      rounded-full


      border

      border-border


      bg-background


      text-foreground


      transition


      hover:border-primary


      hover:text-primary


      "

    >


      {theme === "dark" ? (

        <Sun

          size={20}

          strokeWidth={2.5}

        />

      ) : (

        <Moon

          size={20}

          strokeWidth={2.5}

        />

      )}



    </button>


  );

}
