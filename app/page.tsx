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
          the right name.
          Zetein simplifies this process through a focused
          search experience.
        </p>


        <h3 className="text-xl text-white">
          Accurate Information
        </h3>


        <p>
          Domain availability is the most important part
          of domain discovery.
          A domain can be available, registered, reserved
          or placed under special status.
          Zetein focuses on presenting clear and reliable
          information to help users make better decisions.
        </p>


        <h3 className="text-xl text-white">
          No Advertising Distractions
        </h3>


        <p>
          Many domain platforms combine search with
          promotions and advertisements.
          Zetein believes the search experience should
          focus on discovering the right domain instead
          of unnecessary distractions.
        </p>


        <p>
          Our mission is simple:
          help people move from an idea to a meaningful
          digital identity with less friction.
        </p>

      </div>
    ),
  },



  {
    title: "Why Choose .xyz",

    content: (
      <div className="space-y-6">


        <p>
          .xyz is a modern generic top-level domain
          launched in 2014.
          It was created as an open namespace without
          restrictions on industry, location or identity.
        </p>


        <p>
          As the internet expanded, many short and
          memorable .com names became unavailable.
          New brands needed more flexible options
          for creating digital identities.
        </p>



        <h3 className="text-xl text-white">
          Why Alphabet Chose abc.xyz
        </h3>



        <p>
          In 2015, Google announced Alphabet,
          a new parent company, and selected
          <span className="text-[#22D3EE]">
            {" "}abc.xyz{" "}
          </span>
          as its official website.
        </p>



        <p>
          Larry Page explained that Alphabet represents
          a collection of letters that form language,
          one of humanity&apos;s most important innovations,
          and the foundation of how Google organizes
          information.
        </p>



        <p>
          The choice of abc.xyz matched the idea behind
          Alphabet:
          abc represents fundamental elements,
          while xyz represents openness and future
          possibilities.
        </p>



        <h3 className="text-xl text-white">
          A Domain Without Industry Limits
        </h3>



        <p>
          .xyz is not a technology-only domain.
          It can be used by companies, creators,
          communities, personal brands, educational
          projects and businesses across different fields.
        </p>



        <h3 className="text-xl text-white">
          Advantages of .xyz
        </h3>



        <p>
          .xyz provides a larger naming space,
          flexible branding opportunities and a global
          identity without geographic limitations.
        </p>



        <h3 className="text-xl text-white">
          Limitations of .xyz
        </h3>



        <p>
          Compared with .com, .xyz still has lower
          general public recognition.
          Like any domain extension, value depends on
          the quality, meaning and memorability of the
          name itself.
        </p>


      </div>
    ),
  },



  {
    title: "Explore .xyz History",

    content: (
      <div className="space-y-6">


        <p>
          The history of domains is the history of
          digital identity.
          As the internet expanded, users needed more
          flexible naming systems.
        </p>



        <h3 className="text-xl text-white">
          2014: The Launch of .xyz
        </h3>


        <p>
          .xyz was introduced in 2014 as part of
          ICANN&apos;s New gTLD Program.
          Its purpose was to create an open domain space
          for everyone.
        </p>



        <h3 className="text-xl text-white">
          Growth and Adoption
        </h3>



        <p>
          .xyz gained attention because it provided
          more naming possibilities for new brands,
          projects and individuals.
        </p>



        <h3 className="text-xl text-white">
          Notable Examples
        </h3>



        <p>
          Alphabet&apos;s abc.xyz website became one of
          the most recognized examples showing that a
          modern domain extension could support a global
          company.
        </p>



        <p>
          Beyond technology, .xyz is also used by
          businesses, creators, communities and personal
          projects worldwide.
        </p>



        <h3 className="text-xl text-white">
          The Future of .xyz
        </h3>



        <p>
          The growth of AI, digital services and global
          entrepreneurship continues to increase demand
          for flexible domain names.
        </p>



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


  const [open, setOpen] = useState<number | null>(null);

  const [showEmail, setShowEmail] = useState(false);



  return (

    <main
      className="
      min-h-screen
      bg-[#050505]
      text-white
      "
    >


      <Navbar />



      <section
        className="
        px-6
        pt-36
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


          <h1
            className="
            text-7xl
            font-black
            tracking-[-0.07em]
            md:text-9xl
            "
          >

            Zetein
            <span className="cursor-blink">
              _
            </span>

          </h1>



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
            border-[#22D3EE]/40
            bg-white
            p-2
            shadow-[0_0_35px_rgba(34,211,238,0.35)]
            transition
            hover:shadow-[0_0_55px_rgba(34,211,238,0.55)]
            "
          >


            <input

              placeholder="Search your domain name"

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



            <div
              className="
              hidden
              px-5
              text-sm
              text-gray-400
              md:block
              "
            >
              .xyz
            </div>



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

      </section>





      <section
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





      <footer
        className="
        mt-20
        bg-black
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


          <h2
            className="
            text-3xl
            font-black
            "
          >

            Zetein
            <span className="cursor-blink">
              _
            </span>

          </h2>



          <div
            className="
            mt-10
            flex
            flex-col
            gap-5
            text-white/60
            "
          >

            <span>
              About Zetein
            </span>

            <span>
              Why Choose Us
            </span>

            <span>
              .xyz World
            </span>

            <span>
              Privacy Policy
            </span>

            <span>
              Terms of Use
            </span>


            <button
              onClick={() =>
                setShowEmail(!showEmail)
              }
              className="
              text-left
              "
            >
              Contact Us
            </button>



            {
              showEmail && (

                <a
                  href="mailto:hello@zetein.xyz"
                >
                  hello@zetein.xyz
                </a>

              )
            }


          </div>



          <p
            className="
            mt-12
            border-t
            border-white/10
            pt-6
            text-xs
            text-white/40
            "
          >
            © {new Date().getFullYear()} Zetein All Rights Reserved.
          </p>


        </div>


      </footer>


    </main>

  );

}
