import React from "react";

function DownloadSection() {
  return (
    <>
      <div className="flex items-center my-10 mx-40 bg-linear-to-r from-pink-50 to-orange-50 px-10 pt-10 rounded-xl gap-16">
        <div className="w-[50%] ">
          <h2 className="text-4xl font-semibold leading-10">
            Start Your Preparation with Prepp Mobile App
          </h2>
          <p className="mt-5">Download the app from Google Play & App Store</p>
          <div className="flex gap-5 mt-3">
            <div className="h-10 w-30">
              <img
                src="images/playStore.avif"
                alt=""
                className="h-full w-full object-contain cursor-pointer"
              />
            </div>
            <div className="h-10 w-30">
              <img
                src="images/appStore.avif"
                alt=""
                className="h-full w-full object-contain cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="w-[50%] ">
          <img
            src="images/appRefer.webp"
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </>
  );
}

export default DownloadSection;
