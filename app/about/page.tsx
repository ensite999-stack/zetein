import type { Metadata } from "next";


export const metadata: Metadata = {

  title: "About Zetein",

  description:
    "Learn about Zetein, a modern .xyz domain discovery platform focused on fast, accurate and advertising-free domain search.",

};



export default function AboutPage() {


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
          About Zetein
        </h1>


        <div
          className="
          mt-10
          space-y-6
          text-lg
          leading-8
          text-white/70
          "
        >

          <p>
            Zetein is a modern platform designed to help
            users discover meaningful .xyz domain names
            quickly and efficiently.
          </p>


          <p>
            As the internet continues to expand, finding
            a memorable domain name has become increasingly
            challenging. Zetein focuses on making domain
            discovery simple, clear and accessible.
          </p>


          <p>
            Our mission is to provide a clean,
            advertising-free experience where individuals,
            creators, startups and businesses can explore
            new digital identities.
          </p>


          <p>
            Zetein focuses on speed, accuracy and useful
            information, helping users make better decisions
            when choosing their next domain.
          </p>


        </div>


      </div>


    </main>

  );

}
