import type { Metadata } from "next";
import PageLayout from "@/components/page-layout";


export const metadata: Metadata = {

  title: "Why Choose Zetein",

  description:
    "Discover why Zetein provides a fast, accurate and advertising-free .xyz domain discovery experience.",

};



export default function WhyZeteinPage() {


  return (

    <PageLayout
      title="Why Choose Zetein"
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
            Fast Domain Discovery
          </h2>


          <p className="mt-3">

            Finding the right domain name often requires
            testing many ideas. Zetein focuses on a simple
            and efficient search experience, helping users
            discover .xyz domains faster.

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
            Accurate Information
          </h2>


          <p className="mt-3">

            Reliable domain availability information is
            essential when creating a digital identity.
            Zetein focuses on presenting clear and useful
            information to support better decisions.

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
            No Advertising Distractions
          </h2>


          <p className="mt-3">

            Unlike many search experiences filled with
            promotions, Zetein keeps the focus on finding
            the right domain name.

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
            Built For Modern Digital Identity
          </h2>


          <p className="mt-3">

            Domains are more than website addresses.
            They represent brands, products and ideas.
            Zetein helps individuals, creators and
            businesses explore new possibilities with
            .xyz domains.

          </p>


        </section>



      </div>


    </PageLayout>

  );

}
