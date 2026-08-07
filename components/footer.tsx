import Image from "next/image";
import Link from "next/link";


export default function Footer() {

  return (

    <footer

      className="
      border-t

      border-border

      bg-background

      "

    >

      <div

        className="
        mx-auto

        flex

        w-full

        max-w-7xl

        flex-col

        gap-10

        px-5

        py-12

        "

      >



        {/* Brand */}

        <div

          className="
          flex

          flex-col

          gap-4

          "

        >


          <Link

            href="/"

            className="
            flex

            items-center

            gap-3

            "

          >


            <Image

              src="/zetein-logo.png"

              alt="Zetein"

              width={48}

              height={48}

              className="
              h-12

              w-12

              object-contain

              "

            />



            <span

              className="
              text-3xl

              font-bold

              tracking-tight

              "

            >

              Zetein

            </span>



          </Link>




          <p

            className="
            max-w-sm

            text-sm

            leading-relaxed

            text-muted-foreground

            "

          >

            Fast, simple and private domain management.

          </p>


        </div>





        <div

          className="
          grid

          grid-cols-2

          gap-8

          sm:grid-cols-3

          "

        >



          <div>

            <h3 className="mb-4 font-semibold">

              Product

            </h3>


            <div

              className="
              flex

              flex-col

              gap-3

              text-sm

              text-muted-foreground

              "

            >

              <Link href="/">

                Domain Search

              </Link>


              <Link href="/">

                DNS

              </Link>


            </div>


          </div>





          <div>

            <h3 className="mb-4 font-semibold">

              Company

            </h3>


            <div

              className="
              flex

              flex-col

              gap-3

              text-sm

              text-muted-foreground

              "

            >

              <Link href="/">

                Privacy

              </Link>


              <Link href="/">

                Terms

              </Link>


            </div>


          </div>





          <div>

            <h3 className="mb-4 font-semibold">

              Account

            </h3>


            <div

              className="
              flex

              flex-col

              gap-3

              text-sm

              text-muted-foreground

              "

            >

              <Link href="/login">

                Login

              </Link>


              <Link href="/register">

                Register

              </Link>


            </div>


          </div>



        </div>





        <div

          className="
          border-t

          border-border

          pt-6

          text-sm

          text-muted-foreground

          "

        >

          © {new Date().getFullYear()} Zetein. All rights reserved.

        </div>



      </div>


    </footer>


  );

}
