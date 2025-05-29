import * as React from "react";
import VE1 from "../../../assets/VE1.jpg";
import PA1 from "../../../assets/PA1.jpg";
import GR1 from "../../../assets/GR1.jpg";
import Cc from "../../../assets/Cc1.jpg";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function ContentCreation() {
  const projects = [
    {
      image: PA1,
    },
    {
      image: PA1,
    },
    {
      imge: PA1,
    },
    {
      image: PA1,
    },
    {
      image: PA1,
    },
  ];
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {projects.from({ length: 5 }).map((items, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={items.image} alt="" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
export default ContentCreation;
