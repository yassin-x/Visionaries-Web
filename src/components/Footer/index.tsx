import { Routes } from "@/constants/enums";
import React from "react";
import Link from "../Link";
import Image from "next/image";

export default function Footer() {
  const pagesLinks = [
    {
      title: "Our Services",
      href: `/${Routes.OURSERVICES}`,
    },
    {
      title: "FAQ",
      href: `/${Routes.FAQ}`,
    },
  ];

  const socialLinks = [
    {
      name: "facebook",
      href: "https://www.facebook.com/profile.php?id=61559480051208",
      icon: "/icons/FacebookIcon.svg",
    },
    {
      name: "instagram",
      href: "https://www.instagram.com/visionariesfilms",
      icon: "/icons/InstagramIcon.svg",
    },
    {
      name: "whatsapp",
      href: "https://wa.me/01270022177",
      icon: "/icons/WhatsIcon.svg",
    },
  ];
  return (
    <footer>
      <div className="container py-6 md:py-10 lg:py-12">
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-2xl font-bold">Go To</h3>
            <ul className="flex flex-col gap-2 items-center">
              {pagesLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:underline underline-offset-4 hover:text-primary"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center gap-4">
            <h3 className="text-2xl font-bold">Follow Us</h3>
            <div className="flex items-center gap-8">
              {socialLinks.map((link, index) => (
                <div key={index}>
                  <Link href={link.href} target="_blank">
                    <Image
                      src={link.icon}
                      alt={link.name}
                      width={980}
                      height={1080}
                      className="w-7 h-7"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-accent text-center">
        <p className="text-muted-foreground text-sm py-2">
          &copy; {new Date().getFullYear()} Visionaries Films. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
