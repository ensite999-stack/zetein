import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-3">

      <Image
        src="/zetein-logo.jpg"
        alt="Zetein"
        width={42}
        height={42}
        className="h-10 w-10 object-contain"
        priority
      />

      <span
        className="
          text-xl
          font-semibold
          text-foreground
        "
      >
        Zetein
      </span>

    </div>
  );
}
