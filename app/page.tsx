import Navbar from "@/components/navbar";


export default function Home() {

  return (

    <main className="min-h-screen bg-[#F5F1E8] text-[#171717]">


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
          mb-8
          text-sm
          tracking-[0.35em]
          text-[#8A8175]
          "
        >
          ZĒTEIN · ζητεῖν
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
          text-[#5F5A52]
          "
        >

          Fast and accurate domain search.
          Discover your digital identity.

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
          border-[#D8D0C2]
          bg-[#FFFDF8]
          "
        >


          <input

            placeholder="Enter your name"

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
            border-[#D8D0C2]
            px-5
            text-[#8A8175]
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
              "cloud.xyz",
            ].map((domain)=>(
              
              <button
                key={domain}
                className="
                border
                border-[#D8D0C2]
                bg-[#FFFDF8]
                px-4
                py-2
                text-sm
                text-[#5F5A52]
                transition
                hover:border-[#A0004D]
                "
              >

                {domain}

              </button>

            ))
          }

        </div>



      </section>






      {/* Features */}

      <section
        className="
        mx-auto
        grid
        max-w-6xl
        grid-cols-1
        gap-12
        border-t
        border-[#D8D0C2]
        px-6
        py-24
        md:grid-cols-3
        "
      >


        <Feature
          title="Fast"
          text="Instant domain availability checking."
        />


        <Feature
          title="Accurate"
          text="Registry based domain results."
        />


        <Feature
          title="Global"
          text="Register your identity worldwide."
        />


      </section>





      {/* Footer */}

      <footer
        className="
        bg-[#111111]
        px-6
        py-16
        text-[#F5F1E8]
        "
      >

        <div className="mx-auto max-w-6xl">


          <h2
            className="
            font-serif
            text-3xl
            tracking-wide
            "
          >
            ζητεῖν
          </h2>



          <p
            className="
            mt-5
            max-w-md
            text-sm
            text-white/60
            "
          >

            A fast and accurate .xyz domain discovery platform.

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
  text,

}:{

  title:string;
  text:string;

}) {


  return (

    <div>

      <h3
        className="
        text-3xl
        font-light
        "
      >

        {title}

      </h3>


      <p
        className="
        mt-4
        text-[#6B645B]
        "
      >

        {text}

      </p>


    </div>

  );

}
