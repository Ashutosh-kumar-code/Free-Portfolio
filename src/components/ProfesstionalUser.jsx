import React, { useState } from "react";
import Container from "./common/Container";
import profestionaluser from "../assets/images/port-imag10.jpg";
import Button from "./ui/Button";
import ButtonBox from "./ui/ButtonBox";
import download from "../assets/svg/download.svg";
import facebook from "../assets/svg/facebook.svg";
import ball from "../assets/svg/ball.svg";
import instagram from "../assets/svg/instagram.svg";
import linkdin from "../assets/svg/linkdin.svg";
import be from "../assets/svg/be.svg";

import { BiDownload } from "react-icons/bi";

import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Images = [
  {
    image: FaFacebookF,
    name: "facebook",
    link: "https://www.facebook.com/share/1BrSxKt3U6/",
  },
  // { image: FaLinkedinIn, name: "linkedin" ,Link: 'https://www.linkedin.com/in'},
  {
    image: BsInstagram,
    name: "instagram",
    link: "https://www.instagram.com/debug_and_grow",
  },
  // { image: linkdin, name: "linkdin" },
  // { image: be, name: "be" },
];

const ProfesstionalUser = ({ scrollToSection, refs }) => {
  // const [socialmedian, setSocialmedian] = useState("");

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/public/ashu-resm.pdf";
    link.download = "Zenith-Freelancers.pdf";
    link.click();
  };

  return (
    <div
      ref={refs.aboutusRef}
      id="aboutusRef"
      className="grid grid-cols-1 lg:grid-cols-2  px-3 sm:mx-10 xl:mx-20 lg:flex-row lg:p-10 xl:px-20  border bg-white shadow rounded-2xl lg:gap-20"
    >
      <div clas>
        <div className="flex justify-center items-center pt-5 rounded-xl  ">
          <img
            src={profestionaluser}
            alt=""
            className="sm:p-6 lg:p-0 rounded-xl sm:"
          />
        </div>
        <div className="flex justify-center  items-center -mt-4 sm:-mt-12 lg:mr-50  lg:-mt-6">
          <div className="border flex gap-2  shadow-lg rounded-md bg-white  px-1 py-1">
            {Images.map((item, index) => (
              <div
                className={`aboutus_socialicons flex justify-center items-center rounded-sm bg-none
                 w-9 h-9  sm:w-10 sm:h-10`}
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <item.image />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-3xl  font-bold text-[#132238] text-center leading-9 pt-7 sm:text-4xl  sm:mt-8  lg:text-start lg:text-[38px] lg:pt-0 lg:mt-4">
            I am Professional Experience Developer
          </h1>
          <p className="text-base py-8 text-[#556070] text-center lg:text-start lg:text-[17px]">
            As a versatile web professional, I specialize in creating sleek,
            innovative websites, dynamic web services, and high-converting
            online stores.I design seamless, intuitive interfaces and robust
            back-end systems.
            <br></br>
            <div className="mt-3 hidden xl:block">
              I combine creativity and cutting-edge technology to deliver
              stunning, high-performance solutions that captivate users and
              drive results. Let’s turn your vision into a standout online
              presence.
            </div>
          </p>
          <div className="flex  gap-2 justify-center items-center pb-4 lg:justify-start lg:items-start">
            <Button
              text={"My Projects"}
              onClick={() => scrollToSection(refs.ourProjects)}
            />

            {/* <button
              onClick={() => handleDownload()}
              className={`px-4 flex   gap-2 py-2 text-base font-semibold border border-[#A53DFF] text-[#A53DFF] rounded hover:bg-purple-700 hover:text-white transition duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed `}
            >
              <BiDownload style={{ height: "24px", width: "24px" }} /> Download
              CV
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfesstionalUser;
