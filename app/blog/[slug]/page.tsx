import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageLayout from "@/components/page-layout";


const posts = {


  "why-xyz-domains-are-popular": {


    title:
      "Why .xyz Domains Are Becoming Popular",


    description:
      "Explore why businesses, creators and modern projects are choosing .xyz domains for digital identity.",


    content: [

      {
        heading:
          "The Evolution of Domain Names",

        text:
          "The internet has changed significantly since the early days of .com, .net and .org domains. As more companies and individuals build online identities, the demand for flexible domain names continues to grow.",
      },


      {
        heading:
          "Why People Choose .xyz",

        text:
          ".xyz provides a larger naming space and allows users to create memorable digital identities. It is not limited to a specific industry and can be used by businesses, creators, communities and individuals.",
      },


      {
        heading:
          "A Modern Approach to Digital Identity",

        text:
          "Today, a domain name represents more than a website address. It represents a brand, a product and a connection between people and the digital world.",
      },


    ],


  },





  "xyz-vs-com": {


    title:
      "XYZ vs .com: Which Domain Extension Should You Choose?",


    description:
      "Compare .xyz and .com domains, including availability, branding and long-term considerations.",


    content: [

      {
        heading:
          "The Importance of Domain Choice",

        text:
          "A domain name is often the first impression of a brand. Choosing the right domain requires balancing recognition, availability and future growth.",
      },


      {
        heading:
          ".com and Its Strength",

        text:
          ".com remains the most recognized domain extension because of decades of global adoption and user familiarity.",
      },


      {
        heading:
          "Why .xyz Provides New Opportunities",

        text:
          "Many valuable .com names are already registered. .xyz provides additional naming opportunities for brands that want a modern and flexible identity.",
      },


    ],


  },  "choose-brandable-domain-name": {


    title:
      "How to Choose a Brandable Domain Name",


    description:
      "Learn how to choose a memorable and valuable domain name for your brand.",


    content: [

      {
        heading:
          "Keep It Simple",

        text:
          "Strong domains are usually easy to remember, pronounce and share. Simplicity helps users recognize and return to a brand.",
      },


      {
        heading:
          "Think Long Term",

        text:
          "A domain should support future growth instead of only representing one product or short-term idea.",
      },


      {
        heading:
          "Focus on Brand Value",

        text:
          "The strongest domain names create associations, communicate identity and become part of a brand's long-term value.",
      },


    ],


  },





  "startup-domain-strategy": {


    title:
      "Best Domain Strategies for Startups",


    description:
      "How startups can choose domain names that support growth and brand recognition.",


    content: [

      {
        heading:
          "Choose a Flexible Name",

        text:
          "Startups often change direction as they grow. A flexible domain allows a company to expand beyond its original product.",
      },


      {
        heading:
          "Balance Availability and Branding",

        text:
          "The best domain combines availability with memorability and relevance.",
      },


    ],


  },





  "future-of-digital-identity": {


    title:
      "The Future of Digital Identity and Domains",


    description:
      "Explore how AI, online communities and global services are changing domain identity.",


    content: [

      {
        heading:
          "A Changing Internet",

        text:
          "New technologies are creating more ways for people and businesses to establish online identities.",
      },


      {
        heading:
          "Domains Remain Important",

        text:
          "Even as technology changes, domains continue to provide simple and recognizable access points for digital experiences.",
      },


    ],


  },


};





type Params = {

  slug: string;

};





export async function generateMetadata(

  {
    params,
  }: {
    params: Promise<Params>;
  }

): Promise<Metadata> {


  const { slug } = await params;


  const post =
    posts[slug as keyof typeof posts];


  if (!post) {


    return {};

  }



  return {


    title:
      `${post.title} | Zetein`,



    description:
      post.description,



    keywords: [

      ".xyz domain",

      "domain name",

      "domain strategy",

      "digital identity",

      post.title,

    ],


  };


}export default async function BlogPost(

  {
    params,
  }: {
    params: Promise<Params>;
  }

) {


  const { slug } =
    await params;



  const post =
    posts[slug as keyof typeof posts];



  if (!post) {


    notFound();


  }





  return (

    <PageLayout
      title={post.title}
    >


      <article>



        <p

          className="
          text-xl
          leading-8
          text-white/60
          "

        >

          {post.description}

        </p>





        <div

          className="
          mt-16
          space-y-12
          "

        >


          {

            post.content.map((section)=>(


              <section

                key={section.heading}

              >


                <h2

                  className="
                  text-3xl
                  font-bold
                  text-white
                  "

                >

                  {section.heading}

                </h2>



                <p

                  className="
                  mt-4
                  leading-8
                  text-white/70
                  "

                >

                  {section.text}

                </p>



              </section>


            ))

          }


        </div>



      </article>


    </PageLayout>

  );

}
