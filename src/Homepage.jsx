import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import LeftBanner from "./assets/LeftBanner.jpg";
import Client1 from "./assets/clients/1.jpg";
import Client2 from "./assets/clients/2.jpg";
import Client3 from "./assets/clients/3.jpg";
import Client4 from "./assets/clients/4.jpg";
import Lamp from "./assets/lamp.png";
import RightBanner from "./assets/RightBanner.jpg";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="bg-white  w-full p-5 m-0 grid grid-cols-12  gap-8 ">
      <div className="rounded-[1.5rem] overflow-hidden col-span-12  lg:col-span-3 h-[350px] lg:h-full ">
        <img src={LeftBanner} alt="LeftBanner" className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-8 h-full col-span-12 lg:col-span-4">
        <div className="bg-gradient-to-br from-[#D8E8C4] to-[#F6F8D3] rounded-[1.5rem] p-6 ">
          <div className="heading">
            <h1 className="text-4xl font-bold text-[#1A2829] capitalize">
              Your space
            </h1>
            <h1 className="text-4xl font-bold text-[#1A2829] capitalize">
              Your style
            </h1>
          </div>
          <div className="flex justify-between items-center bg-[#F0F5DF] h-20 w-3/4 md:w-2/5 lg:w-2/3 rounded-lg mt-4">
            <div className="w-[70%] flex items-center p-4 relative">
              <div className="absolute w-10 h-10 left-4">
                <img
                  src={Client1}
                  alt="Client1"
                  className="w-full h-full rounded-full border-2 border-white"
                />
              </div>
              <div className="absolute w-10 h-10 left-[2.3rem]">
                <img
                  src={Client2}
                  alt="Client2"
                  className="w-full h-full rounded-full border-2 border-white"
                />
              </div>
              <div className="absolute w-10 h-10 left-[3.6rem]">
                <img
                  src={Client3}
                  alt="Client3"
                  className="w-full h-full rounded-full border-2 border-white"
                />
              </div>
              <div className="absolute w-10 h-10 left-[4.9rem]">
                <img
                  src={Client4}
                  alt="Client4"
                  className="w-full h-full rounded-full border-2 border-white"
                />
              </div>
            </div>
            <div className="text-[#FC7A3E] font-bold text-[1.1rem] mx-2">
              <span>67k</span> clients globally
            </div>
          </div>
          <div className="relative mt-4">
            <div className="w-[70%]">
              <p className="text-[#1A2829] text-base font-normal">
                We excel in innovation and problem-solving, transforming
                challenges into boundless possibilities.
              </p>
            </div>
            <div className="absolute md:top-6 top-12 -right-6  h-full px-4 py-2 rounded-tl-[2rem] bg-white">
              <Link>
                <IoIosArrowRoundForward className="text-5xl p-2 text-white bg-[#1A2829] font-light rounded-full rotate-[-45deg]" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4 h-[40%] w-full">
          <div className="relative bg-[#E9E9E9] p-4 rounded-lg backdrop-blur-lg w-1/2 h-full box-border">
            <p className="w-[70%] text-base font-normal">
              Ready to bring your vision to life?
            </p>
            <img src={Lamp} alt="Lamp" className="absolute top-0 right-0 w-1/2" />
            <p className="text-base font-normal">
              +131 <span className="font-bold">5610</span> 7540
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#FFDAC7] to-[#FEFAF7] text-[#1A2829] backdrop-blur-lg p-4 box-border rounded-lg text-center w-1/2 h-full">
            <div className="p-4 box-border">
              <p className="text-5xl font-extrabold leading-[2rem] my-4">
                622k
              </p>
              <p className="text-base font-normal m-0 p-0">
                Accomplished Projects
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-[1.5rem] overflow-hidden col-span-12  lg:col-span-5  mt-6 lg:mt-0 h-[350px] lg:h-full ">
        <img src={RightBanner} alt="RightBanner" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Homepage;
