import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] text-[#171717]">

      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-[#111111]">

        <div className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-6
        ">

          <Image
            src="/logo.png"
            width={42}
            height={42}
            alt="Zetein"
          />


          <nav className="
            flex
            gap-8
            text-sm
            text-white/70
          ">

            <a href="#history">
              History
            </a>

            <a href="#about">
              About
            </a>

          </nav>

        </div>

      </header>



      {/* Hero */}

      <section
        className="
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
        px-6
        pt-20
        text-center
        "
      >


        <p
          className="
          mb-8
          text-xs
          tracking-[0.4em]
          text-[#8A8175]
          "
        >
          DISCOVER YOUR DIGITAL IDENTITY
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

          Find your
          <br />

          <span className="text-[#A0004D]">
            .xyz
          </span>

          {" "}domain

        </h1>



        <p
          className="
          mt-8
          max-w-xl
          text-lg
          leading-relaxed
          text-[#555555]
          "
        >

          Fast and accurate .xyz domain search.
          Discover your next digital identity.

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
          bg-[#FFFDF8]
          "
        >

          <input

            placeholder="Enter your domain"

            className="
            flex-1
            bg-transparent
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
            text-[#777]
            "
          >

            .xyz

          </div>



          <button

            className="
            bg-[#111111]
            px-10
            text-white
            transition
            hover:bg-[#A0004D]
            "

          >

            SEARCH

          </button>


        </div>



        {/* Popular */}

        <div
          className="
          mt-12
          flex
          flex-wrap
          justify-center
          gap-3
          "
        >

          {
            [
              "ai.xyz",
              "future.xyz",
              "agent.xyz",
              "cloud.xyz"
            ].map((item)=>(

              <span
                key={item}
                className="
                border
                border-[#DDD5C8]
                bg-[#FFFDF8]
                px-4
                py-2
                text-sm
                text-[#555]
                "
              >

                {item}

              </span>

            ))
          }

        </div>



      </section>





      {/* Features */}

      <section
        className="
        mx-auto
        grid
        max-w-5xl
        grid-cols-1
        gap-10
        border-t
        border-[#DDD5C8]
        px-6
        py-20
        md:grid-cols-3
        "
      >

        <Feature
          title="Fast"
          text="Instant domain checking."
        />

        <Feature
          title="Accurate"
          text="Registry based results."
        />

        <Feature
          title="Global"
          text="Register worldwide."
        />


      </section>





      {/* Footer */}

      <footer
        className="
        bg-[#111111]
        px-6
        py-12
        text-white
        "
      >

        <div className="mx-auto max-w-5xl">

          <h2
            className="
            tracking-[0.35em]
            "
          >
            ZETEIN
          </h2>


          <p className="
          mt-4
          text-sm
          text-white/60
          ">

            Discover and register your .xyz domain.

          </p>


          <p
            className="
            mt-8
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
        text-[#666]
        "
      >

        {text}

      </p>

    </div>

  )

}
