import React from "react";
import Container from "../common/Container";
import person from "../../assets/images/port-imag4.jpg";
import Button from "../ui/Button";
import ProfesstionalUser from "../ProfesstionalUser";

const HeroSection = ({ scrollToSection, refs }) => {
  return (
    <Container>
      <div className="lg:flex lg:flex-row-reverse gap-10 lg:justify-center lg:items-center pb-10 lg:pb-16 xl:pb-0 xl:justify-between lg:py-0">
        <div className="xl:w-[50%]">
          <img
            src={person}
            alt=""
            className="w-full object-cover lg:ml-10 "
          />
        </div>
        <div className="">
          <div className=" ">
            <h1 className="text-4xl  leading-10 font-bold text-[#132238] sm:text-[42px] text-center lg:text-start sm:leading-[55px] ">
              Hello i am ,<br></br>
              <span className="text-purple-600 ">Ashutosh Kumar</span>
            </h1>
            <p className="py-6 sm:text-[18px] text-center lg:text-start lg:w-[450px] xl:w-[550px] ">
              I’m a Freelance Full Stack Web Developer turning ideas into
              captivating digital experiences. With a blend of creativity and
              precision, I craft stunning web applications that are as
              functional as they are beautiful.
            </p>
           

            <div className="flex justify-center items-center lg:justify-start">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ashu2040kumar@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base lg:text-xl"
              >
                <Button text={"Get in Touch"} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3  gap-1 mt-7  sm:flex-row  lg:mt-14 xl:mt-24 ">
            <div className="bg-[#EDD8FF] gap-2 flex justify-center items-center flex-col py-4 rounded-md">
              <h1 className=" text-xl font-semibold text-[#424E60] sm:text-2xl">
                3+ Y.
              </h1>
              <p className="text-[#697484] text-sm sm:text-base">Experience</p>
            </div>
            <div className="bg-[#EDD8FF] gap-2 flex justify-center items-center flex-col py-4 rounded-md">
              <h1 className=" text-xl font-semibold text-[#424E60] sm:text-2xl">
                10+
              </h1>
              <p className="text-[#697484] text-sm">Completed</p>
            </div>
            <div className="bg-[#EDD8FF] gap-2 flex justify-center items-center flex-col py-4 rounded-md">
              <h1 className=" text-xl font-semibold text-[#424E60] sm:text-2xl">
                8+
              </h1>
              <p className="text-[#697484] text-sm">Happy Client</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ProfesstionalUser scrollToSection={scrollToSection} refs={refs} />
      </div>
    </Container>
  );
};

export default HeroSection;
