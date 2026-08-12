import type { Metadata } from "next";
import PageLayout from "@/components/page-layout";


export const metadata: Metadata = {

  title: "About Zetein",

  description:
    "Learn about Zetein, a modern .xyz domain discovery platform focused on fast, accurate and advertising-free domain search.",

};



export default function AboutPage() {


  return (

    <PageLayout
      title="About Zetein"
    >


      <div
        className="
        space-y-6
        "
      >


        <p>
          Zetein is a modern platform designed to help
          users discover meaningful .xyz domain names
          quickly and efficiently.
        </p>



        <p>
          As the internet continues to expand, finding
          a memorable domain name has become increasingly
          challenging. Zetein focuses on making domain
          discovery simple, clear and accessible.
        </p>



        <p>
          Our mission is to provide a clean,
          advertising-free experience where individuals,
          creators, startups and businesses can explore
          new digital identities.
        </p>



        <p>
          Zetein focuses on speed, accuracy and useful
          information, helping users make better decisions
          when choosing their next domain.
        </p>


      </div>


    </PageLayout>

  );

}
