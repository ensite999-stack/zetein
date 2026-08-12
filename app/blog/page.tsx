import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "@/components/page-layout";


export const metadata: Metadata = {


  title:
    "Zetein Blog - Domain Name Insights and .xyz Guides",


  description:
    "Explore domain name trends, .xyz guides, branding strategies and digital identity insights from Zetein.",


  keywords: [

    "xyz domain blog",

    "domain name ideas",

    "best xyz domains",

    "premium domains",

    "startup domains",

    "AI domain names",

    "domain trends",

  ],


};





const posts = [

  {
    title:
      "Why .xyz Domains Are Becoming Popular",

    description:
      "Explore the growth of .xyz domains and why modern brands choose flexible digital identities.",

    slug:
      "why-xyz-domains-are-popular",

  },


  {
    title:
      "XYZ vs .com: Which Domain Extension Should You Choose?",

    description:
      "A complete comparison between .xyz and .com, including branding, availability and long-term considerations.",

    slug:
      "xyz-vs-com",

  },


  {
    title:
      "How to Choose a Brandable Domain Name",

    description:
      "Learn practical strategies for selecting memorable and valuable domain names.",

    slug:
      "choose-brandable-domain-name",

  },


  {
    title:
      "Best Domain Strategies for Startups",

    description:
      "Understand how startups select domains that support future growth.",

    slug:
      "startup-domain-strategy",

  },


  {
    title:
      "The Future of Digital Identity and Domains",

    description:
      "How AI, global products and online communities are changing domain naming.",

    slug:
      "future-of-digital-identity",

  },

];





export default function BlogPage() {


  return (

    <PageLayout
      title="Zetein Blog"
    >


      <p
        className="
        max-w-3xl
        "
      >

        Learn about domain names, digital identity,
        branding strategies and the evolving internet.

      </p>




      <div

        className="
        mt-16
        grid
        gap-6
        md:grid-cols-2
        "

      >


        {

          posts.map((post)=>(


            <Link

              key={post.slug}

              href={`/blog/${post.slug}`}

              className="
              rounded-3xl
              border
              border-white/10
              p-8
              transition
              hover:border-[#22D3EE]/50
              "

            >



              <h2

                className="
                text-2xl
                font-bold
                text-white
                "

              >

                {post.title}

              </h2>



              <p

                className="
                mt-4
                leading-7
                text-white/60
                "

              >

                {post.description}

              </p>



              <span

                className="
                mt-6
                inline-block
                text-[#22D3EE]
                "

              >

                Read More →

              </span>



            </Link>


          ))

        }


      </div>



    </PageLayout>

  );

}
