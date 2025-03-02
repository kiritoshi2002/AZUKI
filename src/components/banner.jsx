import React from "react";

function Banner() {
  return (
    <div className="bg-black   px-3 py-3">
      <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 relative bg-[url('./assets/images/here.jpg')] bg-cover bg-no-repeat pt-20">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="w-full lg:w-2/3 space-y-5 relative p-10 z-10">
          <h1 className="text-white font-semibold text-6xl">
            Azuki Restaurant Where Health is Served
          </h1>
          <p className="text-white">
            Discover the art of Japanese cuisine at Azuki Restaurant, where
            every dish is a perfect balance of tradition and innovation. From
            fresh sushi to savory ramen, each bite is crafted to take your taste
            buds on a journey.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Banner;
