"use client";
import React from "react";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
              {" "}
              Hello I'm {""}
              <br />
            </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Zach",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Web Developer",
                1000,
                "probably learning right now",
                1000,
              ]}
              wrapper="span"
              speed={50}
              //   style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#fff] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            eum voluptates dignissimos nam, sint autem! Cumque ex nostrum
            corrupti, quo, nulla soluta error minus repellendus, inventore
            accusantium aliquid eius. Nemo.
          </p>
          {/* <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-200 via-slate-50 to-red-400 hover:bg-slate-200 text-black">
              Hire me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 via-slate-100 to-black bg-black hover:bg-slate-950 text-black border border-white mt-3">
              <span className="block">Download CV</span>
            </button>
          </div> */}
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#222] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/profile.png"
              alt="profile"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
