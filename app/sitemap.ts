import type { MetadataRoute } from "next";


const posts = [

  "why-xyz-domains-are-popular",

  "xyz-vs-com",

  "choose-brandable-domain-name",

  "startup-domain-strategy",

  "future-of-digital-identity",

];



export default function sitemap():

MetadataRoute.Sitemap {


  const baseUrl =

    "https://zetein.xyz";



  const pages = [

    "",

    "/about",

    "/why-zetein",

    "/xyz-world",

    "/blog",

    "/privacy",

    "/terms",

    "/contact",

  ];



  return [


    ...pages.map((page) => ({


      url:

        `${baseUrl}${page}`,



      lastModified:

        new Date(),



      changeFrequency:

        page === ""

        ? ("weekly" as const)

        : ("monthly" as const),



      priority:

        page === ""

        ? 1

        : 0.7,


    })),





    ...posts.map((slug) => ({


      url:

        `${baseUrl}/blog/${slug}`,



      lastModified:

        new Date(),



      changeFrequency:

        "monthly" as const,



      priority:

        0.6,


    })),


  ];


}
