export const websiteSchema = {


  "@context":
    "https://schema.org",


  "@type":
    "WebSite",



  name:
    "Zetein",



  url:
    "https://zetein.xyz",



  description:
    "Zetein helps users discover and find available .xyz domains with a fast and accurate domain search experience.",



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



  description:
    "Zetein is a domain discovery platform focused on .xyz domain search.",



  email:
    "hello@zetein.xyz",



};
