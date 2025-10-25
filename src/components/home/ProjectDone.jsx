// import React from "react";
// import { useNavigate, Link } from 'react-router-dom'
// import Container from "../common/Container";
// import "./project.css";
// import { MoveRight } from "lucide-react";
// // import supply_web1 from "../../assets/images/supply2.png";
// // import deal_web1 from "../../assets/images/deal1.png";
// import lms_web1 from "../../assets/images/lms1.png";
// import desert_web1 from "../../assets/images/desert2.png";
// // import homeizon_web1 from "../../assets/images/homeizon1.png";
// // import budget_book from "../../assets/images/budget-book.jpeg";
// import online_shop from "../../assets/images/online-shop.jpeg";
// import admin_dashboard1 from "../../assets/images/admin_dash1.png";
// import ePower from "../../assets/images/Epower.png";
// import vegus_img from "../../assets/images/vegus.png";
// import chair_furniture from "../../assets/images/chair.png";

// const ProjectDone = ({ refs }) => {

//   // const navigate = useNavigate()

//   const data = [
 
//     {
//       skill: "Web Developer",
//       web_image: online_shop,
//       topic_name: "Online Grocery Shop",
//       description: "This is an online grocery store designed to provide customers with a convenient and seamless shopping experience. It offers a wide range of fresh produce, dairy products, and household essentials delivered directly to your doorstep."
//       , live_link: "https://grocery-onlineshop.netlify.app/"
//     },
//     {
//       skill: "",
//       web_image: lms_web1,
//       topic_name: "Video LMS",
//       description: "Video LMS is an educational platform designed to deliver video-based learning content.Video LMS aims to enhance digital learning experiences for both instructors and students."
//       , live_link: "https://lms.infosparkles.com/"
//     },
  
//      {
//       skill: "",
//       web_image: desert_web1,
//       topic_name: "DesertGate",
//       description: "This projects is to provide peoples the facilities to book their destination tours. Also it includes hotel booking and city tours."
//       , live_link: "https://desert2.infosparkles.com/"
//     },
//     {
//       skill: "Reactjs + Vite",
//       web_image: vegus_img,
//       topic_name: "Vegus Mind Health",
//       description: "Vagus Mind Health is your trusted online platform for personalized, flexible, and confidential therapy—anytime, anywhere. Licensed professionals, tailored plans, and safe support for every stage of life."
//       , live_link : "https://vagusmentalhealths.netlify.app/"
//     },
//     {
//       skill: "Reactjs + Vite",
//       web_image: ePower,
//       topic_name: "E-Power web template",
//       description: "A sleek one-page responsive web template built to highlight design, layout, and user experience—perfect for showcasing creativity and modern web styling."
//       , live_link : "https://e-powerweb.netlify.app/"
//     },
//       {
//       skill: "Reactjs + Vite",
//       web_image: admin_dashboard1,
//       topic_name: "Admin Dashboard",
//       description: "Fully responsive Medical Admin Dashboard built for efficient healthcare management. It features real-time stats, appointment tracking, and smooth navigation — ideal for clinics, hospitals, or health startups. Designed to impress clients with modern UI and powerful functionality."
//       , live_link : "https://www.awesomescreenshot.com/video/41143411?key=4c83714efef3206a50d23653faea22cb"
//     },
//     //    {
//     // skill: "",
//     // web_image: homeizon_web1,
//     // topic_name: "Homeizon",
//     // description: "This projects is a real estate project, here people get the facilities to buy or sell properties , pg hostels and houses on rent. This also have a option to buy furnitures."
//     // , live_link : "https://desert2.infosparkles.com/"
//     //  }
//   ];

