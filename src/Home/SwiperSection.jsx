import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";

const students = [
  {
    image: "images/student1.webp",
    name: "John",
    post: "SSC CGL 2021",
    message:
      "This institute provides best test series by which my practice got a new way of vision.",
  },
  {
    image: "images/student2.webp",
    name: "Michael",
    post: "SSC CPO SI 2019",
    message:
      "This institute provides best test series by which my practice got a new way of vision.",
  },
  {
    image: "images/student3.jpg",
    name: "Mathew",
    post: "SSC GD 2022",
    message:
      "This institute provides best test series by which my practice got a new way of vision.",
  },
  {
    image: "images/student4.jpg",
    name: "Abrahim",
    post: "RPF SI 2016",
    message:
      "This institute provides best test series by which my practice got a new way of vision.",
  },
  {
    image: "images/student5.jpg",
    name: "Massey",
    post: "SBI PO 2020",
    message:
      "This institute provides best test series by which my practice got a new way of vision.",
  },
  {
    image: "images/student6.jpg",
    name: "Josheph",
    post: "IBPS Clerk 2018",
    message:
      "This institute provides best test series by which my practice got a new way of vision.",
  },
];

function SwiperSection() {
  return (
    <>
      <div className="mx-70">
        <IconButton
          className="absolute left-[-7rem] top-[15rem] transform -translate-y-1/2 z-10 bg-white shadow-md"
          id="prevBtn"
        >
          <ArrowBackIos />
        </IconButton>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          navigation={{
            nextEl: "#nextBtn",
            prevEl: "#prevBtn",
          }}
          modules={[Navigation]}
          className="mySwiper h-auto mx-10"
        >
          {students.map((item) => (
            <div key={item.value}>
              <SwiperSlide className="border-2 rounded">
                <div className="p-10 leading-8">
                  <div className="max-w-40 h-40 rounded-full border-2 mx-auto">
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <h2 className="text-3xl font-semibold text-center">
                    {item.name}
                  </h2>
                  <h3 className="text-xl">{item.post} </h3>
                  <p className="leading-6">{item.message}</p>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>

        <IconButton
          className="absolute right-[-64rem] top-[-13rem] transform -translate-y-1/2 z-10 bg-white shadow-md"
          id="nextBtn"
        >
          <ArrowForwardIos />
        </IconButton>
      </div>
    </>
  );
}

export default SwiperSection;
