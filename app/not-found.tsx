import Link from "next/link";


export default function NotFound() {


  return (

    <main

      className="
      flex
      min-h-screen
      items-center
      justify-center
      bg-[#050505]
      px-6
      text-white
      "

    >


      <section

        className="
        max-w-xl
        text-center
        "

      >


        <h1

          className="
          text-8xl
          font-black
          tracking-tight
          "

        >

          404

        </h1>



        <h2

          className="
          mt-6
          text-3xl
          font-bold
          "

        >

          Domain Not Found

        </h2>



        <p

          className="
          mt-6
          leading-8
          text-white/60
          "

        >

          The page you are looking for does not exist.
          Discover new possibilities with Zetein and
          explore available .xyz domains.

        </p>



        <Link

          href="/"

          className="
          mt-10
          inline-flex
          rounded-xl
          bg-[#22D3EE]
          px-8
          py-4
          font-medium
          text-black
          transition
          hover:opacity-80
          "

        >

          Return Home

        </Link>


      </section>


    </main>

  );


}
