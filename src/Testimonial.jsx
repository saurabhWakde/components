import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiMenuAlt2 } from "react-icons/hi";
import bg from "./assets/bg.jpg";
import Clients from "./assets/user.jpg";
import Logo from "./assets/Nagpals-white.png";

const Testimonial = () => {
  return (
    <div>
      <div className="w-11/12 mt-20 m-auto bg-[#111111] flex items-center h-[850px] rounded-3xl mb-20 p-5">
        <div className="left_container flex flex-col w-2/6 p-10 pb-2 h-full justify-between">
          <div className="logo text-white">
            <img src={Logo} alt="logo" className="w-[10rem]" />
          </div>
          <div className="text-[3rem] text-white font-semibold">
            <h1 className="uppercase">Experience Authentic Flavors</h1>
            <p className="text-[1.5rem] text-slate-400 mt-4">
              At Nagpals Kitchen, we bring you the best of traditional and
              modern cuisine, crafted with love and the finest ingredients.
            </p>
          </div>
          <div className="social_icons flex gap-3 items-center">
            <div className="icon bg-[#6668F1] p-2 rounded-full">
              <FaFacebook className="text-[2rem]" />
            </div>
            <div className="icon bg-[#6668F1] p-2 rounded-full">
              <FaTwitter className="text-[2rem]" />
            </div>
            <div className="icon bg-[#6668F1] p-2 rounded-full">
              <FaInstagram className="text-[2rem]" />
            </div>
            <div className="icon bg-[#6668F1] p-2 rounded-full">
              <FaLinkedin className="text-[2rem]" />
            </div>
          </div>
        </div>

        <div className="right_container flex flex-col justify-end w-2/3 h-full relative z-0 p-5 rounded-3xl">
          <img
            className="bg-cover w-full h-full overflow-hidden rounded-3xl"
            src={bg}
            alt="bg"
          />
          <div className="login_section w-1/2 flex absolute z-0 bg-[#111111] gap-3 justify-end -top-5 right-2 p-5 rounded-bl-3xl">
            <div className="py-4 px-8 rounded-3xl border-2 border-[#6668F1]">
              <button className="w-full text-white">Login</button>
            </div>
            <div className="py-4 px-8 rounded-3xl border-2 border-[#6668F1]">
              <button className="w-full text-white">Sign Up</button>
            </div>
            <button className="text-black rounded-full bg-[#C7F962] p-5">
              <HiMenuAlt2 className="text-[1.5rem]" />
            </button>
          </div>

          <div className="content grid grid-cols-1 gap-5 absolute top-28 w-1/2 right-10 rounded-tr-3xl p-5">
            <div className="bg-transparent shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-2xl rounded-3xl p-5">
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

            <div className="bg-transparent shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-2xl rounded-3xl p-5">
              <div className="text-3xl text-black">
                <h1 className="uppercase">Testimonials</h1>
              </div>
              <div className="clients mt-4 flex">
                <div className="image_div w-[4rem] h-[4rem] -ml-2">
                  <img
                    src={Clients}
                    alt="client"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="image_div w-[4rem] h-[4rem] -ml-2">
                  <img
                    src={Clients}
                    alt="client"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div className="image_div w-[4rem] h-[4rem] -ml-2">
                  <img
                    src={Clients}
                    alt="client"
                    className="w-full h-full rounded-full"
                  />
                </div>
              </div>
              <div className="arrow flex justify-end">
                <Link to="/">
                  <IoIosArrowRoundForward className="text-[3rem] bg-[#111111] rounded-full p-2 text-white -rotate-45 relative border-[#C7F962] border-4" />
                </Link>
              </div>
            </div>

            <div className="bg-transparent shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-2xl rounded-3xl p-5">
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

          <div className="absolute bottom-0 left-0 bg-[#111111] z-50 p-2 w-1/4 rounded-tr-3xl">
            <div className="get_in_touch flex items-center rounded-3xl gap-5 bg-[#6668F1]">
              <Link to="/" className="text">
                <IoIosArrowRoundForward className="text-[3rem] bg-[#ffff] rounded-full p-2 -rotate-45 relative border-[#6668F1] border-4" />
              </Link>
              <span className="text-white uppercase text-xl">Get in touch</span>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="w-11/12 mt-20 m-auto bg-[#111111] flex-col lg:flex-row flex items-center lg:h-[850px] rounded-3xl mb-20 p-5 py-10 relative">
        <div className="top_container flex-col lg:flex-row flex justify-between items-center absolute w-full -top-1 lg:px-5 ">
          <div className="logo w-[8rem] h-[8rem] lg:mt-10">
            <img src={Logo} alt="logo" className="w-full h-full" />
          </div>
          <div className="login_section lg:w-1/3 flex  lg:bg-[#111111]  justify-end items-center gap-8 px-5  h-[5rem] rounded-bl-3xl lg:text-xl">
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
        <div className="bottom_container absolute  justify-center w-full bottom-10 left-0 flex flex-col gap-4 lg:gap-0 lg:flex-row lg:w-1/2  items-center px-5 lg:justify-between">
          <div className="social_icons flex gap-3 items-center">
            <div className="icon bg-[#6668F1] p-2 rounded-full">
              <FaFacebook className="text-[2rem]" />
            </div>
            <div className="icon bg-[#6668F1] p-2 rounded-full">
              <FaTwitter className="text-[2rem]" />
            </div>
            <div className="icon bg-[#6668F1] p-2 rounded-full">
              <FaInstagram className="text-[2rem]" />
            </div>
            <div className="icon bg-[#6668F1] p-2 rounded-full">
              <FaLinkedin className="text-[2rem]" />
            </div>
          </div>
          <div className="lg:w-[35%]  p-3 lg:bg-[#111111] rounded-tr-3xl">
          <div className="get_in_touch flex items-center rounded-3xl gap-5 bg-[#6668F1] lg:pr-0 pr-5">
          <Link to="/" className="text">
            <IoIosArrowRoundForward className="text-[3rem] bg-[#ffff] rounded-full p-2 -rotate-45 relative border-[#6668F1] border-4" />
          </Link>
          <span className="text-white uppercase text-xl">Get in touch</span>
        </div>
          </div>
        </div>

        <div className="left_container h-full   lg:w-1/3 pt-36"></div>
        <div className="right_container h-full w-full  rounded-3xl lg:rounded-none lg:w-2/3">
          <div className="bg-image w-full h-full border-2">
            <img src={bg} alt="bg" className="w-full h-full" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Testimonial;
