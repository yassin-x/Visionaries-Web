import React from "react";

export default function Background() {
  return (
    <div className="relative top-0 left-0 z-[-1]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 xl:w-[1000px] xl:h-[1500px] hidden lg:w-[650px] lg:h-[1600px]  lg:block bg-primary/10 rounded-l-full shadow-lg"></div>
      </div>
    </div>
  );
}
