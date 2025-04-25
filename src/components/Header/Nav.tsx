"use client";
import { Routes } from "@/constants/enums";
import React, { useState } from "react";
import Link from "../Link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";

export default function Nav() {
  const links: { name: string; href: string }[] = [
    {
      name: "About",
      href: `/${Routes.ABOUT}`,
    },
    {
      name: "Our Services",
      href: `/${Routes.OURSERVICES}`,
    },
  ];

  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <ul className="hidden md:flex items-center justify-center gap-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={`text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wider ease-in-out ${
                pathname.startsWith(link.href) ? "text-primary" : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <Button
        className={`md:hidden`}
        variant={"outline"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <MenuIcon />
      </Button>

      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:translate-x-full transition-opacity duration-300 ease-in-out
       ${
         menuOpen
           ? "flex translate-x-0 pointer-events-auto"
           : "translate-x-full pointer-events-none"
       }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className="absolute top-4 right-4 z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            className="md:hidden"
            variant="outline"
            onClick={() => setMenuOpen(false)}
          >
            <XIcon />
          </Button>
        </div>
      </div>

      <div
        className={`bg-card/70 backdrop-blur-2xl h-screen overflow-y-hidden fixed top-0 left-0 w-[70%] z-50 p-6 flex-col md:-translate-x-full transition-transform duration-300 ease-in-out ${
          menuOpen
            ? "flex translate-x-0 pointer-events-auto"
            : "-translate-x-full pointer-events-none"
        }`}
      >
        <div className="element-center">
          <Image
            src={"/images/logo.png"}
            width={980}
            height={1080}
            alt="Visionaries logo"
            priority
            className="w-12 h-12"
          />
        </div>
        <ul className="flex flex-col items-start gap-4 mt-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={`text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wider ease-in-out ${
                  pathname.startsWith(link.href) ? "text-primary" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
