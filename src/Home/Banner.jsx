import React from "react";

function Banner() {
  return (
    <>
      <div className="container">
        <div
          className="h-[calc(100vh-88px)] bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `linear-gradient(rgb(11 9 203 / 50%), rgb(0 130 255 / 30%)), url(/images/bannerBgImg.jpg)`,
          }}
        >
          <div className="flex justify-between ">
            <div className="ps-40 my-auto text-white w-[40%]">
              <h1 className="text-5xl font-medium ">Students first choice Online Test Series platform</h1>
              <p className="text-3xl mt-5" >
                Boost your exam preparation with exam grid for SSC, Railway,
                Banking, etc.
              </p>
              <p className="text-xl">We provide you the best of our faculty team.</p>
            </div>
            <div className="h-[calc(100vh-88px)] w-[35%]">
              <img src="images/bannerImg.jpeg" alt="" className="h-full w-full " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
