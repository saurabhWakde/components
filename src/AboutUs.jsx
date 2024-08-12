import React from "react";
import { GoNorthStar } from "react-icons/go";
import { TiStarburst } from "react-icons/ti";
import { SlEmotsmile } from "react-icons/sl";
import { IoFlowerOutline } from "react-icons/io5";
import Image from "./assets/bg-remove.png";
import Client1 from "./assets/clients/1.jpg";
import Client2 from "./assets/clients/2.jpg";
import Client3 from "./assets/clients/3.jpg";
import Girl from "./assets/clients/girl.png";

const AboutUs = () => {
  return (
    <div>
  
      <div className="about_section smd:w-11/12  w-full   my-20 m-auto ">
        <div className="grid grid-rows-12 xs:grid-rows-3 md:grid-rows-5 lg:grid-rows-12  grid-cols-12 gap-4 xs:gap-8 lg:gap-8 w-full p-5">
          <div className="content col-span-12 row-span-3 xsm:row-span-1 md:row-span-1 xs:row-span-1  col-start-1 row-start-1 lg:col-span-6 lg:col-start-1 lg:row-span-6 lg:row-start-2 p-4">
            <h2 className="text-lg xs:text-xl xsm:text-2xl font-bold mb-4">
              We're a multidisciplinary creative company that redefines brands
            </h2>
            <p className="mb-3 text-sm xs:text-lg xsm:text-xl">
              We help early-stage founders create brands, clarify vision,
              understand user needs, and quickly deliver amazing experiences.
              Our mindset is one of investment and ownership — our partnership
              invites an equity stake in doing the same for the client.
            </p>
            <p className="mb-3 text-sm xs:text-lg xsm:text-xl">
              Expressive and enduring digital experiences We help our clients
              accelerate progress, shape outcomes, and envision the future.
            </p>
            <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
              Learn More
            </button>
          </div>
          <div className="inner_image  col-span-12 row-span-3 xs:row-span-2 col-start-1 row-start-4   sm:row-start-2 lg:col-span-3 lg:row-span-6 lg:col-start-7 lg:row-start-4">
            <div className="image_container bg-[#685FF6] rounded-3xl overflow-hidden h-full">
              <img
                src={Girl}
                alt="Slide"
                className="w-full h-full object-cover xs:object-contain"
              />
            </div>
          </div>
          <div className="box-1  col-span-6 row-span-2 xs:row-span-1 xs:h-[14rem] sm:h-[16rem] xmd:h-[18rem] md:h-[22rem] lg:h-[15rem] lg:col-span-3 lg:row-span-3 lg:col-start-7 lg:row-start-1 bg-[#E4EDFE] rounded-3xl ">
            <div className="icons_div w-full h-full  items-center flex justify-center">
              <GoNorthStar className="bg-[#685FF6] text-white text-[6rem] xsm:text-[8rem] p-6 rounded-full" />
            </div>
          </div>
          <div className="box-2  col-span-6 row-span-2 xs:row-span-1 xs:h-[14rem] sm:h-[16rem] xmd:h-[18rem] md:h-[22rem] lg:h-[15rem]  lg:col-span-3 lg:row-span-3 lg:col-start-10 lg:row-start-4 bg-[#E4EDFE] rounded-3xl">
            <div className="icons_div w-full h-full  flex items-center flex-col justify-center ">
              <SlEmotsmile className="bg-[#685FF6] text-white text-[4rem] xsm:text-[6rem] p-4 rounded-full" />
              <div className="text_div text-center">
                <h1 className="text-xl font-bold mt-3">3.6 K</h1>
                <p className="text-lg">Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="box-3  col-span-6 row-span-2 xs:row-span-1 xs:h-[14rem] sm:h-[16rem] xmd:h-[18rem] md:h-[22rem]  lg:h-[15rem]  lg:col-span-3 lg:row-span-3 lg:col-start-10 lg:row-start-7 bg-[#E4EDFE] rounded-3xl">
          <div className="icons_div w-full h-full  items-center flex justify-center">
              <IoFlowerOutline className="bg-[#685FF6] text-white text-[6rem] xsm:text-[6rem] md:text-[8rem] p-6 rounded-full" />
            </div>
          </div>
          <div className="box-4  col-span-6 row-span-2 xs:row-span-1 xs:h-[14rem] sm:h-[16rem] xmd:h-[18rem] md:h-[22rem] lg:h-[15rem]  lg:col-span-3 lg:row-span-3 lg:col-start-7 lg:row-start-10 bg-[#E4EDFE] rounded-3xl">
          <div className="icons_div w-full h-full items-center flex justify-center ">
          <img src={Image} alt="Slide" className="h-full w-full" />
        </div>
          </div>
          <div className="box-5  col-span-12 xs:col-span-6 row-span-2 xs:row-span-1 xs:h-[14rem] sm:h-[16rem] md:h-[22rem] xmd:h-[18rem] lg:h-[15rem]  col-start-1 xs:col-start-4 lg:col-span-3 lg:row-start-7  lg:row-span-3 lg:col-start-4 bg-[#E4EDFE] rounded-3xl">
          <div className="w-full h-full  items-center flex justify-center ">
          <div className="clients flex flex-col justify-center items-center">
            <div className="rating text-center">
              <h1 className="text-3xl font-bold mt-3">4.9/5</h1>
              <p className="text-lg">Rating</p>
            </div>
            <div className="clinet_images flex w-full justify-center items-center mt-5">
              <div className="client_image rounded-full border-4 border-white w-16 h-16">
                <img
                  src={Client1}
                  alt="Slide"
                  className="w-full h-full object-center rounded-full "
                />
              </div>
              <div className="client_image rounded-full border-4 border-white w-16 h-16 -ml-5">
                <img
                  src={Client2}
                  alt="Slide"
                  className="w-full h-full object-center rounded-full "
                />
              </div>
              <div className="client_image rounded-full border-4 border-white w-16 h-16 -ml-5">
                <img
                  src={Client3}
                  alt="Slide"
                  className="w-full h-full object-center rounded-full "
                />
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

export default AboutUs;
