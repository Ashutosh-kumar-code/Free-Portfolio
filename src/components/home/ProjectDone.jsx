import React from "react";
import Container from "../common/Container";
import "./project.css";
import image1 from "../../assets/images/project.png";
import { MoveRight } from "lucide-react";
import Button from "../ui/Button";
import supply_web1 from "../../assets/images/supply2.png";
import deal_web1 from "../../assets/images/deal1.png";
import lms_web1 from "../../assets/images/lms1.png";
import desert_web1 from "../../assets/images/desert2.png";
import homeizon_web1 from "../../assets/images/homeizon1.png";

const ProjectDone = ({refs}) => {
  
  const data = [
    {
      skill: "Web Developer",
      web_image: supply_web1,
      topic_name: "SupplyArabia",
      description: "In SupplyArabia, its leading the charge in revolutionizing the online marketplace exclusively dedicated to the supply of raw materials to the Middle East and Arabic-speaking countries."
    }, {
      skill: "",
      web_image: lms_web1,
      topic_name: "Video LMS",
      description: "Video LMS is an educational platform designed to deliver video-based learning content.Video LMS aims to enhance digital learning experiences for both instructors and students."
    }, {
      skill: "",
      web_image: deal_web1,
      topic_name: "DeaLin",
      description: "DealIn is a platform designed for users to buy and sell properties, vehicles, and a variety of products. It provides a marketplace where individuals and businesses can list their items for sale, and buyers can browse and filter through listings to find what they need."
    }, {
      skill: "",
      web_image: desert_web1,
      topic_name: "DesertGate",
      description: "This projects is to provide peoples the facilities to book their destination tours. Also it includes hotel booking and city tours."
    }, {
      skill: "",
      web_image: homeizon_web1,
      topic_name: "Homeizon",
      description: "This projects is a real estate project, here people get the facilities to buy or sell properties , pg hostels and houses on rent. This also have a option to buy furnitures."
    }
  ];

  return (
    <Container>
      <div ref={refs.ourProjects} id="ourProjects" className="project_done_byme  ">
        <div className="">
          <h1 className="text-3xl mt-10  font-bold text-[#132238] text-center leading-9  sm:text-4xl sm:mt-14 lg:mt-20  lg:text-center lg:text-[42px]">
            Our <span className="text-[#A53DFF]">Projects</span> 
          </h1>
          <p className="text-base pt-4  text-[#87909D] text-center lg:text-center lg:text-[17px] ">
          Showcasing innovative solutions and transformative ideas through our diverse projects.
          </p>
          <div className=" ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px] py-10 xl:py-16 xl:px-12 ">
              {data.map((value, i) => {
                return (
                  <div className=" ">
                    <div className="activity_newcard1  ">
                      <div
                        class="activity_cardimg"
                        style={{
                          backgroundImage: `url(${value.web_image})`,
                        }}
                      ></div>
                      <div className="cart_cont">
                        {/* <h6>{value.skill} </h6> */}

                        <h4>{value.topic_name}</h4>
                        <p className="h-[115px]">
                     {value.description}
                        </p>

                        <button>
                         see Case Study <MoveRight />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProjectDone;
