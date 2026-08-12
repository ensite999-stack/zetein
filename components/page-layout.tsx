import type { ReactNode } from "react";


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
      py-24
      "
    >

      <div
        className="
        mx-auto
        max-w-4xl
        "
      >


        <h1
          className="
          text-5xl
          font-black
          tracking-tight
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


      </div>


    </main>

  );

}
