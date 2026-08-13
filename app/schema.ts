export const websiteSchema = {


  "@context":

    "https://schema.org",



  "@type":

    "WebSite",



  name:

    "Zetein",



  alternateName:

    "Zetein .xyz Domain Search",



  url:

    "https://zetein.xyz",



  description:

    "Explore the world of .xyz domains with Zetein. Discover, search, and register the perfect domain for your next idea.",



  potentialAction:


  {


    "@type":

      "SearchAction",



    target:

      "https://zetein.xyz/?q={search_term_string}",



    "query-input":

      "required name=search_term_string",


  },


};







export const organizationSchema = {


  "@context":

    "https://schema.org",



  "@type":

    "Organization",



  name:

    "Zetein",



  url:

    "https://zetein.xyz",



  logo:

    "https://zetein.xyz/icon.png",



  description:

    "Zetein is a platform for discovering, searching, and registering .xyz domains.",



};
