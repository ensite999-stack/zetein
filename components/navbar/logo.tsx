import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/zetein-logo.png"
      alt="Zetein"
      width={100}
      height={35}
      className="
        h-8
        w-auto
        object-contain
      "
      priority
    />
  );
}
