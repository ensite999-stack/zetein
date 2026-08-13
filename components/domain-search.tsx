"use client";

import { useState } from "react";


type DomainResult = {

  domain: string;

  available?: boolean;

  status?: string | string[];

  registrar?: string | null;

  nameservers?: string[];

  secureDNS?: any;

};



export default function DomainSearch() {


  const [domain, setDomain] = useState("");

  const [loading, setLoading] =
    useState(false);


  const [result, setResult] =
    useState<DomainResult | null>(null);


  const [error, setError] =
    useState("");




  async function searchDomain() {


    if (!domain) return;



    setLoading(true);

    setError("");

    setResult(null);



    try {


      const res =
        await fetch(

          `/api/domain?domain=${domain}`

        );



      const data =
        await res.json();



      if (data.error) {


        throw new Error(
          data.error
        );


      }



      setResult(data);



    }


    catch(err:any) {


      setError(
        err.message
      );


    }


    finally {


      setLoading(false);


    }


  }





  return (

    <div
      className="
      w-full
      "
    >


      <div
        className="
        flex
        items-center
        rounded-2xl
        border
        border-white/20
        bg-white/95
        p-2
        shadow-[0_0_25px_rgba(34,211,238,0.25)]
        "
      >


        <input


          value={domain}


          onChange={(e)=>

            setDomain(
              e.target.value
            )

          }


          onKeyDown={(e)=>{


            if(
              e.key === "Enter"
            ){

              searchDomain();

            }


          }}


          placeholder="Search your .xyz domain"


          className="
          min-w-0
          flex-1
          rounded-xl
          px-6
          py-4
          text-lg
          text-black
          outline-none
          "


        />



        <button


          onClick={searchDomain}


          className="
          rounded-xl
          bg-black
          px-8
          py-4
          font-medium
          text-white
          "


        >


          {

            loading

            ? "Searching..."

            : "Search"

          }


        </button>


      </div>





      {
        error && (

          <p
            className="
            mt-6
            text-red-400
            "
          >

            {error}

          </p>

        )
      }






      {
        result && (

          <div

            className="
            mt-8
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            text-left
            "

          >


            <h3
              className="
              text-2xl
              font-bold
              "
            >

              {result.domain}

            </h3>




            <p
              className="
              mt-4
              "
            >

              Status:

              <span
                className="
                ml-2
                text-[#22D3EE]
                "
              >

                {

                  result.available

                  ? "Available"

                  : "Registered"

                }

              </span>

            </p>





            {
              result.registrar && (

                <p className="mt-3">

                  Registrar:

                  <span className="ml-2">

                    {result.registrar}

                  </span>


                </p>

              )
            }






            {
              result.nameservers &&
              result.nameservers.length > 0 && (

                <div className="mt-5">


                  <p>

                    Nameservers:

                  </p>



                  {
                    result.nameservers.map(

                      (ns)=>(

                        <p
                          key={ns}
                          className="
                          text-white/60
                          "
                        >

                          {ns}

                        </p>

                      )

                    )
                  }


                </div>

              )
            }



          </div>

        )
      }



    </div>

  );

}
