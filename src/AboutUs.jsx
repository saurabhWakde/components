import React from "react";
import { GoNorthStar } from "react-icons/go";
import { TiStarburst } from "react-icons/ti";
import { SlEmotsmile } from "react-icons/sl";
import { IoFlowerOutline } from "react-icons/io5";
import Image from './assets/slide1.jpg'
import Client1 from './assets/clients/1.jpg'
import Client2 from './assets/clients/2.jpg'
import Client3 from './assets/clients/3.jpg'
import Girl from './assets/clients/girl.png'


const AboutUs = () => {
  return (
    <div className="bg-white text-black p-8 rounded-lg flex flex-col items-center mt-20 relative">
     

      <div className="grid grid-cols-12 grid-rows-3 gap-12 w-11/12 m-auto p-5">
        <div className="col-span-12 row-span-1 col-start-1 row-start-1 md:row-start-4 lg:col-span-6 md:row-span-1 lg:row-span-1 lg:col-start-1 lg:row-start-2 lg:absolute lg:w-1/3 lg:top-32">
        <h2 className="text-3xl font-bold mb-4">
        We're a multidisciplinary creative company that redefines brands
      </h2>
      <p className="mb-4">
        We help early-stage founders create brands, clarify vision,
        understand user needs, and quickly deliver amazing experiences. Our
        mindset is one of investment and ownership — our partnership invites
        an equity stake in doing the same for the client.
      </p>
      <p className="mb-6">
        Expressive and enduring digital experiences We help our clients
        accelerate progress, shape outcomes, and envision the future.
      </p>
      <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
        Learn More
      </button>
        </div>
        <div className="col-span-6 col-start-1 row-start-3 md:col-start-1 md:row-start-1  md:col-span-3 row-span-1 lg:col-start-7 lg:row-start-1 w-full h-full flex items-center justify-center">
          <div className="icons_div w-full h-full bg-[#E4EDFE] rounded-[3rem] items-center flex justify-center">
            <GoNorthStar className="bg-[#685FF6] text-white text-[8rem] p-6 rounded-full" />
          </div>
        </div>
        <div className="col-span-6 col-start-7 row-start-3 md:col-start-10 md:row-start-1 md:col-span-3 row-span-1 lg:col-start-10 lg:row-start-2   w-full flex items-start justify-center flex-col">
          <div className="icons_div w-full h-full bg-[#E4EDFE] rounded-[3rem] flex items-center flex-col justify-center ">
          <SlEmotsmile className="bg-[#685FF6] text-white text-[4rem] p-4 rounded-full" />
            <div className="text_div text-center">
          <h1 className="text-3xl font-bold mt-3">3.6 K</h1>
          <p className="text-xl">Happy Clients</p>
          </div>
          </div>
          
        </div>
        <div className="col-start-1 row-start-4 col-span-6   md:col-span-3 row-span-1 md:col-start-10 md:row-start-2 lg:col-start-10 lg:row-start-3 ">
        <div className="icons_div w-full h-full bg-[#E4EDFE] rounded-[3rem] items-center flex justify-center">
            <IoFlowerOutline className="bg-[#685FF6] text-white text-[8rem] p-6 rounded-full" />
          </div>
        </div>
        <div className="col-start-7 row-start-4 col-span-6 md:col-span-3 md:col-start-6 md:row-start-3  row-span-1 lg:col-start-7 lg:row-start-4  w-full h-full flex items-center justify-center ">
        <div className="icons_div w-full h-full bg-[#E4EDFE] rounded-[3rem] items-center flex justify-center">
            <img src={Image} alt="Slide" className="w-1/2 h-1/2 " />
          </div>
        </div>
        <div className="col-start-4 row-start-5 col-span-6 md:col-start-1 md:row-start-2 md:col-span-3 row-span-1 lg:col-start-4 lg:row-start-3  flex items-center justify-center ">
         <div className="w-full h-full bg-[#E4EDFE] rounded-[3rem] items-center flex justify-center py-5">
          <div className="clients flex flex-col justify-center items-center">
          <div className="rating text-center">
          <h1 className="text-3xl font-bold mt-3">4.9/5</h1>
          <p className="text-lg">Rating</p>
          </div>
          <div className="clinet_images flex w-full justify-center items-center mt-5">
           <div className="client_image rounded-full border-4 border-white w-16 h-16">
            <img src={Client1} alt="Slide" className="w-full h-full object-center rounded-full " />
           </div>
           <div className="client_image rounded-full border-4 border-white w-16 h-16 -ml-5">
           <img src={Client2} alt="Slide" className="w-full h-full object-center rounded-full " />
          </div>
          <div className="client_image rounded-full border-4 border-white w-16 h-16 -ml-5">
          <img src={Client3} alt="Slide" className="w-full h-full object-center rounded-full " />
         </div>

          </div>

          </div>
         
         </div>
        </div>
        <div className="col-span-12 row-span-1 col-start-1 row-start-2 md:col-start-4 md:row-start-1 md:row-span-2 md:col-span-6  lg:col-span-3  lg:col-start-7 lg:row-start-2 mx-auto ">
        <div className="image bg-[#E4EDFE] w-full h-full rounded-3xl items-center flex justify-center p-5">
        <div className="icons_div  flex justify-center ">
        <img src={Girl} alt="Slide" className="md:w-full w-1/2 h-full  " />
      </div>
        </div>
       
        </div>
      </div>
    </div>
    
  );
};

export default AboutUs;
