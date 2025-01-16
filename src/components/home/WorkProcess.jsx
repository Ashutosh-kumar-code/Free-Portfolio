import React from "react";
import Container from "../common/Container";
import image1 from "../../assets/images/developing.jpg"
import imag2 from "../../assets/images/launch.jpg"
import image3 from "../../assets/images/reasearch.jpg"

import image4 from "../../assets/images/StrategyPlanning.jpg"


const WorkProcess = () => {
  return (
    <div className="bg-[#F0F1F3] ">
      <Container>
        <div className="mt-[50px] ">
          <div className="grid grid-cols-1  xl:grid-cols-2  xl:gap-20 lg:flex-row lg:pt-5  ">
            <div className="flex flex-col  justify-center ">
              <h1 className="text-3xl mb-[24px] pt-6 font-bold text-[#132238] text-center leading-9 sm:text-4xl xl:text-start  lg:text-[42px]">
                Work  <span className="text-[#A53DFF]">Process</span>
              </h1>
              <p className="text-base text-[#556070] text-center  lg:text-[17px] xl:text-start ">
              From discovery to deployment, we follow a streamlined process that ensures excellence at every step. It begins with understanding your vision through in-depth consultation, followed by creating stunning designs and prototypes that capture your goals. 
                <br></br> 
                <div className="mt-3">rigorous testing and optimization ensure a flawless launch. Every project concludes with comprehensive support to keep your digital solution running smoothly.</div>
              </p>
            </div>
            <div className="py-10 lg:py-14 xl:py-20">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="  ">
                  <div className="workprocess_card1">
                    <img src={image3} alt="" />
                    <h3>1. Research</h3>
                    <p>
                    We dive deep into your business needs and market analysis to understand project goals. Establish clear objectives requirements
                    </p>
                  </div>
                </div>
                <div className="  ">
                  <div className="workprocess_card1">
                    <img src={image4} alt="" />
                    <h3>1. Strategy & Planning</h3>
                    <p>
                    Developing  project roadmaps and wireframes based on research insights, create detailed timelines ,choose the right technologies.
                    </p>
                  </div>
                </div>
                <div className="  ">
                  <div className="workprocess_card1">
                    <img src={image1} alt="" />
                    <h3>1. Development</h3>
                    <p>
                    Bringing designs with clean, efficient code. Our development process focuses on creating responsive  with regular testing and updates
                    </p>
                  </div>
                </div>

                <div className="  ">
                  <div className="workprocess_card1">
                    <img src={imag2} alt="" />
                    <h3>4. Launch & Support</h3>
                    <p>
                    Thorough testing and optimization ensure your project launches flawlessly and performs at peak efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WorkProcess;
