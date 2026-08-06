import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";

export function Navbar() {
  return (
    <header className="w-full">
      <div className="flex h-16 w-full items-center justify-between px-4">

        {/* 左侧 Logo */}
        <Logo />

        {/* 右侧菜单 */}
        <NavMenu />

      </div>
    </header>
  );
}