//   return (
//     <Container>
//       <div ref={refs.ourProjects} id="ourProjects" className="project_done_byme  ">
//         <div className="">
//           <h1 className="text-3xl mt-10  font-bold text-[#132238] text-center leading-9  sm:text-4xl sm:mt-14 lg:mt-20  lg:text-center lg:text-[42px]">
//             Our <span className="text-[#A53DFF]">Projects</span>
//           </h1>
//           <p className="text-base pt-4  text-[#87909D] text-center lg:text-center lg:text-[17px] ">
//             Showcasing innovative solutions and transformative ideas through our diverse projects.
//           </p>
//           <div className=" ">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px] py-10 xl:py-16 xl:px-12 ">
//               {data.map((value, i) => {
//                 return (
//                   <div className=" " key={i}>
//                     <div className="activity_newcard1  ">
//                       <div
//                         className="activity_cardimg"
//                         style={{
//                           backgroundImage: `url(${value.web_image})`,
//                         }}
//                       ></div>
//                       <div className="cart_cont">

//                         <h4>{value.topic_name}</h4>
//                         <p className="project_description_high">
//                           {value.description}
//                         </p>

//                       {value.live_link &&   <Link to={value.live_link} target="_blank">
//                           <button >
//                             Explore Live <MoveRight />
//                           </button>
//                         </Link>
//               }
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default ProjectDone;





import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import "./project.css";
import { MoveRight } from "lucide-react";
import lms_web1 from "../../assets/images/lms1.png";
import desert_web1 from "../../assets/images/desert2.png";
import online_shop from "../../assets/images/online-shop.jpeg";
import admin_dashboard1 from "../../assets/images/admin_dash1.png";
import ePower from "../../assets/images/Epower.png";
import vegus_img from "../../assets/images/vegus.png";
import chair_furniture from "../../assets/images/chair.png";
import real_estate from "../../assets/images/real-estate.jpg";
import beauty_salon from "../../assets/images/beauty_salon.jpg";

import Mirha_Foods_and_Chemicals from "../../assets/images/Home-Mirha-Foods-and-Chemicals.png";  
import Home_svglobalin from "../../assets/images/Home-svglobalin.png";
import Puri_Mineral_and_Chemicals from "../../assets/images/Puri-Mineral-and-Chemicals.png";
import Home_alyahgeneraltrading from "../../assets/images/Home-alyahgeneraltrading.png";

