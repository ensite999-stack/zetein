import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";

export function Navbar() {
  return (
    <header className="w-full border-b bg-background">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Left Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Right Menu */}
        <div className="hidden md:flex">
          <NavMenu />
        </div>

      </div>
    </header>
  );
}
