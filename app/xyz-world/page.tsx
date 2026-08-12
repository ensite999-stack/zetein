import type { Metadata } from "next";
import PageLayout from "@/components/page-layout";


export const metadata: Metadata = {

  title: ".xyz World",

  description:
    "Explore the history, growth and possibilities of the .xyz domain extension.",

};



export default function XyzWorldPage() {


  return (

    <PageLayout
      title=".xyz World"
    >


      <div
        className="
        space-y-10
        " 
      >



        <section>

          <h2
            className="
            text-2xl
            font-bold
            text-white
            "
          >
            The Beginning of .xyz
          </h2>


          <p className="mt-3">

            .xyz was launched in 2014 as part of ICANN&apos;s
            New gTLD Program. It introduced a new choice
            for people and organizations looking for modern
            digital identities.

          </p>


        </section>




        <section>

          <h2
            className="
            text-2xl
            font-bold
            text-white
            "
          >
            A Domain For Everyone
          </h2>


          <p className="mt-3">

            Unlike traditional domain extensions that are
            often associated with specific industries,
            .xyz provides an open namespace for startups,
            creators, communities, businesses and individuals.

          </p>


        </section>




        <section>

          <h2
            className="
            text-2xl
            font-bold
            text-white
            "
          >
            Why Brands Choose .xyz
          </h2>


          <p className="mt-3">

            As many short and memorable .com domains became
            unavailable, modern organizations began exploring
            new domain extensions. .xyz offers more naming
            possibilities and a fresh approach to online
            branding.

          </p>


        </section>




        <section>

          <h2
            className="
            text-2xl
            font-bold
            text-white
            "
          >
            Alphabet and abc.xyz
          </h2>


          <p className="mt-3">

            One of the most recognized examples of .xyz
            adoption is abc.xyz, the official website of
            Alphabet. This demonstrated that a modern domain
            extension could support a global technology
            company.

          </p>


        </section>




        <section>

          <h2
            className="
            text-2xl
            font-bold
            text-white
            "
          >
            The Future of Digital Identity
          </h2>


          <p className="mt-3">

            .xyz does not replace traditional domains.
            Instead, it provides another option for building
            memorable, flexible and future-focused digital
            identities.

          </p>


        </section>



      </div>


    </PageLayout>

  );

}
