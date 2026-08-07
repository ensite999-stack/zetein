export default function Hero() {
  return (
    <main
      className="
      flex
      min-h-screen

      w-full

      items-center

      justify-center

      px-4

      pt-20
      "
    >

      <section
        className="
        flex

        w-full

        max-w-5xl

        flex-col

        items-center

        text-center
        "
      >

        <h1
          className="
          max-w-4xl

          text-5xl

          font-bold

          tracking-tight

          text-foreground


          sm:text-6xl


          lg:text-7xl
          "
        >
          Find your domain.
        </h1>



        <p
          className="
          mt-6

          max-w-2xl

          text-lg

          leading-relaxed

          text-muted-foreground


          sm:text-xl
          "
        >
          Search domains and manage your digital assets.
        </p>




        {/* Domain Search */}

        <div
          className="
          mt-12

          flex

          w-full

          max-w-3xl


          items-center


          overflow-hidden


          rounded-2xl


          border

          border-border


          bg-background


          shadow-sm


          transition


          focus-within:border-primary


          focus-within:ring-4


          focus-within:ring-primary/10
          "
        >


          <input
            type="text"
            placeholder="Search your domain..."
            className="
            h-16

            flex-1

            min-w-0

            bg-transparent

            px-6

            pr-4

            text-base

            text-foreground

            outline-none

            placeholder:text-muted-foreground

            "
          />



          {/* Divider */}

          <div
            className="
            h-10

            w-px

            shrink-0

            bg-border
            "
          />



          {/* Search Button */}

          <button
            className="
            h-16

            shrink-0

            bg-[#22c7d8]


            px-6


            font-semibold


            text-white


            transition


            hover:bg-[#1bb4c4]


            active:scale-95

            "
          >
            Search
          </button>


        </div>




        <div
          className="
          mt-10

          flex

          flex-wrap

          justify-center

          gap-6

          text-sm

          text-muted-foreground
          "
        >

          <span>
            Fast
          </span>


          <span>
            Simple
          </span>


          <span>
            Private
          </span>


        </div>


      </section>


    </main>
  );
}
