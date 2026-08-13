import { NextResponse } from "next/server";


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




    // xyz registry 没找到
    // 使用 ICANN fallback

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
      await response.json();





    const registrar =

      data.entities?.find(

        (entity:any)=>

          entity.roles?.includes(
            "registrar"
          )

      );





    return NextResponse.json({


      domain,


      available:
        false,


      status:

        data.status || [],



      events:

        data.events || [],



      registrar:

      registrar?.vcardArray?.[1]

        ?.find(

          (item:any)=>

            item[0] === "fn"

        )

        ?.[3]

        || null,



      nameservers:


        data.nameservers?.map(

          (ns:any)=>

            ns.ldhName

        )

        || [],




      secureDNS:


        data.secureDNS

        || null,




      raw:

        data,


    });


  }


  catch(error) {


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
