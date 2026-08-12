import Link from "next/link";
import Logo from "@/components/logo";


export default function Footer() {


  return (

    <footer
      className="
      bg-black
      px-6
      py-16
      "
    >

      <div
        className="
        mx-auto
        max-w-4xl
        "
      >


        <Logo />



        <div
          className="
          mt-10
          flex
          flex-col
          gap-5
          text-white/60
          "
        >


          <Link
            href="/about"
            className="hover:text-white transition"
          >
            About Zetein
          </Link>



          <Link
            href="/why-zetein"
            className="hover:text-white transition"
          >
            Why Choose Us
          </Link>



          <Link
            href="/xyz-world"
            className="hover:text-white transition"
          >
            .xyz World
          </Link>



          <Link
            href="/blog"
            className="hover:text-white transition"
          >
            Blog
          </Link>



          <Link
            href="/privacy"
            className="hover:text-white transition"
          >
            Privacy Policy
          </Link>



          <Link
            href="/terms"
            className="hover:text-white transition"
          >
            Terms of Use
          </Link>



          <Link
            href="/contact"
            className="hover:text-white transition"
          >
            Contact Us
          </Link>


        </div>



        <p

          className="
          mt-12
          border-t
          border-white/10
          pt-6
          text-xs
          text-white/40
          "

        >

          © {new Date().getFullYear()} Zetein All Rights Reserved.

        </p>


      </div>


    </footer>

  );

}
