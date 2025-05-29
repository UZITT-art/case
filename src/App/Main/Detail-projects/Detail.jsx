import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects } from "../carousel/projects";
const DetailPage = () => {
  const location = useLocation();
  const { category } = location.state;
  const currentProject = projects.find((i) => i.slug == category);
  // const category = location.state.category;
  // console.log(location.state);
  console.log(currentProject);
  return (
    <div>
      <div className="w-full  max-w-5xl  mx-auto">
        <Carousel
          opts={{
            align: "start",
          }}
        >
          <div className="p-8 flex justify-between ">
            <CarouselContent>
              {currentProject.subList.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3   "
                >
                  <div className="p-1">
                    <Card className="">
                      <CardContent className="flex aspect-square items-center justify-center  w-220 p-6 ">
                        <div className=" flex flex-col items-center">
                          <img
                            src={item.image}
                            className="object-contain rounded-t-lg shadow"
                          />
                          <div className=" text-lg md:text-xl  text-[#C2B067] text-center pt-2 font-semibold">
                            {item.title}
                          </div>
                          <div className=" text-xs md:text-sm font text-gray-300 px-4 py-2">
                            {item.des}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
          <CarouselPrevious className="bg-[#00674F] text-white z-50 left-0 top-1/2 -translate-y-1/2 absolute " />
          <CarouselNext className="bg-[#00674F] text-white z-50 right-0 top-1/2 -translate-y-1/2 absolute " />
        </Carousel>
      </div>
    </div>
  );
};

export default DetailPage;
