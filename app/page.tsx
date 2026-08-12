import Navbar from "@/components/navbar";


export default function Home() {

  return (

    <main className="min-h-screen bg-[#F7F3EA] text-[#111827]">


      <Navbar />


      {/* Hero */}

      <section
        className="
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
        px-6
        text-center
        "
      >

        <p
          className="
          mb-10
          font-serif
          text-3xl
          tracking-wide
          "
        >
          ζητεῖν
        </p>


        <h1
          className="
          max-w-5xl
          text-5xl
          font-light
          leading-tight
          tracking-tight
          md:text-7xl
          "
        >

          Explore the world of{" "}

          <span className="text-[#06B6D4]">
            .xyz
          </span>

        </h1>



        <p
          className="
          mt-8
          max-w-2xl
          text-lg
          leading-relaxed
          text-[#64748B]
          "
        >

          Discover, search and register
          your next digital identity.

        </p>




        {/* Search */}

        <div
          className="
          mt-14
          flex
          w-full
          max-w-3xl
          overflow-hidden
          border
          border-[#DDD5C8]
          bg-white
          "
        >

          <input

            placeholder="Search your domain"

            className="
            flex-1
            px-6
            py-5
            text-lg
            outline-none
            "

          />


          <div
            className="
            flex
            items-center
            border-l
            border-[#DDD5C8]
            px-5
            text-[#64748B]
            "
          >
            .xyz
          </div>


          <button
            className="
            bg-[#06B6D4]
            px-10
            text-white
            transition
            hover:bg-[#0891B2]
            "
          >

            SEARCH

          </button>


        </div>



      </section>





      {/* Why Zetein */}

      <section
        className="
        mx-auto
        max-w-6xl
        px-6
        py-24
        "
      >

        <h2
          className="
          text-4xl
          font-light
          "
        >
          Why choose Zetein?
        </h2>


        <p
          className="
          mt-6
          max-w-3xl
          text-[#64748B]
          "
        >

          Zetein provides a fast, accurate and
          advertising-free .xyz domain discovery
          experience. We focus on making domain
          search simple, clear and efficient.

        </p>



        <div
          className="
          mt-14
          grid
          gap-10
          md:grid-cols-3
          "
        >

          <Feature
            title="Fast"
            text="Quick domain search with a smooth experience."
          />


          <Feature
            title="Accurate"
            text="Clear availability information to help you decide."
          />


          <Feature
            title="No Ads"
            text="A clean search experience without distractions."
          />


        </div>


      </section>





      {/* Why XYZ */}

      <section
        className="
        border-y
        border-[#DDD5C8]
        bg-white/40
        px-6
        py-24
        "
      >

        <div className="mx-auto max-w-6xl">


          <h2
            className="
            text-4xl
            font-light
            "
          >
            Why choose .xyz?
          </h2>


          <p
            className="
            mt-8
            max-w-4xl
            leading-relaxed
            text-[#64748B]
            "
          >

            .xyz is a modern top-level domain created
            for the next generation of internet users.
            It provides a flexible digital identity for
            creators, developers, startups and innovative
            companies. Unlike traditional domains,
            .xyz is open, memorable and designed for
            the future of the web.

          </p>


        </div>

      </section>





      {/* History */}

      <section
        className="
        mx-auto
        max-w-6xl
        px-6
        py-24
        "
      >

        <h2
          className="
          text-4xl
          font-light
          "
        >
          Explore .xyz history
        </h2>


        <p
          className="
          mt-8
          max-w-4xl
          leading-relaxed
          text-[#64748B]
          "
        >

          Launched in 2014, .xyz became one of the
          most recognized new generation domains.
          From early adoption by startups to growing
          usage in artificial intelligence, Web3 and
          emerging technologies, .xyz has developed
          into a symbol of innovation.

          <br />
          <br />

          Its advantages include wider availability,
          flexible branding and strong relevance for
          modern projects. However, compared with
          traditional domains such as .com, it still
          requires more user education and brand trust.

          .xyz is not a replacement for every domain,
          but it offers a new choice for people building
          the future of the internet.

        </p>


      </section>





      {/* Footer */}

      <footer
        className="
        bg-[#111111]
        px-6
        py-16
        text-[#F7F3EA]
        "
      >

        <div className="mx-auto max-w-6xl">


          <h2
            className="
            font-serif
            text-3xl
            "
          >
            ζητεῖν
          </h2>


          <p
            className="
            mt-5
            text-sm
            text-white/60
            "
          >
            Explore, discover and register your
            digital identity.
          </p>


          <p
            className="
            mt-10
            text-xs
            text-white/40
            "
          >
            © 2026 Zetein
          </p>


        </div>

      </footer>


    </main>

  );

}





function Feature({
  title,
  text
}:{
  title:string;
  text:string;
}) {


  return (

    <div>

      <h3
        className="
        text-2xl
        font-light
        "
      >
        {title}
      </h3>


      <p
        className="
        mt-3
        text-[#64748B]
        "
      >
        {text}
      </p>

    </div>

  );

}
