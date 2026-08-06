import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2">

      <Image
        src="/zetein-logo.jpg"
        alt="Zetein"
        width={42}
        height={42}
        className="
          h-10
          w-10
          object-contain
        "
        priority
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
