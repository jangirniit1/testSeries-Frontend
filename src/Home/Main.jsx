import React from "react";
import Banner from "./Banner";
import ExamCourses from "./ExamCourses";
import TestSeries from "./TestSeries";
import Swiper from "./SwiperSection";
import DownloadSection from "./DownloadSection";
import "../index.css";
import "../App.css";

function Main({ isLoggedIn }) {
  return (
    <>
      <Banner />
      <ExamCourses />
      <TestSeries isLoggedIn={isLoggedIn} />
      <Swiper />
      {!isLoggedIn && <DownloadSection />}
    </>
  );
}

export default Main;
