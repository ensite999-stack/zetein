import Image from "next/image";


export function Logo() {
  return (
    <div
      className="
        flex
        items-center
        gap-2
      "
    >

      <Image
        src="/zetein-logo.jpg"
        alt="Zetein"
        width={40}
        height={40}
        className="
          h-9
          w-9
          object-contain
        "
      />


      <span
        className="
          text-xl
          font-bold
          text-foreground
        "
      >
        Zetein
      </span>

    </div>
  );
}
