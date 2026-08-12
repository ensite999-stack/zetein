"use client";

import { useState } from "react";
import Logo from "@/components/logo";
import Footer from "@/components/footer";

import {
  websiteSchema,
  organizationSchema,
} from "@/app/schema";



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
          searches. Zetein simplifies this process through
          a focused search experience.
        </p>


        <h3 className="text-xl text-white">
          Accurate Information
        </h3>


        <p>
          Zetein focuses on presenting clear and reliable
          information to help users make better decisions.
        </p>


        <h3 className="text-xl text-white">
          No Advertising Distractions
        </h3>


        <p>
          Zetein keeps the experience focused on discovering
          the right domain without unnecessary promotions.
        </p>


      </div>

    ),

  },



  {
    title: "Why Choose .xyz",

    content: (

      <div className="space-y-6">


        <p>
          .xyz is a modern generic top-level domain launched
          in 2014. It provides an open namespace without
          restrictions on industry, location or identity.
        </p>


        <p>
          Many short and memorable .com names became
          unavailable, creating demand for flexible
          alternatives.
        </p>


        <h3 className="text-xl text-white">
          Why Alphabet Chose abc.xyz
        </h3>


        <p>
          In 2015, Google announced Alphabet and selected
          abc.xyz as its official website.
        </p>


        <p>
          The choice demonstrated how a modern domain
          extension could support a global technology brand.
        </p>


      </div>

    ),

  },


  {
    title: "Explore .xyz History",

    content: (

      <div className="space-y-6">
        <p>
          The history of domains is the history of digital
          identity. As the internet expanded, users needed
          more flexible naming systems.
        </p>


        <h3 className="text-xl text-white">
          2014: The Launch of .xyz
        </h3>


        <p>
          .xyz was introduced in 2014 as part of ICANN&apos;s
          New gTLD Program.
        </p>


        <h3 className="text-xl text-white">
          Growth and Adoption
        </h3>


        <p>
          .xyz gained attention because it provided more
          naming possibilities for brands, projects and
          individuals.
        </p>


        <h3 className="text-xl text-white">
          Notable Examples
        </h3>


        <p>
          Alphabet&apos;s abc.xyz website became one of the
          most recognized examples showing that a modern
          domain extension could support a global company.
        </p>


        <h3 className="text-xl text-white">
          Future of .xyz
        </h3>


        <p>
          .xyz does not replace .com.
          It provides another option for building digital
          identities in a changing internet.
        </p>


      </div>

    ),

  },

];





export default function Home() {


  const [open, setOpen] =
    useState<number | null>(null);



  return (

    <main
      className="
      min-h-screen
      bg-[#050505]
      text-white
      "
    >


      <script

        type="application/ld+json"

        dangerouslySetInnerHTML={{

          __html:

            JSON.stringify([

              websiteSchema,

              organizationSchema,

            ]),

        }}

      />




      <section
        className="
        px-6
        pt-20
        pb-24
        "
      >

        <div
          className="
          mx-auto
          max-w-5xl
          text-center
          "
        >



          <Logo />



          <p
            className="
            mt-8
            text-xl
            font-light
            text-white/60
            md:text-3xl
            "
          >

            Explore the world of .xyz

          </p>




          <div
            className="
            mx-auto
            mt-12
            flex
            max-w-3xl
            items-center
            rounded-2xl
            border
            border-white/20
            bg-white/95
            p-2
            shadow-[0_0_25px_rgba(34,211,238,0.25)]
            transition
            hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
            "
          >



            <input

              placeholder="Zetein.xyz"

              className="
              min-w-0
              flex-1
              rounded-xl
              px-6
              py-4
              text-lg
              text-black
              outline-none
              "

            />



            <span
              className="
              hidden
              px-5
              text-sm
              text-gray-400
              md:block
              "
            >

              .xyz

            </span>



            <button

              className="
              rounded-xl
              bg-black
              px-8
              py-4
              font-medium
              text-white
              "

            >

              Search

            </button>



          </div>


        </div>


      </section>      <section
        className="
        border-t
        border-white/10
        px-6
        "
      >

        <div
          className="
          mx-auto
          max-w-4xl
          "
        >


          {
            articles.map((item,index)=>(

              <div
                key={item.title}
                className="
                border-b
                border-white/10
                "
              >


                <button

                  type="button"

                  onClick={() =>
                    setOpen(
                      open === index
                      ? null
                      : index
                    )
                  }

                  className="
                  flex
                  w-full
                  items-center
                  justify-between
                  py-10
                  text-left
                  "

                >

                  <h2
                    className="
                    text-2xl
                    font-light
                    md:text-3xl
                    "
                  >

                    {item.title}

                  </h2>



                  <span
                    className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    text-2xl
                    "
                  >

                    {
                      open === index
                      ? "−"
                      : "+"
                    }

                  </span>


                </button>



                {
                  open === index && (

                    <div
                      className="
                      pb-10
                      leading-8
                      text-white/60
                      "
                    >

                      {item.content}

                    </div>

                  )
                }


              </div>

            ))
          }


        </div>


      </section>





      <Footer />


    </main>

  );

}
