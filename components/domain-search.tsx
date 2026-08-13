"use client";


import { useState } from "react";



type DNSRecord = {

  name?: string;

  type?: string;

  data?: string;

};



type DomainEvent = {

  eventAction?: string;

  eventDate?: string;

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



  events?:

    DomainEvent[];



  dns?:

    DNSRecord[];



  secureDNS?:

    {

      delegationSigned?:

        boolean;

    }

    | null;


};








export default function DomainSearch(){



  const [domain,setDomain]=

    useState("");



  const [loading,setLoading]=

    useState(false);



  const [result,setResult]=

    useState<DomainResult|null>(null);



  const [error,setError]=

    useState("");








  async function searchDomain(){



    if(!domain.trim()) return;




    setLoading(true);

    setError("");

    setResult(null);




    try{



      const response=

        await fetch(

          `/api/domain?domain=${encodeURIComponent(domain)}`

        );





      const data=

        await response.json();





      if(!response.ok || data.error){


        throw new Error(

          data.error ||

          "Lookup failed"

        );


      }




      setResult(data);



    }

    catch(error:unknown){



      setError(

        error instanceof Error

        ? error.message

        : "Search failed"

      );



    }

    finally{


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

        bg-white

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


            if(e.key==="Enter"){

              searchDomain();

            }


          }}



          placeholder="Search .xyz"



          className="

          min-w-0

          flex-1

          rounded-xl

          px-5

          py-3

          text-base

          text-black

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

          text-white

          md:text-base

          "


        >


          {

            loading

            ?

            "Searching"

            :

            "Search"

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






            <div

              className="

              flex

              items-center

              justify-between

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



              {

                result.available

                &&

                (

                  <span

                    className="

                    rounded-full

                    bg-green-500/20

                    px-4

                    py-2

                    text-sm

                    text-green-400

                    "

                  >

                    Available

                  </span>

                )

              }


            </div>









            {

              !result.available && (


                <span

                  className="

                  mt-4

                  inline-block

                  rounded-full

                  bg-white/10

                  px-4

                  py-2

                  text-sm

                  text-white/70

                  "

                >

                  Registered

                </span>


              )

            }









            {

              result.registrar && (


                <div className="mt-8">


                  <h3 className="text-xl font-bold">

                    Registrar

                  </h3>



                  <p className="mt-2 text-white/60">

                    {result.registrar}

                  </p>


                </div>


              )

            }









            {

              result.events &&

              result.events.length>0 && (


                <div className="mt-8">


                  <h3 className="text-xl font-bold">

                    Domain Dates

                  </h3>




                  {

                    result.events.map(

                      (event,index)=>(


                        <p

                          key={index}

                          className="mt-2 text-white/60"

                        >

                          {event.eventAction}

                          :

                          {" "}

                          {event.eventDate}


                        </p>


                      )


                    )


                  }




                </div>


              )


            }









            {

              result.nameservers &&

              result.nameservers.length>0 && (


                <div className="mt-8">


                  <h3 className="text-xl font-bold">

                    Nameservers

                  </h3>




                  {

                    result.nameservers.map(

                      (server)=>(


                        <p

                          key={server}

                          className="mt-2 text-white/60"

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

              result.dns.length>0 && (


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

                          border

                          border-white/10

                          bg-white/5

                          p-4

                          "

                        >



                          <p className="text-[#22D3EE]">

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


                <div className="mt-8">


                  <h3 className="text-xl font-bold">

                    DNSSEC

                  </h3>



                  <p className="mt-2 text-white/60">


                    {

                      result.secureDNS.delegationSigned

                      ?

                      "Enabled"

                      :

                      "Disabled"

                    }


                  </p>



                </div>


              )


            }









            {

              !result.available && (


                <a

                  href={

                    `https://www.spaceship.com/domain-search/${result.domain}`

                  }

                  target="_blank"

                  rel="noopener noreferrer"

                  className="

                  mt-10

                  inline-block

                  rounded-xl

                  bg-white

                  px-6

                  py-3

                  font-medium

                  text-black

                  "

                >

                  Register on Spaceship

                </a>


              )

            }






          </div>


        )

      }





    </div>


  );


}
