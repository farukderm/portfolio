import { aboutInfo } from "@/Data/data";

import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import SectionHeading from "@/component/Helper/SectionHeading";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>
        About Me
      </SectionHeading>

      <div
        className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8
      items-center mt-20"
      >
        {/* text Content */}
        <div>
          <h1 className="text-gray-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-gray-500">
            {aboutInfo.description}
          </p>

          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Frontend Development
              </p>
            </div>

            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-red-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Backend Development
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-green-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Fullstack Development
              </p>
            </div>
          </div>
        </div>
        {/* stats Content */}
        <div className="grid grid-cols-2 gap-16 items-center lg:mx-auto ">
          <div className="">
            <Image
              src="/img/about/customer.webp"
              alt="image1"
              width={100}
              height={100}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-white text-center">
              {aboutInfo.client}
            </p>
            <p className="text-base sm:text-lg text-gray-200">
              Satisfied Customers
            </p>
          </div>
          <div className="">
            <Image
              src="/img/about/experience.webp"
              alt="image1"
              width={100}
              height={100}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-white text-center">
              {aboutInfo.experince}
            </p>
            <p className="text-base sm:text-lg text-gray-200">
              Years Experince
            </p>
          </div>
          <div className="">
            <Image
              src="/img/about/completed.webp"
              alt="image1"
              width={100}
              height={100}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-white text-center">
              {aboutInfo.client}
            </p>
            <p className="text-base sm:text-lg text-gray-200">
              Completed Project
            </p>
          </div>
          <div className="">
            <Image
              src="/img/about/rocket.webp"
              alt="image1"
              width={100}
              height={100}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-white text-center">
              {aboutInfo.client}
            </p>
            <p className="text-base sm:text-lg text-gray-200">
              Website Launched
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
