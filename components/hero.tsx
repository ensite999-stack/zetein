export default function Hero() {
  return (
    <section
      className="
        flex
        min-h-[60vh]
        w-full
        flex-col
        items-center
        justify-center
        px-4
        text-center
        sm:px-6
      "
    >

      <h1
        className="
          text-5xl
          font-bold
          tracking-tight
          sm:text-6xl
        "
      >
        Zetein
      </h1>


      <p
        className="
          mt-4
          max-w-xl
          text-lg
          text-muted-foreground
          sm:text-xl
        "
      >
        Find and manage your domains.
      </p>


      <div
        className="
          mt-10
          flex
          w-full
          max-w-xl
          flex-col
          gap-3
          sm:flex-row
        "
      >

        <input
          placeholder="Search your domain..."
          className="
            h-12
            w-full
            rounded-md
            border
            border-border
            bg-background
            px-4
            text-foreground
            outline-none
            placeholder:text-muted-foreground
            focus:ring-2
            focus:ring-primary
          "
        />


        <button
          className="
            h-12
            w-full
            rounded-md
            bg-primary
            px-8
            text-primary-foreground
            transition-opacity
            hover:opacity-90
            sm:w-auto
          "
        >
          Search
        </button>

      </div>


      <p
        className="
          mt-6
          text-sm
          text-muted-foreground
        "
      >
        Fast. Simple. Private.
      </p>


    </section>
  );
}
