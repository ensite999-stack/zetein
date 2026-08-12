import type { Metadata } from "next";


export const metadata: Metadata = {


  title:
    "XYZ Domain Search - Find Available .xyz Domains | Zetein",


  description:
    "Search available .xyz domains with Zetein. Discover memorable, brandable and unique .xyz domain names for businesses, startups and personal projects.",


  keywords: [

    "xyz domain search",

    "available xyz domains",

    "buy xyz domain",

    "find xyz domain",

    "xyz domain name",

    "best xyz domains",

  ],


};





export default function XYZDomainPage() {


  return (

    <main
      className="
      min-h-screen
      bg-[#050505]
      px-6
      pt-32
      text-white
      "
    >


      <section
        className="
        mx-auto
        max-w-5xl
        "
      >


        <h1
          className="
          text-5xl
          font-black
          tracking-tight
          md:text-7xl
          "
        >

          Find Your Perfect
          <br />

          <span className="text-[#22D3EE]">
            .xyz Domain
          </span>

        </h1>



        <p
          className="
          mt-8
          max-w-3xl
          text-xl
          leading-8
          text-white/60
          "
        >

          Search and discover available .xyz domain names
          for brands, businesses, creators and digital
          projects.

        </p>





        <div
          className="
          mt-12
          flex
          max-w-3xl
          rounded-2xl
          border
          border-[#22D3EE]/40
          bg-white
          p-2
          shadow-[0_0_35px_rgba(34,211,238,0.35)]
          "
        >


          <input

            placeholder="Search your .xyz domain"

            className="
            flex-1
            rounded-xl
            px-6
            py-4
            text-black
            outline-none
            "

          />


          <button

            className="
            rounded-xl
            bg-black
            px-8
            text-white
            "

          >

            Search

          </button>


        </div>


      </section>







      <section
        className="
        mx-auto
        mt-24
        max-w-5xl
        space-y-10
        text-white/70
        leading-8
        "
      >


        <h2
          className="
          text-3xl
          font-bold
          text-white
          "
        >

          Why Choose a .xyz Domain?

        </h2>



        <p>

          A domain name is one of the most important parts
          of your digital identity. A strong domain should
          be memorable, easy to share and aligned with your
          brand vision.

        </p>



        <p>

          As many traditional .com domains have already been
          registered, .xyz provides a larger naming space
          for new businesses, creators and organizations.

        </p>



        <h2
          className="
          text-3xl
          font-bold
          text-white
          "
        >

          Who Uses .xyz Domains?

        </h2>



        <p>

          .xyz is used by a wide range of users including
          startups, companies, communities, developers,
          creators and individuals.

          It is not limited to one industry.
          A .xyz domain can represent a company website,
          a personal brand, a product, a community or a
          future project.

        </p>




        <h2
          className="
          text-3xl
          font-bold
          text-white
          "
        >

          Benefits of .xyz Domains

        </h2>




        <ul
          className="
          space-y-4
          "
        >

          <li>
            • More available domain names compared with
            many traditional extensions.
          </li>


          <li>
            • Flexible branding opportunities.
          </li>


          <li>
            • Global recognition without geographic limits.
          </li>


          <li>
            • Suitable for modern digital identities.
          </li>


        </ul>




        <h2
          className="
          text-3xl
          font-bold
          text-white
          "
        >

          Start Your Domain Search

        </h2>



        <p>

          Zetein helps you explore .xyz domains with a
          simple, focused and efficient search experience.

          Find a name that represents your next digital
          identity.

        </p>


      </section>



    </main>

  );

}
