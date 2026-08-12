import type { ReactNode } from "react";
import Link from "next/link";


interface PageLayoutProps {

  title: string;

  children: ReactNode;

}



export default function PageLayout({

  title,

  children,

}: PageLayoutProps) {


  return (

    <main
      className="
      min-h-screen
      bg-[#050505]
      text-white
      px-6
      py-16
      "
    >


      <div
        className="
        mx-auto
        max-w-4xl
        "
      >


        <Link
          href="/"
          className="
          inline-block
          text-3xl
          font-black
          tracking-[-0.05em]
          hover:opacity-80
          transition
          "
        >

          Zetein_

        </Link>



        <h1
          className="
          mt-20
          text-5xl
          font-black
          tracking-tight
          md:text-6xl
          "
        >

          {title}

        </h1>



        <div
          className="
          mt-10
          text-lg
          leading-8
          text-white/70
          "
        >

          {children}

        </div>



        <footer
          className="
          mt-24
          border-t
          border-white/10
          pt-8
          text-sm
          text-white/40
          "
        >

          © {new Date().getFullYear()} Zetein All Rights Reserved.

        </footer>


      </div>


    </main>

  );

}
