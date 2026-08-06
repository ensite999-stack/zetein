import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/zetein-logo.png"
      alt="Zetein"
      width={130}
      height={40}
      className="object-contain"
    />
  );
}
