"use client";

import { useState } from "react";
import { Header, SearchHero, Accordion, Footer } from "@/components";

const SECTIONS = [
  {
    title: "为什么选择我们",
    content: "Zetein 是专注于.xyz 的新一代域名注册平台。无隐藏费用，秒级解析，支持支付宝/微信，极简API，一键部署到 Vercel / Cloudflare。",
  },
  {
    title: "为什么选择.xyz",
    content: ".xyz 是 Alphabet (google.xyz) 选择的后缀，代表下一代互联网。它更短、更酷、更开放，不再局限于.com 的传统定义，是 Gen Z、AI、Web3 项目的首选。",
  },
  {
    title: "探索.xyz 历史",
    content: "2014年.xyz 正式上线，3年内注册量突破600万，成为全球最受欢迎的新顶级域。2026年，超过400万个网站正在使用.xyz 构建未来。",
  },
];

export default function Home() {
  const [query, setQuery] = useState("");

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#7c3aed] selection:text-white">
      <Header />

      <SearchHero query={query} setQuery={setQuery} />

      <section className="max-w-4xl mx-auto px-6 py-10 border-t border-white/10">
        {SECTIONS.map((s, i) => (
          <Accordion key={i} title={s.title} content={s.content} />
        ))}
      </section>

      <Footer />
    </main>
  );
}
