import React from "react";
import SocialMedia from "../components/SocialMedia";

export default function HomePage() {
  return (
    <div className="bg-white max-w-full min-h-screen flex overflow-y-auto overscroll-y-contain">
      <div className="flex">
        <div className="relative min-w-[300px] md:min-w-[400px] lg:min-w-[571px]">
          <div className="relative left-[0px] bg-thistle w-full h-screen" />
        </div>
        <div className="absolute left-[0px] flex justify-center">
          <div className="relative top-[80px] left-[20px] md:left-[161.5px] lg:left-[261.5px] bg-linen min-w-[375px] shadow-[-11.3px_11.3px_17px_rgba(138,_131,_124,_0.23)] h-[562px] overflow-hidden shrink-0">
            <div className="flex flex-col my-10 items-center">
              <div className="h-48 w-48 rounded-full bg-transparent">
                <img
                  className="h-48 w-48 rounded-full"
                  alt=""
                  src="/div-mgogm2@2x.png"
                />
              </div>
              <div className="mt-12 px-20 flex w-5 flex-wrap justify-center">
                <span className="text-2xl font-syne text-center">
                  Lisandra Peña Chaviano
                </span>
              </div>
              <hr className="mt-8 w-14 border-0 border-b-2 border-firebrick"></hr>
              <div className="mt-8 flex justify-center">
                <span className="tracking-[4.25px] leading-[23.8px] text-md items-center font-questrial">
                  Software Developer
                </span>
              </div>
              <div className="mt-12 h-12 items-center flex justify-center bg-white w-full">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[150px] left-[420px] md:left-[570px] lg:left-[670px] flex flex-grow z-10 flex-col py-7 sm:w-70 lg:w-96 pr-6">
        <div className="flex">
          <span className="font-syne text-6xl">HELLO</span>
        </div>
        <div className="flex flex-wrap mt-5">
          <span className="font-syne text-2xl">
            I am a Software Developer specialising in front-end, and I care for
            creating efficient and clean solutions for customers.
          </span>
        </div>
        <div className="flex flex-wrap mt-10 gap-x-12 gap-y-4">
          <button className="font-questrial hover:bg-white hover:text-firebrick hover:border-firebrick font-bold text-white bg-firebrick border-2 border-transparent hover:cursor-pointer rounded-full py-2 px-4">
            PORTFOLIO
          </button>
          <button className="font-questrial hover:bg-firebrick hover:text-white hover:border-transparent font-bold text-black bg-white border-2 border-black hover:cursor-pointer rounded-full py-2 px-4">
            CONTACT ME
          </button>
        </div>

        <div className="flex flex-wrap mt-10">
          <p className="font-questrial text-mid mt-0 leading-[25.5px]">
            As a Frontend Developer I care for building intuitive user
            interfaces. I deliver efficient web applications by following best
            practices and industry standards, paying attention to detail, and
            ensuring code quality. I focus on smooth and clear coordination to
            define requirements and meet customers' needs.
          </p>
        </div>
      </div>
    </div>
  );
}
