import React from "react";

export default function MainHeading({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <div className="text-center pb-6">
      <h2 className="text-4xl font-bold text-primary">{title}</h2>
      <p className="text-muted-foreground text-sm">{subTitle}</p>
    </div>
  );
}
