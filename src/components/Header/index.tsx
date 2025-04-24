import React from "react";
import Link from "../Link";
import { Routes } from "@/constants/enums";
import Nav from "./Nav";
import Image from "next/image";

export default function Header() {
  return (
    <header className="py-3 bg-card">
      <div className="container flex items-center">
        <div className="flex items-center justify-between w-full">
          <Link href={Routes.ROOT}>
            <h1
              className="text-2xl font-bold text-primary hover:text-primary/90
              transition-colors duration-200 ease-in-out flex items-center gap-4"
            >
              <Image
                src={"/images/logo.png"}
                width={980}
                height={1080}
                alt="Visionaries logo"
                priority
                className="w-7 h-7"
              />
              Visionaries
            </h1>
          </Link>
          <div className="element-center">
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
}
