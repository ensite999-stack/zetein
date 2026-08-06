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
        bg-background/90
        backdrop-blur-xl
      "
    >

      <div
        className="
          flex
          h-16
          items-center
          justify-between
          px-2
          sm:px-6
        "
      >

        <Logo />

        <div className="flex items-center gap-4">

          <a
            href="/register"
            className="
              text-sm
              font-semibold
              text-foreground
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
