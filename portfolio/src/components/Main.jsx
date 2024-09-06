import React from "react";
import pic from "/src/assets/or.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="flex flex-col items-center">
      <img src={pic} alt="/" className="" />

      <div className=" flex flex-col justify-center items-center">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-[#001b5e]">I’m Kit Phung</h1>
          <h2 className="flex items-center sm::text-3xl text-2xl pt-4 text-[#001b5e]">
            I’m a
            <TypeAnimation
              sequence={[
                "Software Developer",
                2000,
                "Coder",
                2000,
                "Tech interested",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://www.facebook.com/"><FaFacebookF className="cursor-pointer" size={20} /></a>
            <a href="https://www.instagram.com/"><FaInstagram className="cursor-pointer" size={20} /></a>
            <a href="https://www.linkedin.com/in/kit-phung/"><FaLinkedinIn className="cursor-pointer" size={20} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
