export default function Hero() {

  return (

    <section

      className="

      flex

      min-h-screen

      w-full


      items-center

      justify-center


      px-5


      text-center

      "

    >


      <div

        className="
        w-full
        max-w-5xl
        "

      >


        <h1

          className="

          text-6xl

          font-bold

          tracking-tight


          text-white


          sm:text-8xl

          "

        >

          Find your

          <br />

          domain.


        </h1>




        <p

          className="

          mt-8


          text-lg


          text-blue-200


          sm:text-2xl

          "

        >

          Search domains and manage your

          <br />

          digital assets.


        </p>





        <div

          className="

          mt-12


          flex


          w-full


          flex-col


          gap-4


          sm:flex-row


          sm:justify-center

          "

        >



          <input

            placeholder="Search your domain..."

            className="

            h-16


            rounded-2xl


            border


            border-white/20


            bg-[#0b2348]


            px-6


            text-white


            placeholder:text-blue-200


            outline-none


            sm:w-[450px]

            "

          />





          <button

            className="

            h-16


            rounded-2xl


            bg-white


            px-10


            font-bold


            text-[#06152f]


            "

          >

            Search


          </button>



        </div>





        <p

          className="

          mt-10


          text-blue-200


          "

        >

          Fast. Simple. Private.


        </p>



      </div>


    </section>


  );

}
