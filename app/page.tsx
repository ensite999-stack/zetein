import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#111827]">

      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6">

        <Image
          src="/logo.png"
          width={42}
          height={42}
          alt="Zetein"
        />

        <nav className="flex gap-8 text-sm text-gray-500">
          <a href="#history">
            History
          </a>

          <a href="#about">
            About
          </a>
        </nav>

      </header>


      {/* Hero */}
      <section className="mx-auto flex min-h-[75vh] max-w-6xl flex-col items-center justify-center px-6 text-center">


        <h1
          className="
          text-6xl
          font-light
          tracking-tight
          md:text-8xl
          "
        >
          Find your
          <br />
          <span className="font-normal">
            .xyz domain
          </span>
        </h1>


        <p
          className="
          mt-8
          max-w-xl
          text-lg
          text-gray-500
          "
        >
          Fast and accurate .xyz domain search.
          Discover your next digital identity.
        </p>



        {/* Search Box */}
        <div
          className="
          mt-14
          flex
          w-full
          max-w-3xl
          overflow-hidden
          border
          border-gray-200
          bg-white
          "
        >

          <input

            placeholder="Enter your domain"

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
            border-gray-200
            px-5
            text-gray-400
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


        {/* Features */}

        <div
          className="
          mt-24
          grid
          w-full
          max-w-4xl
          grid-cols-1
          gap-10
          border-t
          border-gray-200
          pt-10
          md:grid-cols-3
          "
        >

          <div>
            <h3 className="text-lg">
              Fast
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Instant domain checking.
            </p>
          </div>


          <div>
            <h3 className="text-lg">
              Accurate
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Registry based results.
            </p>
          </div>


          <div>
            <h3 className="text-lg">
              Global
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Register worldwide.
            </p>
          </div>


        </div>


      </section>



      {/* Footer */}

      <footer
        className="
        border-t
        border-gray-200
        px-8
        py-10
        text-sm
        text-gray-500
        "
      >

        <div className="mx-auto max-w-6xl">

          <div
            className="
            text-lg
            tracking-[0.3em]
            text-[#111111]
            "
          >
            ZETEIN
          </div>


          <p className="mt-4">
            Discover and register your .xyz domain.
          </p>


          <p className="mt-8">
            © 2026 Zetein. All rights reserved.
          </p>


        </div>


      </footer>


    </main>
  );
}
