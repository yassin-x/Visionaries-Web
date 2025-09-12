import Image from "next/image";
import { SvgProps } from "../types";

function PreProduction({ className, size = "20" }: SvgProps) {
  return (
    <Image
      src="/icons/Pre-Production.svg"
      width={+size}
      height={+size}
      className={className}
      alt="Creative Development"
    />
  );
}

export default PreProduction;
