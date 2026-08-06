"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import ThemeToggle from "@/components/theme-toggle";

import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";


export function NavigationSheet() {
  return (
    <Sheet>

      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="
            h-12
            w-12
            rounded-xl
            text-white
            hover:bg-zinc-800
            hover:text-white
          "
        >
          <Menu
            className="
              h-8
              w-8
              stroke-[3]
            "
          />
        </Button>
      </SheetTrigger>


      <SheetContent
        side="right"
        className="
          w-[320px]
          bg-background
        "
      >

        <div className="mt-4">
          <Logo />
        </div>


        <NavMenu
          orientation="vertical"
          className="mt-12"
        />


        <div
          className="
            mt-10
            flex
            items-center
            justify-between
            border-t
            pt-6
          "
        >

          <span className="text-sm text-muted-foreground">
            Theme
          </span>


          <ThemeToggle />

        </div>


      </SheetContent>

    </Sheet>
  );
}
