import React from "react";
import cv from "../assets/cv .pdf";
import Certificate from "../assets/Coursera.pdf";

const Resume = () => {
  const openCv = () => {
    window.open(cv, "_blank");
  };

  const openCertificate = () => {
    window.open(Certificate, "_blank");
  };

  return (
    <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl text-center font-bold text-[#001b5e]">
        Resume
      </h1>
      <div className="grid md:grid-cols-2 gap-10 py-8 w-full   ">
        <button
          onClick={openCv}
          className="bg-[#001b5e] text-gray-100 rounded-lg p-3 text-center "
        >
          Cv
        </button>
        <button onClick={openCertificate} className="bg-[#001b5e] text-gray-100 rounded-lg p-3 text-center  ">
          Certificate
        </button>
      </div>
    </div>
  );
};

export default Resume;