const ProjectDone = ({ refs }) => {
  const webProjects = [
    
    {
      skill: "Web Developer",
      web_image: online_shop,
      topic_name: "Online Grocery Shop",
      description:
        "This is an online grocery store. It offers a wide range of fresh produce, dairy products, and household essentials delivered directly to your doorstep.",
      live_link: "https://grocery-onlineshop.netlify.app/",
    },
    {
      skill: "React.js",
      web_image: beauty_salon,
      topic_name: " Beauty Salon Website",
      description:
        "A React-powered beauty salon website featuring service listings, stylist and easy online booking crafted with elegant design.",
      live_link: "https://beauty-salon-dun-five.vercel.app/",
    },
    {
      skill: "",
      web_image: lms_web1,
      topic_name: "Video LMS",
      description:
        "Video LMS is an educational platform designed to deliver video-based learning content. It enhances digital learning experiences.",
      live_link: "https://lms.infosparkles.com/",
    },
      {
      skill: "React.js",
      web_image: real_estate,
      topic_name: "Real Estate Website",
      description:
        "A modern React-based real estate platform showcasing premium properties for sale and rent, with detailed listings.",
      live_link: "https://real-estate-website-pied-two.vercel.app/",
    },
    {
      skill: "",
      web_image: desert_web1,
      topic_name: "DesertGate",
      description:
        "This project provides users with facilities to book destination tours, hotels, and city tours — all in one place.",
      live_link: "https://desert2.infosparkles.com/",
    },
    {
      skill: "Reactjs + Vite",
      web_image: vegus_img,
      topic_name: "Vegus Mind Health",
      description:
        "Vagus Mind Health is your trusted online platform for personalized, flexible, and confidential therapy anytime, anywhere.",
      live_link: "https://vagusmentalhealths.netlify.app/",
    },
    {
      skill: "Reactjs + Vite",
      web_image: ePower,
      topic_name: "E-Power Web Template",
      description:
        "A sleek one-page responsive web template built to highlight design, layout, and user experience.",
      live_link: "https://e-powerweb.netlify.app/",
    },

  

    {
      skill: "Reactjs + Vite",
      web_image: admin_dashboard1,
      topic_name: "Admin Dashboard",
      description:
        "Fully responsive Medical Admin Dashboard built for efficient healthcare management, real-time stats, and modern UI.",
      live_link:
        "https://www.awesomescreenshot.com/video/41143411?key=4c83714efef3206a50d23653faea22cb",
    },
    {
      skill: "Html",
      web_image: chair_furniture,
      topic_name: "Furniture Store App",
      description:
        "A stylish furniture website. It lets users explore, customize, and shop furniture pieces with a clean and responsive layout.",
      live_link: "https://furnish-me.netlify.app/",
    },

  ];

  const wordpressProjects = [
    {
      skill: "WordPress",
      web_image: Mirha_Foods_and_Chemicals,
      topic_name: "Mirha Foods & Chemicals",
      description:
        "A professional WordPress business website for Mirha Foods & Chemicals, highlighting their products, services, and brand presence with a clean and modern layout.",
      live_link: "https://mirhawll.com/",
    },
    {
      skill: "WordPress",
      web_image: Home_svglobalin,
      topic_name: "SV Global Industries",
      description:
        "A corporate WordPress website designed for SV Global Industries to showcase their industrial solutions, products, and company insights with a sleek responsive design.",
      live_link: "https://svglobalin.com/",
    },
    {
      skill: "WordPress",
      web_image: Puri_Mineral_and_Chemicals,
      topic_name: "Puri Mineral & Chemicals",
      description:
        "A dynamic WordPress site built for Puri Mineral & Chemicals, featuring product catalogs, company overview, and optimized performance for business growth.",
      live_link: "https://puriminchem.com/",
    },
    {
      skill: "WordPress",
      web_image: Home_alyahgeneraltrading,
      topic_name: "Alyah General Trading",
      description:
        "A modern WordPress website for Alyah General Trading, showcasing trading services, product ranges, and business contact information with a professional touch.",
      live_link: "https://alyahgeneraltrading.com/",
    },

  ];

  const [activeTab, setActiveTab] = useState("web");
  const data = activeTab === "web" ? webProjects : wordpressProjects;

  return (
    <Container>
      <div ref={refs?.ourProjects} id="ourProjects" className="project_done_byme">
        <h1 className="text-3xl mt-10 font-bold text-[#132238] text-center leading-9 sm:text-4xl sm:mt-14 lg:mt-20 lg:text-[42px]">
          Our <span className="text-[#A53DFF]">Projects</span>
        </h1>

        <p className="text-base pt-4 text-[#87909D] text-center lg:text-[17px]">
          Showcasing innovative solutions and transformative ideas through our diverse projects.
        </p>

        {/* ===== Toggle Buttons ===== */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => setActiveTab("web")}
            className={`px-4 py-2 rounded-full font-medium border-2 transition-all duration-300 ${activeTab === "web"
                ? "bg-[#A53DFF] text-white border-[#A53DFF]"
                : "border-[#A53DFF] text-[#A53DFF] hover:bg-[#A53DFF] hover:text-white"
              }`}
          >
            Web Projects
          </button>

          <button
            onClick={() => setActiveTab("wordpress")}
            className={`px-4 py-2 rounded-full font-medium border-2 transition-all duration-300 ${activeTab === "wordpress"
                ? "bg-[#A53DFF] text-white border-[#A53DFF]"
                : "border-[#A53DFF] text-[#A53DFF] hover:bg-[#A53DFF] hover:text-white"
              }`}
          >
            Wordpress Projects
          </button>
        </div>

        {/* ===== Project Cards ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px] py-10 xl:py-16 xl:px-12">
          {data.map((value, i) => (
            <div key={i}>
              <div className="activity_newcard1">
                <div
                  className="activity_cardimg"
                  style={{ backgroundImage: `url(${value.web_image})` }}
                ></div>
                <div className="cart_cont">
                  <h4>{value.topic_name}</h4>
                  <p className="project_description_high">{value.description}</p>
                  {value.live_link && (
                    <Link to={value.live_link} target="_blank">
                      <button>
                        Explore Live <MoveRight />
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProjectDone;
