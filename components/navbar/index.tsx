"use client";

import { useState } from "react";

// Header
export function Header() {
  return (
    <header className="flex justify-between items-center max-w-7xl mx-auto px-6 py-8">
      <div className="text-[22px] font-bold tracking-tight">
        Zetein<span className="animate-pulse">_</span>
      </div>
      <nav className="hidden md:flex gap-8 text-sm text-white/60">
        <a href="#" className="hover:text-white">关于Zetein</a>
        <a href="#" className="hover:text-white">.xyz世界</a>
        <a href="#" className="hover:text-white">联系我们</a>
      </nav>
    </header>
  );
}

// Search Hero
export function SearchHero({ query, setQuery }: { query: string, setQuery: (v: string) => void }) {
  const [result, setResult] = useState<string | null>(null);

  const onSearch = () => {
    if (!query.trim()) return;
    let domain = query.trim().toLowerCase();
    if (!domain.endsWith(".xyz")) domain = domain.replace(/\..+$/, "") + ".xyz";
    setResult(domain);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 pt-24 pb-32 text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none">
        Zetein<span className="animate-pulse">_</span>
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-white/70 tracking-wide">
        Explore <br className="md:hidden" /> the world of.xyz
      </p>

      <div className="mt-12 flex items-center gap-2 max-w-xl mx-auto bg-white text-black rounded-full p-2 pl-6 shadow-[0_0_40px_rgba(124,58,237,0.15)]">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSearch()}
          placeholder="Search your domain.xyz"
          className="flex-1 bg-transparent outline-none placeholder:text-black/40 text-[15px]"
        />
        <button
          onClick={onSearch}
          className="bg-black text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-zinc-800 transition"
        >
          Search
        </button>
      </div>

      {result && (
        <div className="mt-6 text-sm text-white/80">
          <span className="text-white font-bold">{result}</span> 可注册 —
          <span className="ml-2 px-2 py-1 bg-[#7c3aed] rounded-full text-xs">¥12 / 首年</span>
        </div>
      )}
    </section>
  );
}

// Accordion
export function Accordion({ title, content }: { title: string; content: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 py-7 flex-col">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left group"
      >
        <span className="text-lg md:text-xl font-light">{title}</span>
        <span className={`text-2xl font-thin transition-transform duration-300 ${open? "rotate-45" : "rotate-0"} group-hover:text-[#7c3aed]`}>
          +
        </span>
      </button>
      <div className={`grid transition-all duration-300 ${open? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="text-white/50 leading-relaxed text-[15px] max-w-2xl">{content}</p>
        </div>
      </div>
    </div>
  );
}

// Footer
export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-8 text-sm">
        <div>
          <div className="font-bold mb-4">Zetein_</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/40">
            <a href="#" className="hover:text-white">关于Zetein</a>
            <a href="#">为什么选择我们</a>
            <a href="#">.xyz世界</a>
            <a href="#">隐私政策</a>
            <a href="#">使用条款</a>
            <a href="#">联系我们</a>
          </div>
        </div>
        <div className="text-white/40">
          <div>hello@zetein.xyz</div>
          <div className="mt-2">© 2026 Zetein All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}
