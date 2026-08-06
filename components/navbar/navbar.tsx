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
          h-14
          w-full
          items-center
          justify-between
          px-4
          sm:px-6
        "
      >

        {/* Logo */}
        <Logo />


        {/* Menu */}
        <NavigationSheet />

      </div>
    </header>
  );
}
