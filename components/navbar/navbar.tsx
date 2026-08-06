import { Logo } from "./logo";
import { NavigationSheet } from "./navigation-sheet";

export function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="flex h-16 items-center justify-between px-5">

        <Logo />

        <NavigationSheet />

      </div>
    </header>
  );
}
