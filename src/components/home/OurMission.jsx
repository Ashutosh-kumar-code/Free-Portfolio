import React from "react";
import Container from "../common/Container";

const Chooseus = [
  {
    id: 1,
    title: "Diverse Expertise",
    description:
      "We specialize in providing exceptional freelance services that cater to your specific needs and preferences.",
  },
  {
    id: 2,
    title: "Quality Assurance:",
    description:
      "We are committed to delivering high-quality work that meets industry standards and client expectations",
  },

  {
    id: 4,
    title: "Effective Communication",
    description:
      "We prioritize clear and open communication, ensuring that our clients are involved and informed at every stage of the project.",
  },

  {
    id: 5,
    title: "Customized Solutions",
    description:
      "We understand that every client has unique needs, and we tailor our services to provide the most effective solutions",
  },
];
const OurMission = ({refs}) => {
  return (
    <div className="bg-[#F0F1F3] ">
      <Container>
        <div ref={refs.ourMission} id="ourMission" className="pb-10">
          <div className="flex justify-center items-center">
            <div className="flex flex-col gap-4 justify-center items-center">
              <h1 className=" text-4xl font-bold text-[#333333] xl:text-[42px] xl:py-6 pt-6 lg:pt-10">
                {" "}
                Our <span className="text-[#A53DFF]"> Mission </span>{" "}
              </h1>
              <p className="text-center text-base xl:text-lg ">
                Our mission is to transform businesses through innovative
                digital solutions, delivering exceptional value that drives
                growth and success. We combine technical expertise with creative
                problem-solving to create impactful solutions that exceed client
                expectations and help them thrive in the digital landscape
              </p>
            </div>
          </div>
          <div className="py-10">
            <h1 className="text-center text-[#333333] text-4xl font-bold pb-8 lg:pb-14 xl:text-[42px]">
              {" "}
              Why <span className="text-[#A53DFF]">Choose Us? </span>
            </h1>
            <div className="grid gird-cols-2 gap-6  xl:grid-cols-2">
              {Chooseus.map((item, index) => (
                <div className="  rounded-lg bg-white shadow-lg py-3 px-4 hover:ring-1 hover:ring-[#A53DFF]">
                  <h2 className="text-xl text-[#A53DFF] pb-3 font-semibold sm:text-2xl">
                    {item.title}{" "}
                  </h2>
                  <p className="text-base text-[#424E60]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurMission;
