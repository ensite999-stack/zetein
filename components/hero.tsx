export default function Hero() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">

      <h1 className="text-5xl font-bold">
        Zetein
      </h1>

      <p className="mt-4 text-xl text-muted-foreground">
        Find and manage your domains.
      </p>

      <div className="mt-10 flex w-full max-w-xl gap-3">
        <input
          placeholder="Search your domain..."
          className="h-12 flex-1 rounded-md border px-4"
        />

        <button
          className="h-12 rounded-md bg-black px-6 text-white"
        >
          Search
        </button>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Fast. Simple. Private.
      </p>

    </section>
  );
}
