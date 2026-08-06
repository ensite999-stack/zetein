import { Logo } from "./logo";
import { NavigationSheet } from "./navigation-sheet";


export function Navbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        bg-background/80
        backdrop-blur-md
      "
    >

      <div
        className="
          flex
          h-16
          w-full
          items-center
          justify-between
          px-4
          sm:px-8
        "
      >

        <Logo />


        <div className="flex items-center gap-5">

          <a
            href="/register"
            className="
              text-sm
              font-medium
              text-foreground
              hover:opacity-70
            "
          >
            Register
          </a>


          <NavigationSheet />


        </div>

      </div>

    </header>
  );
}
