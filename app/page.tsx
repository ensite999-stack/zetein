"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";

const articles = [
  {
    id: "why-zetein",
    number: "01",
    title: "为什么选择我们",
    intro:
      "Zetein 专注于 .xyz 域名发现与查询。我们希望把寻找域名这件事情做得更快、更准确，也更清晰。",
    content: (
      <>
        <p>
          Zetein 的核心目标很简单：让你在寻找一个 .xyz
          域名时，不需要面对复杂的页面、无关的广告和冗余的信息。
        </p>

        <p>
          <strong>快速。</strong> 域名搜索是一个需要反复尝试的过程。你可能会连续搜索几十个名字，
          甚至上百个组合。每一次等待都会增加选择成本。因此，我们从查询流程、页面结构和缓存策略入手，
          尽可能缩短从输入到结果出现之间的时间。
        </p>

        <p>
          <strong>准确。</strong> 对域名搜索来说，最重要的并不是页面看起来多么复杂，而是结果是否值得信任。
          Zetein 的可注册状态判断将以权威注册局数据为核心，并结合可靠的数据源进行验证，
          让“可以注册”和“已经注册”尽可能清晰地呈现在用户面前。
        </p>

        <p>
          <strong>无广告。</strong> 我们不希望把域名搜索页面变成广告展示位。
          搜索框、结果和购买入口应该服务于用户，而不是让用户在广告、弹窗和推广内容中寻找真正有用的信息。
        </p>

        <p>
          <strong>简单。</strong> 我们相信一个好的域名工具不需要教育用户如何使用。
          输入名字、查看结果、选择域名，这应该是一条直接的路径。
        </p>

        <p>
          Zetein 不是试图把域名搜索做得更复杂，而是希望把它做得更可靠。
          从发现一个想法，到最终注册一个域名，我们希望每一步都保持清晰。
        </p>
      </>
    ),
  },
  {
    id: "why-xyz",
    number: "02",
    title: "为什么选择 .xyz",
    intro:
      ".xyz 是一个开放、简洁且没有行业限制的通用顶级域名，为下一代互联网品牌提供了更多选择。",
    content: (
      <>
        <p>
          .xyz 是新一代通用顶级域名（gTLD）中的代表之一，于 2014 年推出。
          它没有把域名限制在某个国家、行业或者特定用途，因此可以被个人、创业公司、开发者、
          AI 项目、社区以及各种互联网产品使用。
        </p>

        <p>
          对很多新项目来说，最现实的问题是：一个理想的 .com
          名称可能已经被注册。传统热门域名的稀缺性让品牌命名越来越困难。
          .xyz 提供了另一块新的空间，让用户有机会重新寻找简短、容易记忆并且具有品牌价值的名称。
        </p>

        <p>
          .xyz 的另一个特点是它没有固定的语义。它不像某些域名后缀天然对应某个行业。
          这种开放性意味着一个 .xyz 域名可以属于科技公司，也可以属于个人品牌、产品、实验项目或社区。
        </p>

        <p>
          从互联网品牌的角度来看，后缀本身也是品牌的一部分。
          一个简洁的名称加上 .xyz，可以形成一种更现代、更开放的数字身份。
          这也是 .xyz 在科技、AI、Web3 和开发者社区中受到关注的重要原因之一。
        </p>

        <p>
          当然，选择 .xyz 并不意味着所有项目都应该放弃 .com。
          .com 依然拥有非常强的历史认知度和全球用户习惯。
          .xyz 更适合那些希望拥有新的命名空间、寻找更自由品牌组合的人。
        </p>

        <p>
          因此，.xyz 更准确的定位不是“取代所有传统域名”，
          而是为互联网提供一个更加开放的新选择。
        </p>
      </>
    ),
  },
  {
    id: "xyz-history",
    number: "03",
    title: "探索 .xyz",
    intro:
      "从 2014 年诞生，到进入科技、AI 与新互联网项目，.xyz 已经形成了一段独特的发展历程。",
    content: (
      <>
        <h3>诞生</h3>

        <p>
          .xyz 于 2014 年正式推出，属于互联网新通用顶级域名体系的一部分。
          在传统 .com、.net、.org 长期占据主导地位的情况下，
          新顶级域名的出现意味着互联网开始拥有更多可使用的命名空间。
        </p>

        <p>
          .xyz 从一开始就强调开放性。它没有将自己绑定在某一个具体行业，
          “XYZ”本身也具有一种完整、开放和无限扩展的感觉，因此可以适用于很多不同类型的项目。
        </p>

        <h3>早期发展</h3>

        <p>
          在发展的早期阶段，.xyz 面临的最大挑战是用户认知。
          很多人已经习惯把 .com 当作互联网地址的默认选择，
          新后缀必须证明自己同样可以成为真实、长期的数字身份。
        </p>

        <p>
          随着越来越多创业公司和互联网项目寻找新的品牌名称，
          .xyz 开始因为更大的可用空间和较高的命名灵活性受到关注。
        </p>

        <h3>科技与 Web3 时代</h3>

        <p>
          随着区块链、Web3、开发者项目和新型互联网产品的发展，
          一部分技术项目开始使用 .xyz。
          这些项目的用户本身就比较熟悉新顶级域名，因此 .xyz
          在科技社区中的认知进一步提高。
        </p>

        <h3>AI 时代</h3>

        <p>
          进入人工智能快速发展的阶段后，短、简洁、容易形成品牌的域名再次受到重视。
          AI 公司、工具、研究项目和开发者产品都需要自己的数字入口。
          .xyz 的灵活命名空间，使它继续出现在新一代互联网项目中。
        </p>

        <h3>.xyz 的优点</h3>

        <p>
          首先是<strong>选择空间更大</strong>。相比大量热门 .com 已经被注册的情况，
          .xyz 提供了更多新的组合机会。
        </p>

        <p>
          第二是<strong>品牌自由度高</strong>。.xyz 没有行业限制，
          可以服务于科技、个人品牌、商业、社区以及实验性项目。
        </p>

        <p>
          第三是<strong>具有现代互联网气质</strong>。
          对部分年轻创业团队和技术用户来说，.xyz 更符合他们对新互联网品牌的审美。
        </p>

        <h3>.xyz 的缺点</h3>

        <p>
          最大的问题仍然是<strong>认知度不如 .com</strong>。
          一些普通用户看到 .xyz 时，可能仍然会下意识怀疑它是否正规，
          因此品牌方需要在宣传和用户教育方面投入更多。
        </p>

        <p>
          另一个问题是<strong>域名质量差异很大</strong>。
          并不是注册了一个 .xyz 就天然具有品牌价值。
          域名长度、可读性、词义、拼写和与品牌的关联度，依然非常重要。
        </p>

        <p>
          此外，部分用户对不同新顶级域名的认知仍在建立过程中。
          这意味着选择 .xyz 时，需要综合考虑目标用户以及品牌长期定位。
        </p>

        <h3>今天的 .xyz</h3>

        <p>
          今天的 .xyz 已经不再只是一个新出现的域名后缀。
          它逐渐成为科技创业、AI、开发者和新互联网项目中的一种成熟选择。
          它的优势不在于取代传统域名，而在于提供新的空间、新的组合以及新的品牌可能。
        </p>
      </>
    ),
  },
];

