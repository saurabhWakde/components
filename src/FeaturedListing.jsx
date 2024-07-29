import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaMapMarkerAlt, FaBed, FaBath, FaCar } from "react-icons/fa";
import Flat1 from "./assets/flat1.jpg";
import Flat2 from "./assets/flat2.jpg";
import Flat3 from "./assets/flat3.jpg";

const FeaturedListing = () => {
  return (
    <div className="w-11/12 m-auto p-10 bg-[#111111] shadow-lg rounded-3xl mt-20">
      <div className="flex flex-col md:flex-row md:justify-between mb-8">
        <div className="mb-4 md:mb-0 text-white">
          <h1 className="text-4xl tracking-widest font-bold">Featured Listing</h1>
          <p className="text font-semibold text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 text-white uppercase font-bold">
          <div className="hover:bg-[#E8E100] hover:text-black transition-all rounded-xl py-4 px-8 cursor-pointer border-white border-2 hover:border-none tracking-wide">
            Featured
          </div>
          <div className="hover:bg-[#E8E100] hover:text-black transition-all rounded-xl py-4 px-8 cursor-pointer border-white border-2 hover:border-none">
            For Sale
          </div>
          <div className="hover:bg-[#E8E100] hover:text-black transition-all rounded-xl py-4 px-8 cursor-pointer border-white border-2 hover:border-none">
            For Rent
          </div>
        </div>
      </div>

      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 3 }
        }}
      >
        <SwiperSlide>
          <Card
            price="₹ 10,000"
            title="3 BHK Flat for Sale"
            location="Chembur, Mumbai"
            bed="3"
            bath="All"
            car="Pickup"
            image={Flat3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            price="₹ 20,000"
            title="2 BHK Flat for Sale"
            location="Andheri, Mumbai"
            bed="2"
            bath="2"
            car="Garage"
            image={Flat2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            price="₹ 15,000"
            title="1 BHK Flat for Sale"
            location="Bandra, Mumbai"
            bed="1"
            bath="1"
            car="Street Parking"
            image={Flat3}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const Card = ({ price, title, location, bed, bath, car, image }) => (
  <div className="rounded-3xl overflow-hidden self-start">
    <div className="grid grid-cols-12 grid-rows-subgrid">
      <div className="col-span-7 rounded-t-3xl bg-[#262729] flex items-center">
        <div className="price_tag rounded-t-3xl p-5 pb-0">
          <h1 className="text-3xl font-bold text-[#D1D10F]">{price}</h1>
        </div>
      </div>
      <div className="col-span-5 bg-[#111111] justify-center items-center flex rounded-bl-3xl">
        <div className="arrow">
          <Link to="/" className="p-5">
            <IoIosArrowRoundForward className="text-[4rem] text-white bg-[#262729] rounded-full p-3 -rotate-45 relative ri" />
          </Link>
        </div>
      </div>
    </div>
    <div className="bg-[#262729] rounded-tr-3xl p-5 col-span-2">
      <div className="card_heading text-3xl font-bold text-white">
        <h1>{title}</h1>
      </div>
      <div className="location flex items-center text-sm my-5">
        <FaMapMarkerAlt className="text-3xl text-[#D1D10F]" />
        <p className="ml-2 text-slate-300">{location}</p>
      </div>
      <div className="card_icons flex items-center justify-between my-5">
        <div className="flex items-center gap-2">
          <FaBed className="text-2xl text-[#D1D10F]" />
          <p className="text-slate-300">{bed}</p>
        </div>
        <div className="flex items-center gap-2">
          <FaBath className="text-2xl text-[#D1D10F]" />
          <p className="text-slate-300">{bath}</p>
        </div>
        <div className="flex items-center gap-2">
          <FaCar className="text-2xl text-[#D1D10F]" />
          <p className="text-slate-300">{car}</p>
        </div>
      </div>
      <div className="img_preview w-full rounded-3xl overflow-hidden mt-3">
        <img src={image} alt="flat" className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-all" />
      </div>
    </div>
  </div>
);

export default FeaturedListing;
