import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import {FiFacebook, FiLinkedin, FiInstagram, FiTwitter} from "react-icons/fi"


const Footer = () => {
  return (
    <section className="bg-[#7879F1] w-full text-white flex flex-col px-10 font-primary">
      <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr] lg:grid-cols-[4fr_1fr_1fr_1fr] py-14 font-light">
        <p className="text-2xl font-bold">HakimHub</p>
        <ul className="flex flex-col gap-2 list-none ">
          <li className="font-bold py-3">Get Connected</li>
          <li className="flex gap-2">
            <AiOutlineRight /> For Physicians
          </li>
          <li className="flex gap-2">
            <AiOutlineRight /> For Hospitals
          </li>
        </ul>
        <ul className="flex flex-col gap-2 list-none">
          <li className="font-bold py-3">Actions</li>
          <li className="flex gap-2">
            <AiOutlineRight /> Find a doctor
          </li>
          <li className="flex gap-2">
            <AiOutlineRight /> Find a hospital
          </li>
        </ul>
        <ul className="flex flex-col gap-2 list-none">
          <li className="font-bold py-3">Company</li>
          <li className="flex gap-2">
            <AiOutlineRight /> About Us
          </li>
          <li className="flex gap-2">
            <AiOutlineRight /> Career
          </li>
          <li className="flex gap-2">
            <AiOutlineRight /> Join our team
          </li>
        </ul>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between gap-8 px-24 py-10 lg:py-4 border-t-2 border-slate-50 items-center">
        <div className="flex gap-10 lg:gap-20">
          <p className="w-32">Privacy Policy</p>
          <p className="w-32">Terms of Use</p>
        </div>
        <ul className="flex list-none gap-8 text-2xl">
          <li><FiFacebook/></li>
          <li><FiLinkedin/></li>
          <li><FiInstagram/></li>
          <li><FiTwitter/></li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
