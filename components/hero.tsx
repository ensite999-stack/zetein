export default function Hero() {
  return (
    <main
      className="
      relative
      flex
      min-h-screen

      w-full

      items-center
      justify-center

      overflow-hidden

      px-5

      pt-24

      text-center

      "
    >

      {/* 星空蓝背景光晕 */}

      <div
        className="
        absolute
        inset-0

        -z-10

        bg-background

        "
      />


      <div
        className="
        absolute

        left-1/2

        top-1/4

        -z-10

        h-[500px]

        w-[500px]

        -translate-x-1/2

        rounded-full

        bg-cyan-300/20

        blur-3xl

        "
      />



      <section
        className="
        flex

        w-full

        max-w-4xl

        flex-col

        items-center

        "

      >


        <h1

          className="
          max-w-4xl

          text-5xl

          font-bold

          tracking-tight

          text-foreground


          sm:text-7xl

          lg:text-8xl

          "

        >

          Find your
          <br />

          domain.

        </h1>



        <p

          className="
          mt-8

          max-w-2xl

          text-lg

          leading-relaxed

          text-muted-foreground


          sm:text-2xl

          "

        >

          Search domains and manage your
          <br className="hidden sm:block" />

          digital assets.

        </p>




        <div

          className="
          mt-12

          flex

          w-full

          max-w-3xl

          flex-col

          gap-4


          sm:flex-row

          "

        >


          <input

            placeholder="Search your domain..."

            className="
            h-16

            flex-1

            rounded-2xl

            border

            border-border


            bg-background/70


            px-6


            text-lg


            shadow-sm


            backdrop-blur-xl


            outline-none


            transition


            focus:border-primary


            focus:ring-2

            focus:ring-primary/20

            "

          />



          <button

            className="
            h-16


            rounded-2xl


            bg-primary


            px-12


            text-lg


            font-semibold


            text-primary-foreground


            shadow-lg


            shadow-primary/20


            transition


            hover:opacity-90


            "

          >

            Search

          </button>


        </div>



        <p

          className="
          mt-10

          text-sm

          text-muted-foreground


          sm:text-base

          "

        >

          Fast. Simple. Private.

        </p>



      </section>


    </main>
  );
}
