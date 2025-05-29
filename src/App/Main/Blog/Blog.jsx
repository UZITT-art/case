import React from "react";
import ComponentCard from "../../common/ComponentCard/ComponentCard";
import BlogCard from "./BlogCard";
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";

function Blog() {
  return (
    <div id="blog">
      <div className=" sm:px-10">
        <ComponentCard
          title={"Blog"}
          description={
            "I turn designs into fast, accessible React apps—building reusable components with TypeScript, optimizing load times through code-splitting, and ensuring pixel-perfect, responsive layouts. I partner with designers and back-end teams to deliver seamless, user-focused experiences backed by best practices in testing and maintainability."
          }
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  md:px-40 md:py-12 sm:mx-4  ">
        <BlogCard
          title={" Optimizing React Performance"}
          discription={
            "Learn essential techniques to enhance your React app's performance, from code splitting to memoization, ensuring a smoother user experience."
          }
          img={img1}
        />
        <BlogCard
          title={"Leveraging React Hooks "}
          discription={
            "Discover how React Hooks simplify state and lifecycle management, making your code more readable and maintainable while enhancing component functionality."
          }
          img={img2}
        />
        <BlogCard
          title={"State Management in React"}
          discription={
            "Explore various state management solutions for React, including Context API, Redux, and Zustand, to find the best fit for your project."
          }
          img={img3}
        />
      </div>
    </div>
  );
}

export default Blog;
