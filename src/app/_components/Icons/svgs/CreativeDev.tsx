import Image from "next/image";
import { SvgProps } from "../types";

function CreativeDev({ className, size = "20" }: SvgProps) {
  return (
    <Image
      src="/icons/CreativeDevelopment.svg"
      width={+size}
      height={+size}
      className={className}
      alt="Creative Development"
    />
  );
}

export default CreativeDev;
