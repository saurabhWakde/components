import React from 'react';
import { Link } from 'react-router-dom';

import { IoIosArrowRoundForward } from "react-icons/io";
import Slide1 from "./assets/slide1.jpg";
import Slide2 from "./assets/slide2.jpg";
import Slide3 from "./assets/slide3.jpg";
import Profile from './assets/user.jpg'

const Ngo = () => {
  return (
    <div>
      <div className="ngo_container flex shadow-lg w-[90%] m-auto  p-10 rounded-lg mt-16">
        <div className="logo_container w-1/12 flex items-center flex-col justify-between">
          <div className='w-[5rem] h-[5rem] rounded-full overflow-hidden bg-[#D6E5BE] text-center'>
          <img src={Profile} alt="profile" className="w-full h-full" />
          </div>
         <div className='w-[5rem] h-[5rem] rounded-full overflow-hidden bg-[#D6E5BE] relative'>
         <span className='w-[3rem] h-[3rem] rounded-full overflow-hidden bg-[#fff] right-1 absolute bottom-0'></span>
         </div>
        </div>
        <div className="flex gap-8 h-[750px] w-full">
        <div className="preview_container w-[55%]  mt-20 pb-10">
          <div className="img_preview relative w-full h-full rounded-lg">
            <div className="w-full h-full rounded-3xl overflow-hidden">
              <img src={Slide1} alt="Slide" className="w-full h-full " />
            </div>
            <div className="absolute top-0 left-0 w-1/2 bg-white flex p-3 items-end rounded-br-3xl text-3xl z-10">
              <h1>Explore our solutions</h1>
              <span className="material-symbols-outlined rotate-45">
                <Link><IoIosArrowRoundForward className="text-[3rem]" /></Link>
              </span>
            </div>
          </div>
        </div>
        <div className="content_container w-[45%]">
          <div className="slide_container">
            <div className="slide_range_div   w-full">
              <div className="slides  flex gap-10  w-full items-center">
              <div className="slide_range h-1 bg-slate-900 rounded-lg w-full"></div>
              <div className="slide_range&count  w-full flex gap-1 items-center">
               <div className="h-1 bg-slate-900 rounded-lg w-full"></div>

              <div className=" text-2xl font-bold font-sans">
                02
              </div>
              </div>
              <div className="slide_range h-1 bg-slate-900 rounded-lg w-full"></div>
              </div>
              
            </div>
          </div>
          <div className="slides_images_container flex gap-5 h-1/4 mt-12 ">
            <div className="slide_image w-2/3 h-full">
              <img
                src={Slide2}
                alt="Slide"  className="w-full h-full object-cover rounded-3xl cursor-pointer "/>
               
            </div>
            <div className="slide_image w-1/3 h-full ">
              <img
                src={Slide3}
                alt="Slide" className="w-full h-full object-cover rounded-3xl cursor-pointer"
                />
            </div>
          </div>
          <div className="content bg-[#D6E5BE] p-5 pr-28 rounded-3xl h-1/4 mt-8 relative">
            <h1 className="text-3xl font-bold font-sans ">80% Energy Efficiency</h1>
            <div className=" font-sans font-semibold  mt-2">
            <p className="text-left">we provide 80% energy efficiency solution for your home energy consumption m</p>
            </div>
            <div className="arrow_div  p-5 absolute right-0 bottom-1 rotate-45 ">
             <Link> <IoIosArrowRoundForward className="text-[3rem] text-slate-900 rounded-[50%] border-1  border-slate-900 border-2" /></Link>

            </div>
            
          </div>
          <div className='testimonials mt-8 flex w-full h-1/4  rounded-3xl  items-center'>
            <div className='profile  w-1/2 h-3/4 xl:w-[8rem] xl:h-[8rem]   rounded-[50%] overflow-hidden border-4 border-[#F2EFE8] z-10 '>
              <img src={Profile} alt='user' className='w-full h-full ' />
            </div>
            <div className='details bg-[#F2EFE8] p-5 rounded-[2.5rem] ml-[-1rem] z-0 h-full flex flex-col justify-between'>
             <div className='flex'>
             <div className='commas text-3xl font-bold'>""</div>
            <div className='message mx-1'>
              <p>we provide 80% energy efficiency solution for your home energy consumption m</p>
            </div>
             </div>
            <div className='name'>Shubham,Author</div>
            </div>
          </div>

        </div>
        </div>
      </div>
    </div>
  );
};

export default Ngo;
