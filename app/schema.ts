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
    "Zetein helps users discover meaningful .xyz domains with a fast, accurate and advertising-free domain search experience.",



  inLanguage:
    "en-US",



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
    "https://zetein.xyz/icon.ico",



  description:
    "Zetein is a modern .xyz domain discovery platform focused on helping users find meaningful domain names.",



  email:
    "hello@zetein.xyz",



  contactPoint:

  {

    "@type":
      "ContactPoint",


    contactType:
      "customer support",


    email:
      "hello@zetein.xyz",


  },



  sameAs:

  [

  ],


};
