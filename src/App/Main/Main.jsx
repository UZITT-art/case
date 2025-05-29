import React from "react";
import HeroTitle from "./Hero/HeroTitle";
import Recommendation from "./Recommendation/Recommendation";
import RecommendationCard from "./Recommendation/RecommendationCard";
import Blog from "./Blog/Blog";
import ContactInfo from "./ContactInfo/ContactInfo";
import CarouselDemo from "./carousel/CarouselDemo";

function Main() {
  return (
    <div>
      <HeroTitle />
      <CarouselDemo />
      <Recommendation />
      <Blog />
      <ContactInfo />
    </div>
  );
}

export default Main;
