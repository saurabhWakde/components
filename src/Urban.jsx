import React from "react";
import Logo from "./assets/Nagpals.png";
import CLient1 from "./assets/clients/1.jpg";
import CLient2 from "./assets/clients/2.jpg";
import CLient3 from "./assets/clients/3.jpg";
import { Link } from "react-router-dom";
import { IoArrowUpSharp } from "react-icons/io5";
import Image from "./assets/slide3.jpg";
import LogoWhite from "./assets/Nagpals-white.png";
import { BsStars } from "react-icons/bs";

const Urban = () => {
  return (
    <div className="mt-20">
      <div className="grid grid-col-12 grid-row-3 gap-4 ">
        <div className="grid grid-cols-12 col-span-12 row-span-4   row-start-1 col-start-1 ">
          <div className="col-span-3 col-start-1  row-start-2  items-end flex justify-center">
            <img src={Logo} alt="logo" className="w-[5rem]  rounded-full" />
          </div>
          <div className="col-span-9  row-span-3 p-10">
            <div className="text_div text-xl lg:text-5xl font-semibold  lg:pl-20">
              <h1 className="leading-normal">
                {" "}
                lorem ipsum dolor sit amet adipiscing
              </h1>
              <h1 className="leading-normal">
                {" "}
                <span className="bg-[#D6E5BE] rounded-3xl px-5 py-0">
                  {" "}
                  consectetur
                </span>{" "}
                lorem ipsum.
              </h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 col-span-12 row-span-4  gap-10">
          <div className=" col-span-11 md:col-span-4  lg:col-span-3 col-start-1  row-start-1 row-span-3 ">
            <div className="our_team bg-[#D6E5BE] w-full h-full rounded-r-[5rem] p-5">
              <div className="flex items-center ">
                <div className="img_div w-[4rem] h-[4rem]">
                  <img
                    src={CLient1}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="img_div w-[4rem] h-[4rem] -ml-3">
                  <img
                    src={CLient2}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="img_div w-[4rem] h-[4rem] -ml-4 ">
                  <img
                    src={CLient3}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="redirect_link p-5 font-semibold text-2xl">
                <span className="flex items-center gap-4">
                  Our Team{" "}
                  <Link>
                    <IoArrowUpSharp className="rotate-45 " />
                  </Link>
                </span>
              </div>
              <div className="logo flex items-end justify-center w-full">
                <div className="round w-[5rem] h-[5rem] rounded-full bg-white relative -rotate-45">
                  <div className="round w-[3.5rem] h-[3.5rem] rounded-full bg-[#D6E5BE] absolute bottom-0 right-0"></div>
                  <div className="round w-[2.5rem] h-[2.5rem] rounded-full bg-white absolute bottom-0 right-0"></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-12 md:col-span-8 col-start-1 lg:col-span-8  row-span-3 relative">
            <div className="image_overlay w-full h-full max-h-80 ">
              <img
                src={Image}
                className="w-full h-full  md:rounded-tl-[5rem] lg:rounded-[5rem] rounded-none object-cover"
              />
            </div>
            <div className="flex items-center justify-between absolute top-3 w-full px-5">
              <div className="tags w-full flex items-center border-white text-white lg:px-5 gap-4 text-md">
                <span className="border-2 cursor-pointer hover:bg-[#D6E5BE] hover:text-black hover:border-none rounded-3xl px-3 py-1 md:px-6 lg:px-8 lg:py-2">
                  Smart
                </span>
                <span className="border-2 cursor-pointer hover:bg-[#D6E5BE] hover:text-black hover:border-none rounded-3xl px-3 py-1 md:px-6 lg:px-8 lg:py-2">
                  Innovative
                </span>
                <span className="border-2 cursor-pointer hover:bg-[#D6E5BE] hover:text-black hover:border-none rounded-3xl px-3 py-1 md:px-6 lg:px-8 lg:py-2">
                  Sustainable
                </span>
              </div>
              <div className="logo_white">
                <img
                  src={LogoWhite}
                  alt="logo"
                  className="w-[5rem] bg-transparent  rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 col-span-12 row-span-4  ">
          <div className="col-span-12  row-span-3 p-5 lg:p-10">
           <div className="relative flex items-center justify-between p-5 flex-col-reverse md:flex-row">
           <div className="left_text text-xl mt-5 md:mt-14  lg:mt-0">
           <BsStars className=""/>
           <p>Lorem ipsum </p>
           <p>Lorem ipsum dolor sit amet   </p>
           </div>
           <div className="right_text text-md lg:text-xl flex items-center justify-end gap-4 mt-28 md:mt-14 lg:mt-0">
            <Link className="border-2 hover:bg-[#022D29] hover:text-slate-400 hover:border-0 border-black rounded-3xl px-3 py-1 md:px-6 md:py-2 lg:px-9 lg:py-3 text-black flex gap-1 items-center">Explore more <IoArrowUpSharp className="rotate-45 "/> </Link>
            <Link className="bg-[#022D29] hover:bg-transparent hover:border-2 hover:text-[#022D29] hover:border-[#022D29] text-slate-400 rounded-3xl md:px-6 md:py-2  px-3 py-1 lg:px-9 lg:py-3  flex gap-1 items-center">Work With Us</Link>
           </div>
           <div className="text_card absolute md:left-[40%] lg:left-[33%] shadow-lg bg-white rounded-3xl p-10 lg:w-1/4 w-11/12 md:w-1/2 -top-28  z-20">
           <p> lorem ipsum dolor sit amet  lorem ipsum dolor sit amet   lorem ipsum dolor sit amet  lorem ipsum dolor sit amet lorem ipsum dolor sit amet  lorem ipsum dolor sit amet </p>

           </div>


           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Urban;
