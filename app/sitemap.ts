import type { MetadataRoute } from "next";



const baseUrl =

  "https://zetein.xyz";





const blogPosts = [

  "why-xyz-domains-are-popular",

  "xyz-vs-com",

  "choose-brandable-domain-name",

  "startup-domain-strategy",

  "future-of-digital-identity",

];







export default function sitemap():

MetadataRoute.Sitemap {



  const pages = [


    {


      url:

        baseUrl,


      lastModified:

        new Date(),


      changeFrequency:

        "weekly" as const,


      priority:

        1,


    },



    {


      url:

        `${baseUrl}/xyz-domain`,


      lastModified:

        new Date(),


      changeFrequency:

        "weekly" as const,


      priority:

        0.9,


    },



    {


      url:

        `${baseUrl}/xyz-history`,


      lastModified:

        new Date(),


      changeFrequency:

        "monthly" as const,


      priority:

        0.8,


    },



    {


      url:

        `${baseUrl}/guides`,


      lastModified:

        new Date(),


      changeFrequency:

        "weekly" as const,


      priority:

        0.8,


    },



    {


      url:

        `${baseUrl}/blog`,


      lastModified:

        new Date(),


      changeFrequency:

        "weekly" as const,


      priority:

        0.8,


    },



  ];







  const blogs =


    blogPosts.map(

      (slug)=>(


        {


          url:

            `${baseUrl}/blog/${slug}`,



          lastModified:

            new Date(),



          changeFrequency:

            "monthly" as const,



          priority:

            0.7,


        }


      )

    );








  return [

    ...pages,

    ...blogs,

  ];


}
