import { Logo } from "./logo";
import { NavigationSheet } from "./navigation-sheet";

export function Navbar() {
  return (
    <header className="w-full border-b bg-background">
      <div
        className="
          flex
          h-16
          w-full
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Logo */}
        <Logo />

        {/* Mobile Menu */}
        <NavigationSheet />
      </div>
    </header>
  );
}
