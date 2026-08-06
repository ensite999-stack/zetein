"use client";

import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";

export function NavigationSheet() {
  const { theme, setTheme } = useTheme();

  return (
    <Sheet>

      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="h-12 w-12 rounded-xl"
        >
          <Menu
            className="h-8 w-8 stroke-[2.5]"
          />
        </Button>
      </SheetTrigger>


      <SheetContent
        side="right"
        className="w-[300px]"
      >

        <Logo />

        <NavMenu
          orientation="vertical"
          className="mt-12"
        />


        <div className="mt-10 border-t pt-6">

          <button
            onClick={() =>
              setTheme(
                theme === "dark"
                  ? "light"
                  : "dark"
              )
            }
            className="flex w-full items-center gap-3 text-sm"
          >

            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}

            {theme === "dark"
              ? "Light Mode"
              : "Dark Mode"}

          </button>

        </div>


      </SheetContent>

    </Sheet>
  );
}
