import { NextResponse } from "next/server";


type Nameserver = {

  ldhName?: string;

};



type Entity = {

  roles?: string[];

  vcardArray?: unknown[];

};



type RDAPResponse = {

  status?: string[];

  events?: unknown[];

  nameservers?: Nameserver[];

  entities?: Entity[];

  secureDNS?: {

    delegationSigned?: boolean;

  } | null;

};





export async function GET(

  request: Request

) {


  const { searchParams } =

    new URL(request.url);



  let domain =

    searchParams.get("domain");



  if (!domain) {


    return NextResponse.json(

      {

        error:

          "Domain is required",

      },

      {

        status:

          400,

      }

    );


  }




  domain =

    domain.toLowerCase().trim();





  const fullDomain =

    domain.endsWith(".xyz")

      ? domain

      : `${domain}.xyz`;







  try {



    // .xyz Registry RDAP

    const response =

      await fetch(

        `https://rdap.centralnic.com/xyz/domain/${fullDomain}`,

        {

          headers: {

            Accept:

              "application/rdap+json",

          },


          cache:

            "no-store",

        }

      );







    // 域名不存在

    if (response.status === 404) {


      return NextResponse.json({

        domain:

          fullDomain,


        available:

          true,


        status:

          "available",


      });


    }







    if (!response.ok) {


      return NextResponse.json(

        {

          error:

            "RDAP request failed",

        },

        {

          status:

            response.status,

        }

      );


    }








    const data =

      await response.json() as RDAPResponse;







    const registrar =

      data.entities?.find(

        (entity) =>

          entity.roles?.includes(

            "registrar"

          )

      );







    let registrarName:

      string | null = null;








    const vcard =

      registrar?.vcardArray;





    if (

      Array.isArray(vcard)

      &&

      Array.isArray(vcard[1])

    ) {


      const item =

        vcard[1].find(

          (value) =>

            Array.isArray(value)

            &&

            value[0] === "fn"

        );





      if (

        Array.isArray(item)

      ) {


        registrarName =

          String(item[3]);


      }


    }









    return NextResponse.json({


      domain:

        fullDomain,



      available:

        false,



      status:

        data.status || [],



      events:

        data.events || [],



      registrar:

        registrarName,



      nameservers:

        data.nameservers?.map(

          (ns) =>

            ns.ldhName || ""

        ) || [],



      secureDNS:

        data.secureDNS || null,


    });





  }


  catch(error) {



    console.error(

      "RDAP ERROR:",

      error

    );



    return NextResponse.json(

      {

        error:

          "Domain lookup failed",

      },

      {

        status:

          500,

      }

    );


  }


}
