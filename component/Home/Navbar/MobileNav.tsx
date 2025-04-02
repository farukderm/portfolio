import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

//props type
type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({
  closeNav,
  showNav,
}: Props) => {
  const navOpen = showNav
    ? "translate-x-0"
    : "translate-[-100%]";
  return (
    <div>
      {/* overlay */}

      <div
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen `}
      ></div>

      {/* nav links */}
      <div
        className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed  text-center ml-12 justify-center flex flex-col h-full w-[80%] wm:w-[60%] bg-[#0f0713] space-x-6 z-[10000]`}
      >
        {navLinks.map((navlink) => {
          return (
            <Link
              key={navlink.id}
              href={navlink.url}
            >
              <p className="text-2xl text-gray-400 hover:text-yellow-500  transition  hover:border-2 p-3">
                {navlink.label}
              </p>
            </Link>
          );
        })}
        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white hover:text-red-500 hover:scale-125"
        />
      </div>
    </div>
  );
};

export default MobileNav;
