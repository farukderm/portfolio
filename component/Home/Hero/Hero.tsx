"use client";
import { BaseInfo } from "@/Data/data";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* content */}

          <div>
            <h1 className="font-extrabold bg-gradient-to-bl bg-clip-text from-blue-500 to-purple-700">
              <span className="m-4 text-6xl text-transparent">
                I am
              </span>
            </h1>
            <div className="text-white text-3xl ">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Faruk",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Frontend Developer",
                  1000,
                  "Backend Developer",
                  1000,
                  "Fullstack Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "2em",
                  display:
                    "inline-block",
                }}
                repeat={Infinity}
              />
            </div>

            {/* description */}

            <p className="text-white text-2xl mt-6 opacity-70">
              {BaseInfo.description}
            </p>

            {/* button */}
            <button
              className="md:px-8 md:py-2.5 text-white font-semibold 
            text-sm md:text-lg transition-all duration-200 rounded-lg mt-8
             bg-blue-700 hover:bg-blue-900 flex items-center"
            >
              Download CV
              <span className="mx-1 px-3">
                <FaDownload className="text-gray-300" />
              </span>
            </button>
          </div>

          {/* image */}
          <div className="mx-auto hidden lg:block rounded-md border-2 border-blue-950 p-2">
            <Image
              src="/hero.jpg"
              alt="profile"
              width={800}
              height={800}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
