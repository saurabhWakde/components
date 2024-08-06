import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
import SwiperCore from "swiper";
import  { Autoplay, Pagination, Navigation } from "swiper/modules";

import Slide1 from "./assets/slide1.jpg";
import Slide2 from "./assets/slide2.jpg";
import Slide3 from "./assets/slide3.jpg";
import Logo from "./assets/Nagpals.png";
import Profile from "./assets/user.jpg";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Ngo = () => {
  return (
    <div className="grid grid-cols-12 gap-8 mt-20 shadow-lg lg:w-[90%] m-auto rounded-3xl bg-white lg:p-10 p-2 py-10 md:py-0 relative">
      <div className="logo_section col-span-12 grid grid-cols-12 gap-8">
        <div className="logo col-span-3 lg:col-span-7 p-2 lg:p-0">
          <div className="w-[5rem] h-[5rem] rounded-full overflow-hidden bg-[#D6E5BE] text-center">
            <img src={Logo} alt="profile" className="w-full h-full" />
          </div>
        </div>
        <div className="slider_strip col-span-9 lg:col-span-5 grid grid-cols-12 items-center ">
          <div className="col-span-2 lg:col-span-3 bg-slate-900 h-1 rounded-full"></div>
          <div className="col-span-1 "></div>
          <div className="col-span-2 lg:col-span-3 bg-slate-900 h-1 rounded-full"></div>
          <div className="col-span-2 mx-2 text-3xl">02</div>
          <div className="col-span-2 lg:col-span-3 bg-slate-900 h-1 rounded-full"></div>
        </div>
      </div>
      <div className="grid col-span-12 grid-cols-12 gap-8 grid-rows-12">
        <div className="slide_preview col-span-12 lg:col-span-6 col-start-1 lg:col-start-2 row-span-12 row-start-1 lg:row-start-1 w-full relative overflow-hidden">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="img_div w-full h-full max-h-[20rem] md:max-h-[18rem] lg:max-h-[50rem] rounded-3xl overflow-hidden">
                <img
                  src={Slide1}
                  alt="slide"
                  className="w-full h-full object-cover rounded-3xl overflow-hidden"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img_div w-full h-full max-h-[20rem] md:max-h-[18rem] lg:max-h-[50rem] rounded-3xl overflow-hidden">
                <img
                  src={Slide2}
                  alt="slide"
                  className="w-full h-full object-cover rounded-3xl overflow-hidden"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img_div w-full h-full max-h-[20rem] md:max-h-[18rem] lg:max-h-[50rem] rounded-3xl overflow-hidden">
                <img
                  src={Slide3}
                  alt="slide"
                  className="w-full h-full object-cover rounded-3xl overflow-hidden"
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="explore absolute -top-1 left-0 bg-white rounded-br-3xl p-2 z-10">
            <Link to="/explore" className="flex items-center gap-2">
              <h1 className="text-2xl md:text-4xl font-bold">Explore More</h1>
              <IoIosArrowRoundForward className="text-3xl md:text-6xl -rotate-45" />
            </Link>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 col-start-1 lg:col-start-8 row-span-12 md:row-start-7 lg:row-start-1 grid-rows-12 w-full grid md:grid-rows-9 lg:grid-rows-12 grid-cols-12 gap-8">
          <div className="slides col-span-12 col-start-1 row-span-4 row-start-1 grid grid-rows-12 grid-cols-12 gap-4 lg:gap-4">
            <div className="col-span-6 lg:col-span-7 col-start-1 row-span-12 lg:row-start-1 max-h-[10.5rem] lg:max-h-[15rem]">
              <img
                src={Slide2}
                alt="slide"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="col-span-6 lg:col-span-5 col-start-7 row-span-12 lg:row-start-1 max-h-[10.5rem] lg:max-h-[15rem]">
              <img
                src={Slide3}
                alt="slide"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
          <div className="lg:col-span-12 col-span-12 md:col-span-6 col-start-1 row-span-4 row-start-5">
            <div className="content bg-[#D6E5BE] p-5 pr-28 rounded-3xl h-full relative">
              <h1 className="text-3xl font-bold font-sans">
                80% Energy Efficiency
              </h1>
              <div className="font-sans font-semibold mt-2">
                <p className="text-left">
                  We provide 80% energy efficiency solution for your home energy
                  consumption.
                </p>
              </div>
              <div className="arrow_div p-5 absolute right-0 bottom-1 rotate-45">
                <Link>
                  <IoIosArrowRoundForward className="text-[3rem] text-slate-900 rounded-[50%] border-1 border-slate-900 border-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:col-span-12 col-span-12 md:col-span-6 grid grid-cols-12 col-start-1 md:col-start-7 lg:col-start-1 row-span-4 row-start-9 md:row-start-5 lg:row-start-9">
            <div className="testimonial col-start-3 col-span-12 relative">
              <div className="details bg-[#F2EFE8] p-5 rounded-[2.5rem] ml-[-1rem] z-0 h-full flex flex-col justify-between">
                <div className="flex">
                  <div className="commas text-3xl font-bold">""</div>
                  <div className="message mx-1">
                    <p>
                      We provide 80% energy efficiency solution for your home
                      energy consumption.
                    </p>
                  </div>
                </div>
                <div className="name">Shubham, Author</div>
              </div>
              <div className="w-[4rem] h-[4rem] lg:w-[6rem] lg:h-[6rem] absolute -left-16 lg:-left-24 top-1/3 rounded-full overflow-hidden border-4 border-[#D6E5BE]">
                <img
                  src={Profile}
                  alt="user"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_logo absolute  lg:left-0  right-0 top-12 md:right-10 md:top-0 lg:top-3/4">
      <div className="round w-[5rem] h-[5rem] rounded-full bg-white relative -rotate-45">
                  <div className="round w-[3.5rem] h-[3.5rem] rounded-full bg-[#D6E5BE] absolute bottom-0 right-0"></div>
                  <div className="round w-[2.5rem] h-[2.5rem] rounded-full bg-white absolute bottom-0 right-0"></div>
                </div>
      </div>
    </div>
  );
};

export default Ngo;
