import React from "react";
import HeroPic from "../../media/Illustration.png";
import Button from "../../component/button/Button";

const FirstSection = () => {
  return (
    <div className="w-full h-[40vh] mt-16 relative">
      {/* BACKGROUND */}
      <div className="absolute w-full h-full bg-[#F5F7FA]"></div>

      {/* HERO_CONTENT */}
      <div className="w-full h-full flex justify-center items-center absolute top-0 left-0">
        {/* LEFT DIV */}
        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="flex flex-col justify-center items-start space-y-4">
            <h1 className="text-5xl font-semibold text-[#4D4D4D]">
              Lessons and insights
            </h1>
            <h1 className="text-5xl font-semibold text-[#388E3B]">
              from 8 years{" "}
            </h1>
            <p className="text-xs text-gray-500">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <Button title={"Register"} />
          </div>
        </div>
        {/* RIGHT DIV */}
        <div className="w-1/2 h-full flex justify-center items-center ">
          <div className=" w-[272px] h-[282px]">
            <img src={HeroPic} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
