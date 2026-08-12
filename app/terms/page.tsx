import type { Metadata } from "next";
import PageLayout from "@/components/page-layout";


export const metadata: Metadata = {

  title: "Terms of Use",

  description:
    "Terms of Use for Zetein and its .xyz domain discovery services.",

};



export default function TermsPage() {


  return (

    <PageLayout
      title="Terms of Use"
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
            Acceptance of Terms
          </h2>


          <p className="mt-3">

            By accessing and using Zetein, you agree to
            comply with these Terms of Use and all
            applicable laws and regulations.

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
            Domain Information
          </h2>


          <p className="mt-3">

            Zetein provides domain discovery and search
            information. Domain availability, pricing and
            registration services may depend on third-party
            registrars and providers.

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
            User Responsibilities
          </h2>


          <p className="mt-3">

            Users are responsible for ensuring that their
            selected domain names comply with applicable
            laws, trademark rules and third-party rights.

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
            Service Availability
          </h2>


          <p className="mt-3">

            Zetein aims to provide reliable domain discovery
            services, but availability, accuracy and
            uninterrupted access cannot be guaranteed at all
            times.

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
            Changes to Terms
          </h2>


          <p className="mt-3">

            Zetein may update these Terms of Use from time
            to time. Continued use of the website means
            acceptance of the updated terms.

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
            Contact
          </h2>


          <p className="mt-3">

            For questions regarding these terms, contact
            hello@zetein.xyz.

          </p>


        </section>



      </div>


    </PageLayout>

  );

}
