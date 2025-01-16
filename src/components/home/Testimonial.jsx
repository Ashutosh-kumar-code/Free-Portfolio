import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/navigation';
import "swiper/css/pagination";
// import 'swiper/css/scrollbar';

import "./project.css";
import Container from "../common/Container";

const Testimonial = () => {
  return (
    <Container>
      <div className="">
        <h1 className="text-3xl  font-bold text-[#132238] mt-4 text-center leading-9 pt-5 sm:text-4xl sm:mt-8  lg:text-center   lg:text-[42px]">
          Testimonial
        </h1>
        <p className="text-base pt-8 text-[#556070] text-center  lg:text-center lg:text-[17px] ">
          I design and develop services for customers specializing creating
          stylish, modern websites, web services and online stores. My passion
          is to design digital user experiences.
        </p>

        <div className="swiper_testmonial_outers ">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 2900,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="testimonial_slidermain"
          >
            <SwiperSlide>
              <div>
                <h4 className="pb-4">
                  “Working with this team was transformative for our business. They didn't just build us a website - they created a powerful digital presence that perfectly captures our brand. The attention to detail and technical expertise exceeded our expectations. Our new site has significantly increased our customer engagement and sales.”
                </h4>
                {/* <h6>Esther Howard</h6>
                <p>Managing Director, ABC company</p> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h4 className="pb-4">
                  “What impressed me most was their ability to combine stunning design with powerful functionality. They took the time to understand our unique needs and delivered a solution that was both beautiful and efficient. Their process was transparent, and the results have been outstanding - our online traffic has doubled since launch.”
                </h4>
                {/* <h6>Esther Howard</h6>
                <p>Managing Director, ABC company</p> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h4 className="pb-4">
                  “The level of professionalism and creativity they brought to our project was exceptional. They transformed our outdated website into a modern, user-friendly platform that our customers love. Their ongoing support and responsiveness make them a valuable long-term partner for our business.
                 ”
                </h4>
                {/* <h6>Esther Howard</h6>
                <p>Managing Director, ABC company</p> */}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
