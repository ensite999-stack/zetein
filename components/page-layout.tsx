import type { ReactNode } from "react";
import Logo from "@/components/logo";
import Footer from "@/components/footer";


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
      "
    >


      <div
        className="
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


          <Logo />



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


        </div>


      </div>



      <Footer />


    </main>

  );

}
