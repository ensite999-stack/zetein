"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";

const articles = [
  {
    title: "Why Choose Zetein",
    content: (
      <div className="space-y-6">
        <p>
          Zetein focuses on providing a fast, accurate and
          advertising-free .xyz domain discovery experience.
          Our goal is to make finding a digital identity
          simpler, clearer and more efficient.
        </p>

        <p>
          A domain name is no longer just an address.
          It represents a brand, a product and a digital
          identity. According to industry reports from
          Verisign, hundreds of millions of domain names
          have already been registered worldwide, making
          meaningful domain discovery increasingly difficult.
        </p>

        <h3 className="text-xl text-white">
          Fast Discovery
        </h3>

        <p>
          Finding the right domain often requires many
          searches. Brands, products and projects usually
          need to test multiple ideas before discovering
          the right name. Zetein simplifies this process
          through a focused search experience.
        </p>

        <h3 className="text-xl text-white">
          Accurate Information
        </h3>

        <p>
          Domain availability is the most important part
          of domain discovery. A domain can be available,
          registered, reserved or placed under special
          status. Zetein focuses on presenting clear and
          reliable information to help users make better
          decisions.
        </p>

        <h3 className="text-xl text-white">
          No Advertising Distractions
        </h3>

        <p>
          Many domain platforms combine search with
          promotions and advertisements. Zetein believes
          the search experience should focus on discovering
          the right domain rather than navigating through
          unnecessary distractions.
        </p>

        <p>
          Our mission is simple: help people move from an
          idea to a meaningful digital identity with less
          friction.
        </p>
      </div>
    ),
  },

  {
    title: "Why Choose .xyz",
    content: (
      <div className="space-y-6">
        <p>
          .xyz is a modern generic top-level domain,
          commonly referred to as a gTLD, launched in 2014.
          Unlike traditional domain extensions that often
          represent specific categories, .xyz was created
          as an open namespace available to everyone.
        </p>

        <p>
          In the early internet era, domains such as .com,
          .net and .org became the foundation of online
          identity. However, as the internet expanded,
          many short and memorable names became unavailable.
        </p>

        <h3 className="text-xl text-white">
          Why Alphabet Chose abc.xyz
        </h3>

        <p>
          In 2015, Google announced the creation of
          Alphabet, a new parent company, and selected
          <span className="text-[#06B6D4]"> abc.xyz </span>
          as its official website.
        </p>

        <p>
          In Larry Page&apos;s announcement of Alphabet,
          he explained that the name represents a collection
          of letters that represent language, one of
          humanity&apos;s most important innovations, and
          the core of how Google indexes information with
          search.
        </p>

        <p>
          The name Alphabet also reflects the idea of alpha
          as a goal of achieving above-market returns and
          pursuing long-term innovation.
        </p>

        <p>
          Choosing abc.xyz matched this philosophy:
          abc represents fundamental elements, while xyz
          represents openness, possibility and the future.
        </p>

        <h3 className="text-xl text-white">
          A Domain Without Industry Limits
        </h3>

        <p>
          .xyz is not a technology-only domain. It can be
          used by companies, creators, communities, personal
          brands, educational projects and businesses across
          different fields.
        </p>

        <p>
          Technology and AI projects have adopted .xyz
          because these industries often embrace newer
          internet infrastructure. However, the purpose of
          .xyz is broader: providing an open digital identity
          space for anyone.
        </p>

        <h3 className="text-xl text-white">
          Advantages of .xyz
        </h3>

        <p>
          First, .xyz provides a larger naming space. Many
          valuable .com names are already registered, while
          .xyz offers new opportunities for branding.
        </p>

        <p>
          Second, .xyz provides flexibility. It does not
          define what a brand should be. The meaning comes
          from the person or organization using it.
        </p>

        <p>
          Third, .xyz works well for global brands because
          it has no geographic limitation.
        </p>

        <h3 className="text-xl text-white">
          Limitations of .xyz
        </h3>

        <p>
          Compared with .com, .xyz still has lower general
          public recognition because .com has been established
          for decades.
        </p>

        <p>
          Like any domain extension, value depends on the
          quality of the name itself. Length, meaning,
          memorability and brand relevance remain important
          factors.
        </p>
      </div>
    ),
  },

  {
    title: "Explore .xyz History",
    content: (
      <div className="space-y-6">
        <p>
          The history of domain names is also the history
          of digital identity. As the internet expanded,
          the need for more flexible naming systems became
          increasingly clear.
        </p>

        <h3 className="text-xl text-white">
          2014: The Launch of .xyz
        </h3>

        <p>
          .xyz was introduced in 2014 as part of ICANN&apos;s
          New gTLD Program. The goal was to create a modern
          domain space without restrictions on industry,
          location or user type.
        </p>

        <h3 className="text-xl text-white">
          Early Growth
        </h3>

        <p>
          In its early years, .xyz faced the challenge of
          building recognition in a market dominated by
          traditional extensions.
        </p>

        <p>
          As more startups, creators and organizations
          searched for meaningful names, .xyz gained
          attention because of its wider availability
          and flexible branding potential.
        </p>

        <h3 className="text-xl text-white">
          Notable Adoption
        </h3>

        <p>
          One of the most recognized examples is Alphabet&apos;s
          choice of abc.xyz as its official website.
          This decision demonstrated that a new domain
          extension could support a major global brand.
        </p>

        <p>
          Beyond technology, .xyz has also been used by
          businesses, creative projects, communities and
          individuals looking for unique digital identities.
        </p>

        <h3 className="text-xl text-white">
          The Future of .xyz
        </h3>

        <p>
          The internet continues to evolve through AI,
          digital services, global entrepreneurship and
          new forms of online identity.
        </p>

        <p>
          .xyz provides another option for people who want
          a memorable, flexible and modern domain. Its
          challenge remains building broader public
          recognition compared with established extensions.
        </p>

        <p>
          .xyz is not designed to replace .com. Instead,
          it represents another path for creating digital
          identities in a changing internet.
        </p>
      </div>
    ),
  },
];

export default function Home() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <section className="px-6 pb-24 pt-36">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-7xl font-black tracking-[-0.07em] md:text-9xl">
            Zetein
            <span className="cursor-blink">_</span>
          </h1>

          <p className="mt-8 text-xl font-light text-white/60 md:text-3xl">
            Explore the world of .xyz
          </p>

          <div className="mx-auto mt-12 flex max-w-3xl rounded-full bg-white p-2">
            <input
              placeholder="Search your domain"
              className="min-w-0 flex-1 rounded-full px-6 text-black outline-none"
            />

            <button
              type="button"
              className="rounded-full bg-black px-8 text-white"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6">
        <div className="mx-auto max-w-4xl">
          {articles.map((item, index) => (
            <div
              key={item.title}
              className="border-b border-white/10"
            >
              <button
                type="button"
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between py-10 text-left"
                aria-expanded={open === index}
              >
                <h2 className="text-2xl font-light md:text-3xl">
                  {item.title}
                </h2>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-2xl">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="pb-10 text-base leading-8 text-white/60">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 bg-black px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black">
            Zetein
            <span className="cursor-blink">_</span>
          </h2>

          <div className="mt-10 flex flex-col gap-5 text-white/60">
            <span>About Zetein</span>
            <span>Why Choose Us</span>
            <span>.xyz World</span>
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Contact Us</span>

            <a
              href="mailto:hello@zetein.xyz"
              className="transition hover:text-white"
            >
              hello@zetein.xyz
            </a>
          </div>

          <p className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
            © {new Date().getFullYear()} Zetein All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
