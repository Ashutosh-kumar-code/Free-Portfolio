import React from "react";
import Container from "../common/Container";
import image1 from "../../assets/images/developing.jpg";
import imag2 from "../../assets/images/launch.jpg";
import image3 from "../../assets/images/reasearch.jpg";
import image4 from "../../assets/images/StrategyPlanning.jpg";

const steps = [
  { img: image3, title: "1. Research", desc: "We dive deep into your business needs and market analysis to understand project goals. Establish clear objectives requirements" },
  { img: image4, title: "2. Strategy & Planning", desc: "Developing project roadmaps and wireframes based on research insights, create detailed timelines, choose the right technologies." },
  { img: image1, title: "3. Development", desc: "Bringing designs with clean, efficient code. Our development process focuses on creating responsive solutions with regular testing and updates." },
  { img: imag2, title: "4. Launch & Support", desc: "Thorough testing and optimization ensure your project launches flawlessly and performs at peak efficiency." },
];

const WorkProcess = () => {
  return (
    <div className="bg-[#F0F1F3]">
      <Container>
        <div className="mt-[50px]">
          <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-20 lg:flex-row lg:pt-5">
            <div className="flex flex-col justify-center reveal-left">
              <h1 className="text-3xl mb-[24px] pt-6 font-bold text-[#132238] text-center leading-9 sm:text-4xl xl:text-start lg:text-[42px]">
                Work <span className="text-[#A53DFF]">Process</span>
              </h1>
              <p className="text-base text-[#556070] text-center lg:text-[17px] xl:text-start">
                From discovery to deployment, we follow a streamlined process that ensures excellence at every step. It begins with understanding your vision through in-depth consultation, followed by creating stunning designs and prototypes that capture your goals.
                <br />
                <span className="mt-3 block">Rigorous testing and optimization ensure a flawless launch. Every project concludes with comprehensive support to keep your digital solution running smoothly.</span>
              </p>
            </div>

            <div className="py-10 lg:py-14 xl:py-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {steps.map((step, i) => (
                  <div key={i} className={`reveal delay-${(i + 1) * 100}`}>
                    <div className="workprocess_card1 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(165,61,255,0.2)] transition-all duration-300">
                      <img src={step.img} alt="" />
                      <h3>{step.title}</h3>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WorkProcess;
