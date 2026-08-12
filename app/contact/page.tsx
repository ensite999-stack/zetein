import type { Metadata } from "next";


export const metadata: Metadata = {

  title: "Contact Zetein",

  description:
    "Contact Zetein for questions, feedback and support regarding .xyz domain discovery.",

};



export default function ContactPage() {


  return (

    <main
      className="
      min-h-screen
      bg-[#050505]
      text-white
      px-6
      py-24
      "
    >

      <div
        className="
        mx-auto
        max-w-4xl
        "
      >


        <h1
          className="
          text-5xl
          font-black
          tracking-tight
          "
        >
          Contact Zetein
        </h1>



        <div
          className="
          mt-10
          space-y-8
          text-lg
          leading-8
          text-white/70
          "
        >


          <p>

            Have questions, feedback or suggestions?
            We would like to hear from you.

          </p>



          <section>

            <h2
              className="
              text-2xl
              font-bold
              text-white
              "
            >
              Email
            </h2>


            <p className="mt-3">

              <a
                href="mailto:hello@zetein.xyz"
                className="
                text-[#22D3EE]
                hover:underline
                "
              >
                hello@zetein.xyz
              </a>

            </p>


          </section>




          <section>

            <h2
              className="
              text-2xl
              font-bold
              text-white
              "
            >
              About Zetein
            </h2>


            <p className="mt-3">

              Zetein focuses on helping users discover
              meaningful .xyz domain names through a clean,
              fast and accurate search experience.

            </p>


          </section>



        </div>


      </div>


    </main>

  );

}
