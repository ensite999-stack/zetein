import Image from "next/image";

export function Navbar() {
  return (
    <header className="w-full border-b">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo 左侧 */}
        <div className="flex items-center">
          <Image
            src="/zetein-logo.png"
            alt="Zetein"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </div>


        {/* Menu 右侧 */}
        <nav className="flex items-center gap-6 text-sm">

          <a href="/login">
            Login
          </a>

          <a href="/register">
            Register
          </a>

          <a href="/about">
            About Zetein
          </a>

        </nav>

      </div>
    </header>
  );
}
