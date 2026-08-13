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





  if (!domain.endsWith(".xyz")) {


    domain =

      `${domain}.xyz`;


  }





  try {


    let response =

      await fetch(

        `https://rdap.nic.xyz/domain/${domain}`,

        {

          headers:

          {

            Accept:

              "application/rdap+json",

          },


          cache:

            "no-store",

        }

      );





    if (response.status === 404) {


      response =

        await fetch(

          `https://rdap.icann.org/domain/${domain}`,

          {

            headers:

            {

              Accept:

                "application/rdap+json",

            },


            cache:

              "no-store",

          }

        );


    }






    if (response.status === 404) {


      return NextResponse.json({

        domain,


        available:

          true,


        status:

          "available",


      });


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





    let registrarName = null;





    const vcard =

      registrar?.vcardArray;



    if (

      Array.isArray(vcard)

      &&

      Array.isArray(vcard[1])

    ) {


      const nameItem =

        vcard[1].find(

          (item) =>

            Array.isArray(item)

            &&

            item[0] === "fn"

        );



      if (

        Array.isArray(nameItem)

      ) {


        registrarName =

          String(nameItem[3]);

      }


    }







    return NextResponse.json({


      domain,


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

            ns.ldhName

        ) || [],



      secureDNS:

        data.secureDNS || null,


    });


  }

  catch {


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
