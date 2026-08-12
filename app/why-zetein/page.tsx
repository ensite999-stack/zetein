import type { Metadata } from "next";


export const metadata: Metadata = {

  title: "Why Choose Zetein",

  description:
    "Discover why Zetein provides a fast, accurate and advertising-free .xyz domain discovery experience.",

};



export default function WhyZeteinPage() {


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
          Why Choose Zetein
        </h1>



        <div
          className="
          mt-10
          space-y-10
          text-lg
          leading-8
          text-white/70
          "
        >


          <section>

            <h2
              className="
              text-2xl
              font-bold
              text-white
              "
            >
              Fast Domain Discovery
            </h2>

            <p className="mt-3">

              Finding the right domain name often requires
              testing many ideas. Zetein focuses on a simple
              and efficient search experience, helping users
              discover .xyz domains faster.

            </p>

          </section>




          <section>

            <h2
              className="
              text-2xl
              font-bold
              text-white
              "
            >
              Accurate Information
            </h2>

            <p className="mt-3">

              Reliable domain availability information is
              essential when creating a digital identity.
              Zetein focuses on presenting clear and useful
              information to support better decisions.

            </p>

          </section>




          <section>

            <h2
              className="
              text-2xl
              font-bold
              text-white
              "
            >
              No Advertising Distractions
            </h2>

            <p className="mt-3">

              Unlike many search experiences filled with
              promotions, Zetein keeps the focus on finding
              the right domain name.

            </p>

          </section>




          <section>

            <h2
              className="
              text-2xl
              font-bold
              text-white
              "
            >
              Built For Modern Digital Identity
            </h2>

            <p className="mt-3">

              Domains are more than website addresses.
              They represent brands, products and ideas.
              Zetein helps individuals, creators and
              businesses explore new possibilities with
              .xyz domains.

            </p>

          </section>



        </div>


      </div>


    </main>

  );

}
