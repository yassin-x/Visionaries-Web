/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MainHeading from "@/components/MainHeading";
import React from "react";
import { FaServicestack } from "react-icons/fa";

export default function WhyUs() {
  const data: {
    title: string;
    discription: string;
    icon: React.ReactElement<any, any>;
  }[] = [
    {
      title: "Fresh Vision",
      discription:
        "We bring a fresh and bold perspective to every project we touch.",
      icon: <FaServicestack />,
    },
    {
      title: "Personalized Approach",
      discription:
        "Your story is unique, and our work is tailored to reflect that.",
      icon: <FaServicestack />,
    },
    {
      title: "Creative Minds",
      discription:
        "We harness the power of creativity to bring your vision to life.",
      icon: <FaServicestack />,
    },
  ];

  return (
    <section className="container section-gap">
      <MainHeading title="Why Us" subTitle="What Makes Us Different" />
      <div className="element-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-card p-6 max-w-md h-full rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 "
            >
              <div className="mb-4 w-20 h-20 mx-auto bg-secondary rounded-full flex items-center justify-center">
                {React.cloneElement(item.icon, {
                  className: "text-primary text-3xl",
                })}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.discription}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
