import { Logo } from "./logo";
import { NavigationSheet } from "./navigation-sheet";

export function Navbar() {
  return (
    <header
      className="
        w-full
        bg-slate-950
        border-b
        border-slate-800
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
          sm:px-6
        "
      >

        <Logo />

        <div className="flex items-center gap-4">

          <a
            href="/register"
            className="
              text-sm
              font-medium
              text-white
              hover:text-slate-300
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
