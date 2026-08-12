import type { Metadata } from "next";
import PageLayout from "@/components/page-layout";


export const metadata: Metadata = {

  title: "Contact Zetein",

  description:
    "Contact Zetein for questions, feedback and support regarding .xyz domain discovery.",

};



export default function ContactPage() {


  return (

    <PageLayout
      title="Contact Zetein"
    >


      <div
        className="
        space-y-10
        "
      >



        <p>

          Have questions, feedback or suggestions?
          We would like to hear from you.

        </p>




        <section>

          <h2
            className="
            text-2xl
            font-bold
            text-white
            "
          >
            Email
          </h2>


          <p className="mt-3">

            <a
              href="mailto:hello@zetein.xyz"
              className="
              text-[#22D3EE]
              hover:underline
              "
            >
              hello@zetein.xyz
            </a>

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
            About Zetein
          </h2>


          <p className="mt-3">

            Zetein focuses on helping users discover
            meaningful .xyz domain names through a clean,
            fast and accurate search experience.

          </p>


        </section>



      </div>


    </PageLayout>

  );

}
