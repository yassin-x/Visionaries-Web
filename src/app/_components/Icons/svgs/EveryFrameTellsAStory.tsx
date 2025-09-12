import Image from "next/image";
import { SvgProps } from "../types";

function EveryFrameTellsAStory({ className, size = "20" }: SvgProps) {
  return (
    <Image
      src="/icons/EveryFrameTells_A_Story.svg"
      width={+size}
      height={+size}
      className={className}
      alt="Creative Development"
    />
  );
}

export default EveryFrameTellsAStory;
