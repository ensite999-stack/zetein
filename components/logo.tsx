import Link from "next/link";


export default function Logo() {


  return (

    <Link

      href="/"

      className="
      text-3xl
      font-black
      tracking-[-0.05em]
      text-white
      transition
      hover:opacity-80
      "

    >

      Zetein
      <span
        className="text-white"
      >
        _
      </span>


    </Link>

  );

}
