import { Logo } from "./logo";
import { NavigationSheet } from "./navigation-sheet";

export function Navbar() {
  return (
    <header
      className="
        w-full
        bg-zinc-950
        border-b
        border-zinc-800
      "
    >
      <div
        className="
          flex
          h-16
          w-full
          items-center
          justify-between
          px-3
          sm:px-5
        "
      >

        {/* 左侧 Logo */}
        <Logo />

        {/* 右侧菜单 */}
        <NavigationSheet />

      </div>
    </header>
  );
}
