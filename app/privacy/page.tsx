import type { Metadata } from "next";


export const metadata: Metadata = {

  title: "Privacy Policy",

  description:
    "Privacy Policy for Zetein, explaining how we handle information and provide domain discovery services.",

};



export default function PrivacyPage() {


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
          Privacy Policy
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


          <section>

            <h2
              className="
              text-2xl
              font-bold
              text-white
              "
            >
              Information We Collect
            </h2>


            <p className="mt-3">

              Zetein is designed to provide domain discovery
              services. We may collect limited information
              necessary to operate, improve and secure our
              website.

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
              Domain Search Data
            </h2>


            <p className="mt-3">

              When users search for domain names, search
              requests may be processed to provide domain
              availability information and improve the
              search experience.

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
              Cookies and Analytics
            </h2>


            <p className="mt-3">

              Zetein may use cookies or analytics tools to
              understand website performance, improve user
              experience and maintain service quality.

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
              Third-Party Services
            </h2>


            <p className="mt-3">

              Zetein may rely on trusted third-party services
              for hosting, analytics, security and domain
              related functionality.

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
              Contact
            </h2>


            <p className="mt-3">

              If you have questions about this Privacy Policy,
              please contact us at hello@zetein.xyz.

            </p>


          </section>



        </div>


      </div>


    </main>

  );

}
