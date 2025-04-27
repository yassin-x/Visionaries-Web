import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Questions() {
  const data = [
    {
      trigger: "What does Visionaries Films offer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolores.",
    },
    {
      trigger: "Who are we?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolores.",
    },
    {
      trigger: "What is Visionaries Films?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dolores.",
    },
  ];
  return (
    <section className="container-xl">
      <Accordion type="single" collapsible  className="max-w-xl mx-auto">
        {data.map((Item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{Item.trigger}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {Item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
