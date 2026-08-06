export default function Hero() {
  return (
    <section
      className="
        flex
        min-h-[65vh]
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
          max-w-3xl
          text-4xl
          font-bold
          tracking-tight
          sm:text-6xl
        "
      >
        Find your domain.
      </h1>


      <p
        className="
          mt-5
          max-w-xl
          text-lg
          text-muted-foreground
          sm:text-xl
        "
      >
        Search domains and manage your digital assets.
      </p>


      <div
        className="
          mt-10
          flex
          w-full
          max-w-2xl
          flex-col
          gap-3
          sm:flex-row
        "
      >

        <input
          placeholder="Search your domain..."
          className="
            h-14
            w-full
            rounded-xl
            border
            border-border
            bg-background
            px-5
            text-base
            outline-none
            placeholder:text-muted-foreground
            focus:ring-2
            focus:ring-primary
          "
        />


        <button
          className="
            h-14
            rounded-xl
            bg-primary
            px-10
            text-primary-foreground
            transition-opacity
            hover:opacity-90
          "
        >
          Search
        </button>

      </div>


      <p
        className="
          mt-8
          text-sm
          text-muted-foreground
        "
      >
        Fast. Simple. Private.
      </p>


    </section>
  );
}
