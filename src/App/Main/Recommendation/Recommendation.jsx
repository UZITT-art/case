import React from "react";
import ComponentCard from "../../common/ComponentCard/ComponentCard";
import RecommendationCard from "./RecommendationCard";

import yoh from "../../../assets/yoh.jpg";

import nati from "../../../assets/nati.jpg";
import edu from "../../../assets/edu.jpg";

function Recommendation() {
  return (
    <>
      <ComponentCard
        title={"Testimonial"}
        description={
          "Working with this agency was a game-changer for my brand. Their exceptional creativity and attention to detail transformed my vision into stunning visuals that truly resonate with my audience. The team's professionalism and dedication ensured the project was completed on time, and I’ve seen remarkable engagement since the launch. I wholeheartedly recommend their services to anyone looking to elevate their brand!"
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4  sm:gap-6 md:px-40 md:py-12 sm:mx-4">
        <RecommendationCard
          title={"Exceptional Creativity"}
          discribtion={
            "The collaboration with this agency was seamless. Their exceptional creativity and understanding of our vision allowed them to deliver a product that not only met our needs but also wowed our audience. The project was completed on time and within budget, and we couldn't be happier with the results. Highly recommend their services to anyone looking to elevate their brand!"
          }
          name={"Natnael Mekete"}
          role={"Graphic Designer"}
          img={nati}
        />
        <RecommendationCard
          title={"Outstanding Results "}
          discribtion={
            "I was thoroughly impressed with the work produced by this team. They went above and beyond to understand our objectives and delivered outstanding results. The project gallery they've created has received rave reviews from our stakeholders, and it has significantly improved our online presence. Their professionalism and dedication are unmatched!"
          }
          name={"Nikodimoas Haile"}
          role={"Content Creator"}
          img={yoh}
        />
        <RecommendationCard
          title={"Transformative Experience"}
          discribtion={
            "Working with this team was a transformative experience for our brand. They took our initial ideas and turned them into a stunning visual identity that truly reflects our mission. The attention to detail and creativity they brought to our project exceeded our expectations. Our clients have noticed the difference"
          }
          name={"Samrawit Mulaw"}
          role={"Front-End developer"}
          img={edu}
        />
      </div>
    </>
  );
}

export default Recommendation;
