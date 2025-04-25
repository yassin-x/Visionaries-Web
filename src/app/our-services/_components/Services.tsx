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
            <Image.PreviewGroup
              items={[
                "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
                "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
                "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
              ]}
            >
              <Image
                src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
                alt={"image"}
                className="w-full h-64 object-cover rounded-md"
              />
            </Image.PreviewGroup>
          </div>
          <h3 className="text-2xl font-bold">Video Production</h3>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            dolores.
          </p>
        </div>
      </div>
    </section>
  );
}
