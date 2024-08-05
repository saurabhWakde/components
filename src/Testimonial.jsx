import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiMenuAlt2 } from "react-icons/hi";
import bg from "./assets/bg.jpg";
import Clients from "./assets/user.jpg";
import Logo from "./assets/Nagpals-white.png";
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
import SwiperCore  from 'swiper/core';
import { Pagination } from 'swiper/modules';
SwiperCore.use([Pagination]);

const Testimonial = () => {
  return (
    <div>
      
      <div className="w-11/12 mt-20 m-auto bg-[#111111] flex-col lg:flex-row flex items-center lg:h-[850px] rounded-3xl mb-20 p-5 py-10 relative">
        <div className="top_container flex-col-reverse lg:flex-row flex justify-between items-center absolute w-full -top-1 lg:px-5 ">
          <div className="logo w-[8rem] h-[8rem] lg:mt-10">
            <img src={Logo} alt="logo" className="w-full h-full" />
          </div>
          <div className="login_section lg:w-1/3 flex  lg:bg-[#111111]  justify-end items-center gap-8 px-5 pt-5 lg:pt-0  h-[5rem] rounded-bl-3xl lg:text-xl z-10">
            <div className="p-3 lg:py-3 lg:px-6 lg:rounded-3xl rounded-xl border-2 border-[#6668F1]">
              <button className="w-full text-white">Login</button>
            </div>
            <div className="p-3 lg:py-3 lg:px-6 lg:rounded-3xl rounded-xl border-2 border-[#6668F1]">
              <button className="w-full text-white">Sign Up</button>
            </div>
            <button className="text-black rounded-full bg-[#C7F962] p-3">
              <HiMenuAlt2 className="" />
            </button>
          </div>
        </div>
        <div className="bottom_container absolute  justify-center w-full bottom-7 sm:bottom-10 left-0 flex flex-col gap-4 lg:gap-0 lg:flex-row lg:w-1/2  items-center px-10 lg:justify-between z-10">
          <div className="social_icons flex gap-3 items-center">
            <div className="icon bg-[#6668F1] p-1 sm:p-2 rounded-full">
              <FaFacebook className="text-3xl sm:text-[2rem]" />
            </div>
            <div className="icon bg-[#6668F1] p-1  sm:p-2 rounded-full">
              <FaTwitter className="text-3xl sm:text-[2rem]" />
            </div>
            <div className="icon bg-[#6668F1] p-1  sm:p-2 rounded-full">
              <FaInstagram className="text-3xl sm:text-[2rem]" />
            </div>
            <div className="icon bg-[#6668F1] p-1  sm:p-2 rounded-full">
              <FaLinkedin className="text-3xl sm:text-[2rem]" />
            </div>
          </div>
          <div className="lg:w-[40%]  p-3 lg:bg-[#111111] rounded-tr-3xl">
            <div className="get_in_touch flex items-center rounded-3xl gap-5 bg-[#6668F1] lg:pr-0 pr-5">
              <Link to="/" className="text">
                <IoIosArrowRoundForward className="text-[3rem] bg-[#ffff] rounded-full p-2 -rotate-45 relative border-[#6668F1] border-4" />
              </Link>
              <span className="text-white uppercase text-sm sm:text-xl">Get in touch</span>
            </div>
          </div>
        </div>

        <div className="left_container h-full w-full  lg:w-1/3 pt-40 px-5 py-5">
          <div className=" text-xl lg:text-[2.5rem] text-white font-semibold leading-relaxed">
            <h1 className="uppercase">Experience Authentic Flavors</h1>
            <p className="text-sm lg:text-[1.5rem] text-slate-400 mt-4">
              At Nagpals Kitchen, we bring you the best of traditional and
              modern cuisine, crafted with love and the finest ingredients.
            </p>
          </div>
        </div>
        <div className="right_container h-full w-full rounded-3xl lg:rounded-none lg:w-2/3 relative">
      <div className="bg-image w-full h-full md:h-[75vh] lg:h-full">
        <img src={bg} alt="bg" className="w-full h-full" />
      </div>
      <div className="absolute lg:top-32 top-0 right-0 px-4 w-full">
        <div className="md:hidden">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            <SwiperSlide className="">
              <div className="bg-transparent shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-2xl rounded-3xl p-5 h-64 lg:h-full text-slate-300">
                <div className="text-xl ">
                  <h1>100k +</h1>
                </div>
                <p className="mt-2">Delighted customers who have enjoyed our meals.</p>
                <div className="arrow flex justify-end">
                  <Link to="/">
                    <IoIosArrowRoundForward className="text-[3rem] text-slate-900 bg-[#ffff] rounded-full p-2 -rotate-45 relative border-[#6668F1] border-4" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-transparent shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-2xl rounded-3xl p-5 h-64 lg:h-full">
                <div className="text-xl text-slate-300">
                  <h1 className="uppercase">Testimonials</h1>
                </div>
                <div className="clients mt-4 flex items-center justify-center">
                  <div className="image_div w-[4rem] h-[4rem] -ml-2">
                    <img src={Clients} alt="client" className="w-full h-full rounded-full" />
                  </div>
                  <div className="image_div w-[4rem] h-[4rem] -ml-2">
                    <img src={Clients} alt="client" className="w-full h-full rounded-full" />
                  </div>
                  <div className="image_div w-[4rem] h-[4rem] -ml-2">
                    <img src={Clients} alt="client" className="w-full h-full rounded-full" />
                  </div>
                </div>
                <div className="arrow flex justify-end">
                  <Link to="/">
                    <IoIosArrowRoundForward className="text-[3rem] bg-[#111111] rounded-full p-2 text-white -rotate-45 relative border-[#C7F962] border-4" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-transparent shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-2xl rounded-3xl p-5 h-64 lg:h-full">
                <div className=" flex flex-col items-center">
                  <div className=" text-xl  text-slate-300 uppercase mt-2">
                    <h1>Exquisite Culinary Delights</h1>
                  </div>
                  <p className="leading-5 text-justify text-slate-300 mt-2" >
                    Discover our range of dishes, each crafted to perfection and
                    infused with authentic flavors.
                  </p>
                </div>
                <div className="arrow flex justify-end mt-2">
                  <Link to="/">
                    <IoIosArrowRoundForward className="text-[3rem] bg-[#ffff] rounded-full p-2 -rotate-45 relative border-[#6668F1] border-4" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="hidden md:grid grid-cols-2 gap-6 md:mt-20 lg:mt-0">
          <div className="col-span-2 lg:col-span-1 lg:col-start-2 grid grid-cols-2 gap-6">
            <div className="bg-transparent shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-2xl rounded-3xl p-5 col-span-2">
              <div className="text-3xl text-black">
                <h1>100k +</h1>
              </div>
              <p>Delighted customers who have enjoyed our meals.</p>
              <div className="arrow flex justify-end">
                <Link to="/">
                  <IoIosArrowRoundForward className="text-[3rem] bg-[#ffff] rounded-full p-2 -rotate-45 relative border-[#6668F1] border-4" />
                </Link>
              </div>
            </div>
            <div className="bg-transparent shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-2xl rounded-3xl p-5 col-span-2">
              <div className="text-3xl text-black">
                <h1 className="uppercase">Testimonials</h1>
              </div>
              <div className="clients mt-4 flex">
                <div className="image_div w-[4rem] h-[4rem] -ml-2">
                  <img src={Clients} alt="client" className="w-full h-full rounded-full" />
                </div>
                <div className="image_div w-[4rem] h-[4rem] -ml-2">
                  <img src={Clients} alt="client" className="w-full h-full rounded-full" />
                </div>
                <div className="image_div w-[4rem] h-[4rem] -ml-2">
                  <img src={Clients} alt="client" className="w-full h-full rounded-full" />
                </div>
              </div>
              <div className="arrow flex justify-end">
                <Link to="/">
                  <IoIosArrowRoundForward className="text-[3rem] bg-[#111111] rounded-full p-2 text-white -rotate-45 relative border-[#C7F962] border-4" />
                </Link>
              </div>
            </div>
            <div className="bg-transparent shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-2xl rounded-3xl p-5 col-span-2">
              <div className="pr-20">
                <div className="text-3xl text-black uppercase">
                  <h1>Exquisite Culinary Delights</h1>
                </div>
                <p className="leading-5 text-justify">
                  Discover our range of dishes, each crafted to perfection and
                  infused with authentic flavors.
                </p>
              </div>
              <div className="arrow flex justify-end">
                <Link to="/">
                  <IoIosArrowRoundForward className="text-[3rem] bg-[#ffff] rounded-full p-2 -rotate-45 relative border-[#6668F1] border-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Testimonial;
