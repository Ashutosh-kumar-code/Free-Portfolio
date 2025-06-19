import React from "react";
import { useNavigate, Link } from 'react-router-dom'

import Container from "../common/Container";
import "./project.css";

import { MoveRight } from "lucide-react";
// import Button from "../ui/Button";
import supply_web1 from "../../assets/images/supply2.png";
import deal_web1 from "../../assets/images/deal1.png";
import lms_web1 from "../../assets/images/lms1.png";
import desert_web1 from "../../assets/images/desert2.png";
// import homeizon_web1 from "../../assets/images/homeizon1.png";
// import budget_book from "../../assets/images/budget-book.jpeg";
import online_shop from "../../assets/images/online-shop.jpeg";
import admin_dashboard1 from "../../assets/images/admin_dash1.png";

const ProjectDone = ({ refs }) => {

  // const navigate = useNavigate()

  const data = [
    {
      skill: "Web Developer",
      web_image: supply_web1,
      topic_name: "SupplyArabia",
      description: "In SupplyArabia, its leading the charge in revolutionizing the online marketplace exclusively dedicated to the supply of raw materials to the Middle East and Arabic-speaking countries."
      , live_link: "https://supplyarabia.infosparkles.com/"
    },
    {
      skill: "Web Developer",
      web_image: online_shop,
      topic_name: "Online Grocery Shop",
      description: "This is an online grocery store designed to provide customers with a convenient and seamless shopping experience. It offers a wide range of fresh produce, dairy products, and household essentials delivered directly to your doorstep."
      , live_link: "https://grocery-onlineshop.netlify.app/"
    },
    {
      skill: "",
      web_image: lms_web1,
      topic_name: "Video LMS",
      description: "Video LMS is an educational platform designed to deliver video-based learning content.Video LMS aims to enhance digital learning experiences for both instructors and students."
      , live_link: "https://lms.infosparkles.com/"
    },
    {
      skill: "",
      web_image: deal_web1,
      topic_name: "DeaLin",
      description: "DealIn is a platform designed for users to buy and sell properties, vehicles, and a variety of products. It provides a marketplace where individuals and businesses can list their items for sale, and buyers can browse and filter through listings to find what they need."
      , live_link: "http://dealin.infosparkles.com/"
    }, {
      skill: "",
      web_image: desert_web1,
      topic_name: "DesertGate",
      description: "This projects is to provide peoples the facilities to book their destination tours. Also it includes hotel booking and city tours."
      , live_link: "https://desert2.infosparkles.com/"
    },
     {
      skill: "Reactjs + Vite",
      web_image: admin_dashboard1,
      topic_name: "Admin Dashboard",
      description: "Fully responsive Medical Admin Dashboard built for efficient healthcare management. It features real-time stats, appointment tracking, and smooth navigation — ideal for clinics, hospitals, or health startups. Designed to impress clients with modern UI and powerful functionality."
      , live_link : "https://www.awesomescreenshot.com/video/41143411?key=4c83714efef3206a50d23653faea22cb"
    },
    // {
    //   skill: "",
    //   web_image: budget_book,
    //   topic_name: "Budget Booking",
    //   description: "BudgetBooking is an innovative platform designed to help travelers find and book hotels within their budget. It features exclusive discounts and deals, ensuring users get the best value for their money while enjoying comfortable accommodations"
    //   , live_link: "https://budgetbooking.infosparkles.com/"
    // },
    //    {
    // skill: "",
    // web_image: homeizon_web1,
    // topic_name: "Homeizon",
    // description: "This projects is a real estate project, here people get the facilities to buy or sell properties , pg hostels and houses on rent. This also have a option to buy furnitures."
    // , live_link : "https://desert2.infosparkles.com/"
    //  }
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
                  <div className=" " key={i}>
                    <div className="activity_newcard1  ">
                      <div
                        className="activity_cardimg"
                        style={{
                          backgroundImage: `url(${value.web_image})`,
                        }}
                      ></div>
                      <div className="cart_cont">

                        <h4>{value.topic_name}</h4>
                        <p className="project_description_high">
                          {value.description}
                        </p>

                      {value.live_link &&   <Link to={value.live_link} target="_blank">
                          <button >
                            Explore Live <MoveRight />
                          </button>
                        </Link>
              }
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