export default function Home() {
  const [openArticle, setOpenArticle] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#F6F8FA] text-[#111827]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden border-b border-[#E5E7EB] pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#06B6D4]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-5xl">
            <div className="mb-8 inline-flex items-center border border-[#BAE6FD] bg-white/80 px-4 py-2 text-sm text-[#0891B2] backdrop-blur">
              .XYZ DOMAIN DISCOVERY
            </div>

            <h1 className="max-w-5xl text-5xl font-light tracking-[-0.04em] text-[#0F172A] md:text-7xl lg:text-[88px] lg:leading-[1.02]">
              Explore the world of{" "}
              <span className="text-[#06B6D4]">.xyz</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#64748B] md:text-xl">
              Discover, search and register your next digital identity with a
              faster, clearer and more focused .xyz domain experience.
            </p>
          </div>

          {/* Registrar-style search */}
          <div className="mt-14 max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl border border-[#CBD5E1] bg-white shadow-[0_15px_50px_rgba(15,23,42,0.08)]">
              <div className="flex min-h-[76px] items-stretch">
                <div className="flex flex-1 items-center px-5 md:px-7">
                  <input
                    type="text"
                    placeholder="Search for a domain name"
                    className="w-full bg-transparent text-lg text-[#0F172A] outline-none placeholder:text-[#94A3B8] md:text-xl"
                  />
                </div>

                <div className="hidden items-center border-l border-[#E2E8F0] px-5 text-sm font-medium text-[#64748B] md:flex">
                  .xyz
                </div>

                <button
                  type="button"
                  className="m-2 rounded-xl bg-[#06B6D4] px-7 text-sm font-semibold tracking-wide text-white transition hover:bg-[#0891B2] md:px-9"
                >
                  SEARCH
                </button>
              </div>

              <div className="border-t border-[#F1F5F9] bg-[#FAFCFD] px-5 py-3 text-xs text-[#94A3B8] md:px-7">
                Search instantly. Check availability. Find your next domain.
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#64748B]">
            <span>Fast search</span>
            <span>Accurate results</span>
            <span>No ads</span>
          </div>
        </div>
      </section>

      {/* Why Zetein */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.4fr]">
          <div>
            <div className="text-sm font-medium tracking-[0.18em] text-[#06B6D4]">
              01
            </div>

            <h2 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
              为什么选择我们
            </h2>
          </div>

          <div>
            <p className="text-xl leading-9 text-[#334155]">
              Zetein 专注于 .xyz 域名发现与查询。我们希望把寻找域名这件事情做得更快、更准确，也更清晰。
            </p>

            <ArticleAccordion
              article={articles[0]}
              open={openArticle === articles[0].id}
              onClick={() =>
                setOpenArticle(
                  openArticle === articles[0].id ? null : articles[0].id
                )
              }
            />
          </div>
        </div>
      </section>

      {/* Why XYZ */}
      <section className="border-y border-[#E2E8F0] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.4fr]">
            <div>
              <div className="text-sm font-medium tracking-[0.18em] text-[#06B6D4]">
                02
              </div>

              <h2 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
                为什么选择 .xyz
              </h2>
            </div>

            <div>
              <p className="text-xl leading-9 text-[#334155]">
                .xyz 是一个开放、简洁且没有行业限制的通用顶级域名，为下一代互联网品牌提供了更多选择。
              </p>

              <ArticleAccordion
                article={articles[1]}
                open={openArticle === articles[1].id}
                onClick={() =>
                  setOpenArticle(
                    openArticle === articles[1].id ? null : articles[1].id
                  )
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* XYZ History */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.4fr]">
          <div>
            <div className="text-sm font-medium tracking-[0.18em] text-[#06B6D4]">
              03
            </div>

            <h2 className="mt-4 text-4xl font-light tracking-tight md:text-5xl">
              探索 .xyz
            </h2>
          </div>

          <div>
            <p className="text-xl leading-9 text-[#334155]">
              从 2014 年诞生，到进入科技、AI 与新互联网项目，.xyz 已经形成了一段独特的发展历程。
            </p>

            <ArticleAccordion
              article={articles[2]}
              open={openArticle === articles[2].id}
              onClick={() =>
                setOpenArticle(
                  openArticle === articles[2].id ? null : articles[2].id
                )
              }
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="text-3xl tracking-wide">Zetein</div>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
                A fast, accurate and focused way to discover .xyz domains.
              </p>
            </div>

            <nav className="grid grid-cols-2 gap-y-4 text-sm text-white/70 md:grid-cols-2">
              <a href="#why-zetein" className="transition hover:text-white">
                关于Zetein
              </a>

              <a href="#why-zetein" className="transition hover:text-white">
                为什么选择我们
              </a>

              <a href="#why-xyz" className="transition hover:text-white">
                .xyz世界
              </a>

              <a href="/privacy" className="transition hover:text-white">
                隐私政策
              </a>

              <a href="/terms" className="transition hover:text-white">
                使用条款
              </a>
            </nav>
          </div>

          <div className="mt-16 border-t border-white/10 pt-6 text-xs text-white/35">
            © {new Date().getFullYear()} Zetein All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

function ArticleAccordion({
  article,
  open,
  onClick,
}: {
  article: (typeof articles)[number];
  open: boolean;
  onClick: () => void;
}) {
  return (
    <article className="mt-10 border-t border-[#E2E8F0]">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <div>
          <div className="text-xs tracking-[0.16em] text-[#94A3B8]">
            {article.number}
          </div>

          <div className="mt-2 text-lg font-medium text-[#0F172A]">
            {article.title}
          </div>
        </div>

        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#CBD5E1] text-xl font-light text-[#06B6D4] transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-all duration-500 ${
          open ? "grid-rows-[1fr] pb-8" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="max-w-3xl text-[15px] leading-8 text-[#64748B]">
            {article.content}
          </div>
        </div>
      </div>
    </article>
  );
}
