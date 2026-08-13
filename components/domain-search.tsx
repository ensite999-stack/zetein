"use client";


import { useState } from "react";



type DNSRecord = {

  name?: string;

  type?: string;

  data?: string;

};




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



  dns?:

    DNSRecord[];


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


    catch(error: unknown) {



      setError(

        error instanceof Error

          ? error.message

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

        max-w-2xl

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



          onChange={(e)=>

            setDomain(

              e.target.value

            )

          }



          onKeyDown={(e)=>{


            if(e.key === "Enter"){

              searchDomain();

            }


          }}



          placeholder="Search .xyz"



          className="

          min-w-0

          flex-1

          overflow-hidden

          rounded-xl

          px-5

          py-3

          text-base

          text-black

          placeholder:text-gray-400

          outline-none

          md:text-lg

          "


        />







        <button


          onClick={searchDomain}



          disabled={loading}



          className="

          shrink-0

          rounded-xl

          bg-black

          px-6

          py-3

          text-sm

          font-medium

          whitespace-nowrap

          text-white

          md:text-base

          disabled:opacity-50

          "


        >


          {

            loading

              ? "Searching"

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

            max-w-2xl

            rounded-3xl

            border

            border-white/10

            bg-white/5

            p-6

            text-left

            "

          >





            <h2

              className="

              text-3xl

              font-bold

              "

            >

              {result.domain}

            </h2>







            <p className="mt-5">


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


                <p className="mt-5">


                  Registrar:


                  <span

                    className="

                    ml-2

                    text-white/70

                    "

                  >

                    {result.registrar}

                  </span>



                </p>


              )


            }









            {

              result.nameservers &&

              result.nameservers.length > 0 && (



                <div className="mt-8">


                  <h3 className="text-xl font-bold">

                    Nameservers

                  </h3>



                  {

                    result.nameservers.map(

                      (server)=>(


                        <p

                          key={server}

                          className="

                          mt-2

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

              result.dns &&

              result.dns.length > 0 && (



                <div className="mt-8">


                  <h3 className="text-xl font-bold">

                    DNS Records

                  </h3>




                  {

                    result.dns.map(

                      (record,index)=>(



                        <div

                          key={index}

                          className="

                          mt-4

                          rounded-xl

                          bg-white/5

                          p-4

                          "

                        >



                          <p

                            className="

                            text-[#22D3EE]

                            "

                          >

                            {record.type}

                          </p>




                          <p

                            className="

                            mt-2

                            break-all

                            text-white/70

                            "

                          >

                            {record.data}

                          </p>



                        </div>



                      )

                    )

                  }





                </div>



              )


            }









            {

              result.secureDNS && (



                <p className="mt-8">


                  DNSSEC:


                  <span

                    className="

                    ml-2

                    text-white/70

                    "

                  >


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
