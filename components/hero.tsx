export default function Hero() {
  return (
    <section
      className="
        relative
        flex
        min-h-[65vh]
        w-full
        flex-col
        items-center
        justify-center
        overflow-hidden
        px-4
        text-center

        bg-gradient-to-br
        from-cyan-100
        via-sky-100
        to-emerald-100

        dark:from-slate-950
        dark:via-cyan-950
        dark:to-emerald-950
      "
    >

      <h1
        className="
          max-w-3xl
          text-4xl
          font-bold
          tracking-tight
          text-foreground

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
            bg-background/80
            px-5
            text-base
            text-foreground
            backdrop-blur

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

            bg-slate-900
            px-10

            font-semibold
            text-white

            shadow-lg

            transition

            hover:bg-slate-800

            dark:bg-white
            dark:text-black
            dark:hover:bg-slate-200
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
