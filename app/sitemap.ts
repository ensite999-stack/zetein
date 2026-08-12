import type { MetadataRoute } from "next";


export default function sitemap():

MetadataRoute.Sitemap {


  return [


    {


      url:
        "https://zetein.xyz",


      lastModified:
        new Date(),


      changeFrequency:
        "weekly",


      priority:
        1,


    },


    {


      url:
        "https://zetein.xyz/xyz-domain",


      lastModified:
        new Date(),


      changeFrequency:
        "weekly",


      priority:
        0.9,


    },


    {


      url:
        "https://zetein.xyz/xyz-history",


      lastModified:
        new Date(),


      changeFrequency:
        "monthly",


      priority:
        0.8,


    },


    {


      url:
        "https://zetein.xyz/guides",


      lastModified:
        new Date(),


      changeFrequency:
        "weekly",


      priority:
        0.8,


    },


  ];


}
