import React from "react";
import Main from "./Main/Main";
import Footer from "./Fotter/Footer";
import Header from "./Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "./Main/Detail-projects/Detail";

const Landing = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <div className="w-full flex flex-row bg-gray-50 gap-2  ">
                <div className="w-full mt-0  ">
                  <Main />
                </div>
              </div>
            }
            path="/"
          />
          <Route path="detail" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default Landing;
