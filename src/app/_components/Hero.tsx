import Link from "@/components/Link";
import { Button } from "@/components/ui/button";
import { Routes } from "@/constants/enums";
import Image from "next/image";
import React from "react";
import { FaServicestack, FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="container-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="max-w-md mx-auto space-y-6 text-center md:text-left">
          <p className="text-muted-foreground text-sm">
            Broadcasting & media production company
          </p>
          <h2 className="text-4xl font-bold text-primary">Visionaries Films</h2>
          <p className="text-muted-foreground">
            Visionaries is a dynamic filmmaking company dedicated to crafting
            compelling, high-quality visual stories
          </p>
          <div className="flex items-center gap-6 justify-center md:justify-normal">
            <Link href={"https://wa.me/01270022177"} target="_blank">
              <Button>
                <FaWhatsapp /> Contact Us
              </Button>
            </Link>
            <Link href={`/${Routes.OURSERVICES}`}>
              <Button variant={"link"}>
                <FaServicestack /> Our Services
              </Button>
            </Link>
          </div>
        </div>
        <div className="max-w-md mx-auto hidden md:flex">
          <Image
            src={"/vectors/hero-section.png"}
            alt={"Hero Section"}
            width={980}
            height={1080}
            loading="eager"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
