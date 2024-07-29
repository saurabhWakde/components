import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaMapMarkerAlt, FaBed, FaBath, FaCar } from "react-icons/fa";
import Flat1 from './assets/flat1.jpg'
import Flat2 from './assets/flat2.jpg'
import Flat3 from './assets/flat3.jpg'

const FeaturedListing = () => {
  return (
    <div className="mt-80 bg-[#111111] p-10 w-11/12 m-auto shadow-lg rounded-3xl">
      <div className="filters flex justify-between items-center">
        <div className="heading_div  text-white">
          <h1 className="heading text-[3rem] tracking-widest font-bold">
            Featured Listing
          </h1>
          <p className="text font-semibold text-slate-400">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
            eiusmod
          </p>
        </div>
        <div className="filter_box flex items-center justify-center gap-5 text-white uppercase font-bold ">
          <div className="hover:bg-[#E8E100] hover:text-black transition-all  rounded-xl py-4 px-8 cursor-pointer border-white border-2 hover:border-none tracking-wide">
            Featured
          </div>
          <div className="hover:bg-[#E8E100] hover:text-black transition-all  rounded-xl py-4 px-8 cursor-pointer border-white border-2 hover:border-none">
            For Sale
          </div>
          <div className="hover:bg-[#E8E100] hover:text-black transition-all  rounded-xl py-4 px-8 cursor-pointer border-white border-2 hover:border-none">
            For Rent
          </div>
        </div>
      </div>
      <div className="featured_cards grid grid-cols-3 gap-10 text-white mt-20">
        <div className=" p-4">
          <div className="cursor_div flex itesms-center gap-10">
            <div className="price_tag rounded-t-3xl  bg-[#262729] w-2/3 p-5 ">
              <h1 className="text-[3rem] font-bold text-[#D1D10F]">₹ 10,000</h1>
            </div>
            <div className="arrow ">
              <Link to="/" className="p-5">
                <IoIosArrowRoundForward className="text-[5rem] bg-[#262729] rounded-full p-3 -rotate-45 relative" />
              </Link>
            </div>
          </div>
          <div className="card_content rounded-b-3xl rounded-tr-3xl  bg-[#262729] relative z-30 border-3 border-[#262729] px-5 pb-5">
            <div className="card_heading text-[2rem] font-bold ">
              <h1>3 BHK Flat for Sale</h1>
            </div>
            <div className="location flex items-center text-sm mt-3">
              <FaMapMarkerAlt className="text-[1.5rem] text-[#D1D10F]" />
              <p className="ml-2 text-slate-300">Chembur, Mumbai</p>
            </div>
            <div className="card_icons flex items-center justify-between mt-3 ">
              <div className="flex items-center gap-2">
                <FaBed className="text-[1.5rem] text-[#D1D10F]" />
                <p className="text-slate-300">3</p>
              </div>
              <div className="flex items-center gap-2">
                <FaBath className="text-[1.5rem] text-[#D1D10F]" />
                <p className="text-slate-300">All</p>
              </div>
              <div className="flex items-center gap-2">
                <FaCar className="text-[1.5rem] text-[#D1D10F]" />
                <p className="text-slate-300">Pickup</p>
              </div>
            </div>
            <div className="img_preview w-full h-[15rem] rounded-3xl overflow-hidden mt-3">
              <img src={Flat1} alt="flat1" className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-all" />
            </div>
          </div>
        </div>
        <div className=" p-4">
          <div className="cursor_div flex itesms-center gap-10">
            <div className="price_tag rounded-t-3xl  bg-[#262729] w-2/3 p-5 ">
              <h1 className="text-[3rem] font-bold text-[#D1D10F]">₹ 10,000</h1>
            </div>
            <div className="arrow ">
              <Link to="/" className="p-5">
                <IoIosArrowRoundForward className="text-[5rem] bg-[#262729] rounded-full p-3 -rotate-45 relative" />
              </Link>
            </div>
          </div>
          <div className="card_content rounded-b-3xl rounded-tr-3xl  bg-[#262729] relative z-30 border-3 border-[#262729] px-5 pb-5">
            <div className="card_heading text-[2rem] font-bold ">
              <h1>3 BHK Flat for Sale</h1>
            </div>
            <div className="location flex items-center text-sm mt-3">
              <FaMapMarkerAlt className="text-[1.5rem] text-[#D1D10F]" />
              <p className="ml-2 text-slate-300">Chembur, Mumbai</p>
            </div>
            <div className="card_icons flex items-center justify-between mt-3 ">
              <div className="flex items-center gap-2">
                <FaBed className="text-[1.5rem] text-[#D1D10F]" />
                <p className="text-slate-300">3</p>
              </div>
              <div className="flex items-center gap-2">
                <FaBath className="text-[1.5rem] text-[#D1D10F]" />
                <p className="text-slate-300">All</p>
              </div>
              <div className="flex items-center gap-2">
                <FaCar className="text-[1.5rem] text-[#D1D10F]" />
                <p className="text-slate-300">Pickup</p>
              </div>
            </div>
            <div className="img_preview w-full h-[15rem] rounded-3xl overflow-hidden mt-3">
              <img src={Flat3} alt="flat3" className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-all" />
            </div>
          </div>
        </div>
        <div className=" p-4">
        <div className="cursor_div flex itesms-center gap-10">
          <div className="price_tag rounded-t-3xl  bg-[#262729] w-2/3 p-5 ">
            <h1 className="text-[3rem] font-bold text-[#D1D10F]">₹ 10,000</h1>
          </div>
          <div className="arrow ">
            <Link to="/" className="p-5">
              <IoIosArrowRoundForward className="text-[5rem] bg-[#262729] rounded-full p-3 -rotate-45 relative" />
            </Link>
          </div>
        </div>
        <div className="card_content rounded-b-3xl rounded-tr-3xl  bg-[#262729] relative z-30 border-3 border-[#262729] px-5 pb-5">
          <div className="card_heading text-[2rem] font-bold ">
            <h1>3 BHK Flat for Sale</h1>
          </div>
          <div className="location flex items-center text-sm mt-3">
            <FaMapMarkerAlt className="text-[1.5rem] text-[#D1D10F]" />
            <p className="ml-2 text-slate-300">Chembur, Mumbai</p>
          </div>
          <div className="card_icons flex items-center justify-between mt-3 ">
            <div className="flex items-center gap-2">
              <FaBed className="text-[1.5rem] text-[#D1D10F]" />
              <p className="text-slate-300">3</p>
            </div>
            <div className="flex items-center gap-2">
              <FaBath className="text-[1.5rem] text-[#D1D10F]" />
              <p className="text-slate-300">All</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCar className="text-[1.5rem] text-[#D1D10F]" />
              <p className="text-slate-300">Pickup</p>
            </div>
          </div>
          <div className="img_preview w-full h-[15rem] rounded-3xl overflow-hidden mt-3">
            <img src={Flat2} alt="flat2" className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-all" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FeaturedListing;
