"use client";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#E5E7EB]/80 bg-[#F6F8FA]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a
          href="/"
          className="text-[18px] font-medium tracking-[-0.02em] text-[#0F172A]"
        >
          Zetein
        </a>

        <nav className="hidden items-center gap-8 text-sm text-[#64748B] md:flex">
          <a href="#why-zetein" className="transition hover:text-[#06B6D4]">
            为什么选择我们
          </a>

          <a href="#why-xyz" className="transition hover:text-[#06B6D4]">
            .xyz世界
          </a>

          <a href="#xyz-history" className="transition hover:text-[#06B6D4]">
            探索 .xyz
          </a>
        </nav>
      </div>
    </header>
  );
}
