import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";
import { projects } from "./projects";
import ComponentCard from "../../common/ComponentCard/ComponentCard";

function CarouselDemo() {
  const navigate = useNavigate();

  const handleNavigate = (category) => {
    navigate(`/detail`, {
      state: {
        category: category.slug,
      },
    });
  };

  return (
    <div id="portfolio">
      <ComponentCard
        title={"Portfolio"}
        description={
          "In my Portfolio, you'll find a curated selection of projects showcasing my front‑end craftsmanship—from dynamic React dashboards and interactive component libraries to aesthetically driven landing pages and mobile-first web apps. Each case study details the challenges solved, tools leveraged  and performance impacts achieved, illustrating how I blend technical rigor with creative design to deliver exceptional user experiences."
        }
      />
      <div className="w-full max-w-5xl mx-auto">
        <Carousel
          opts={{
            align: "start",
          }}
        >
          <div className="px-8 py-2 flex justify-between">
            <CarouselContent>
              {projects.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center w-220 ">
                        <div className="flex flex-col items-center">
                          <img
                            src={item.image}
                            className="object-contain rounded-t-lg shadow"
                          />
                          <div className="text-lg md:text-xl text-[#C2B067] text-center py-2 font-semibold">
                            {item.title}
                          </div>
                          <div className="text-xs md:text-sm font text-gray-400 px-2 pb-2 text-center">
                            {item.des}
                          </div>
                          <div className="py-2">
                            <button
                              onClick={() => handleNavigate(item)} // Ensure this calls the function correctly
                              className="bg-[#EFBF04] rounded-full text-black py-2 px-4 hover:bg-[#00674F] shadow-md"
                            >
                              Explore more
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
          <CarouselPrevious className="bg-[#00674F] text-white z-50 left-0 top-1/2 -translate-y-1/2 absolute" />
          <CarouselNext className="bg-[#00674F] text-white z-50 right-0 top-1/2 -translate-y-1/2 absolute" />
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselDemo;
