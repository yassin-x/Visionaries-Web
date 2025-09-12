"use client";
import MainHeading from "@/components/MainHeading";
import { Image } from "antd";
import React from "react";

export default function Services() {
  return (
    <section className="container-xl">
      <MainHeading title={"Our Services"} subTitle={"What We Offer"} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 item-center">
        <div className="space-y-6 bg-card p-8 rounded-md">
          <div>
            <Image.PreviewGroup items={["/images/films/FNeverHappened.png"]}>
              <Image
                src="/images/films/FNeverHappened.png"
                alt={"image"}
                className="w-full h-64 object-cover rounded-md"
              />
            </Image.PreviewGroup>
          </div>
          <h3 className="text-2xl font-bold text-center">Film as If It Never Happened</h3>
        </div>
      </div>
    </section>
  );
}
