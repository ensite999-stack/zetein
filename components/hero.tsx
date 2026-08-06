export default function Hero() {
  return (
    <section
      className="
        flex
        min-h-screen
        w-full
        flex-col
        items-center
        justify-center

        px-5

        text-center
      "
    >

      <h1
        className="
          text-5xl
          font-bold
          tracking-tight

          sm:text-7xl
        "
      >
        Find your domain.
      </h1>


      <p
        className="
          mt-6
          max-w-xl

          text-lg
          text-muted-foreground

          sm:text-2xl
        "
      >
        Search domains and manage your digital assets.
      </p>



      <div
        className="
          mt-12
          flex
          w-full
          max-w-2xl

          flex-col
          gap-4

          sm:flex-row
        "
      >

        <input
          placeholder="Search your domain..."
          className="
            h-14
            flex-1

            rounded-xl

            border

            bg-background/50

            px-5

            backdrop-blur

            outline-none
          "
        />


        <button
          className="
            h-14

            rounded-xl

            bg-foreground

            px-10

            font-semibold

            text-background
          "
        >
          Search
        </button>


      </div>


      <p
        className="
          mt-8
          text-muted-foreground
        "
      >
        Fast. Simple. Private.
      </p>


    </section>
  );
}
