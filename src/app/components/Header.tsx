import React from "react";
import Image from "next/image";
import icon from "@/assets/images/Vector (7).svg";
import profile from "@/assets/images/Ellipse 26.svg";
import { BsChevronDown } from "react-icons/bs";

const Header = () => {
  return (
    <section className="sticky z-50 top-0 w-full h-32 pt-5 px-5 shadow-md font-primary bg-white">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Image src={icon} alt="icon" />
          <h2 className="my-auto text-3xl font-extrabold">
            Hakim<span className="text-red-600">Hub</span>
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center lg:flex-row gap-2">
          <Image src={profile} alt="profile image" />
          <div className="flex gap-2">
            <p className="hidden sm:block my-auto lg:text-lg font-extralight">
              Jonathan Alemayehu
            </p>
            <span className="my-auto">
              <BsChevronDown />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
