export default function Hero() {

  return (

    <main

      className="
      flex
      min-h-screen

      w-full

      items-center

      justify-center


      px-4

      pt-20


      "

    >


      <section

        className="
        flex

        w-full

        max-w-5xl

        flex-col

        items-center

        text-center

        "

      >



        <h1

          className="

          max-w-4xl


          text-5xl


          font-bold


          tracking-tight


          text-foreground



          sm:text-6xl


          lg:text-7xl


          "

        >

          Find your domain.

        </h1>





        <p

          className="

          mt-6


          max-w-2xl


          text-lg


          leading-relaxed


          text-muted-foreground



          sm:text-xl


          "

        >

          Search domains and manage your digital assets.

        </p>







        {/* Search Box */}


        <div

          className="

          mt-12


          flex


          w-full


          max-w-3xl


          flex-col


          gap-3



          sm:flex-row


          "

        >



          <div

            className="

            flex-1


            "

          >

            <input

              type="text"

              placeholder="Search your domain..."

              className="

              h-16


              w-full


              rounded-2xl


              border


              border-border


              bg-background


              px-6


              text-lg


              shadow-sm


              transition


              placeholder:text-muted-foreground


              focus:border-primary


              focus:outline-none


              focus:ring-4


              focus:ring-primary/10


              "

            />

          </div>






          <button

            className="

            h-16


            rounded-2xl


            bg-primary


            px-8


            font-semibold


            text-primary-foreground


            transition


            hover:opacity-90



            "

          >

            Search


          </button>



        </div>







        {/* Feature */}

        <div

          className="

          mt-10


          flex


          flex-wrap


          justify-center


          gap-x-6


          gap-y-2


          text-sm


          text-muted-foreground


          "

        >

          <span>
            Fast
          </span>


          <span>
            Simple
          </span>


          <span>
            Private
          </span>


        </div>




      </section>



    </main>


  );

}
