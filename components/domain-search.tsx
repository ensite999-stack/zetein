"use client";


import { useState } from "react";



type DomainResult = {


  domain:

    string;


  available?:

    boolean;


  status?:

    string | string[];


  registrar?:

    string | null;


  nameservers?:

    string[];


  secureDNS?:

    {

      delegationSigned?:

        boolean;

    }

    | null;


};





export default function DomainSearch() {



  const [domain, setDomain] =

    useState("");



  const [loading, setLoading] =

    useState(false);



  const [result, setResult] =

    useState<DomainResult | null>(null);



  const [error, setError] =

    useState("");







  async function searchDomain() {



    if (!domain.trim()) {


      return;

    }



    setLoading(true);

    setError("");

    setResult(null);





    try {


      const response =

        await fetch(

          `/api/domain?domain=${encodeURIComponent(domain)}`

        );





      const data =

        await response.json();





      if (!response.ok || data.error) {


        throw new Error(

          data.error ||

          "Lookup failed"

        );


      }





      setResult(data);



    }


    catch (err: unknown) {



      setError(

        err instanceof Error

          ? err.message

          : "Search failed"

      );



    }


    finally {


      setLoading(false);


    }


  }







  return (


    <div className="w-full">





      <div

        className="

        mx-auto

        flex

        max-w-3xl

        items-center

        rounded-2xl

        border

        border-white/20

        bg-white/95

        p-2

        shadow-[0_0_25px_rgba(34,211,238,0.25)]

        transition

        hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]

        "

      >





        <input



          value={domain}



          onChange={(e) =>

            setDomain(

              e.target.value

            )

          }



          onKeyDown={(e) => {


            if (

              e.key === "Enter"

            ) {


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



          disabled={loading}



          className="

          rounded-xl

          bg-black

          px-8

          py-4

          font-medium

          text-white

          disabled:opacity-50

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

            text-center

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

            mx-auto

            mt-8

            max-w-3xl

            rounded-3xl

            border

            border-white/10

            bg-white/5

            p-8

            "

          >




            <h2

              className="

              text-2xl

              font-bold

              "

            >


              {result.domain}


            </h2>








            <p className="mt-4">


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


                <p className="mt-4">


                  Registrar:


                  <span className="ml-2 text-white/70">


                    {result.registrar}


                  </span>



                </p>


              )


            }









            {

              result.nameservers &&

              result.nameservers.length > 0 && (



                <div className="mt-6">


                  <p>


                    Nameservers:


                  </p>





                  {

                    result.nameservers.map(

                      (server) => (


                        <p

                          key={server}

                          className="

                          text-white/60

                          "

                        >


                          {server}


                        </p>


                      )


                    )


                  }



                </div>



              )

            }







            {

              result.secureDNS && (



                <p className="mt-6">


                  DNSSEC:


                  <span className="ml-2 text-white/70">


                    {

                      result.secureDNS.delegationSigned

                        ? "Enabled"

                        : "Disabled"

                    }


                  </span>



                </p>



              )


            }






          </div>


        )


      }





    </div>


  );


}
