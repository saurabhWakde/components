import React, { useState } from 'react';
import Image from './assets/slide1.jpg';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='mt-5'>
      <div className='faq_section p-10 grid grid-cols-2 gap-8 auto-rows-auto '>
        <div className='faqs_content col-span-2 order-2 md:col-span-1 lg:order-1'>
          <div className='faq_header lg:w-1/2'>
            <h1 className='text-2xl md:text-4xl font-bold'>Frequently Asked Questions</h1>
            <p className='text-sm lg:text-md text-slate-500 mt-5'>Everything you need to know about Nagpals Kitchen</p>
          </div>
          <div className='faqs mt-5'>
            <div className="relative mb-3">
              <h6 className="mb-0">
                <button
                  className="relative flex items-center w-full py-5 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                  onClick={() => toggleAccordion(1)}
                >
                  <span>What are your opening hours?</span>
                  {openIndex === 1 ? (
                    <FaMinus className="absolute right-0 pt-1 text-lg rounded-full bg-blue-500 p-1 text-white" />
                  ) : (
                    <FaPlus className="absolute right-0 pt-1 text-lg rounded-full bg-blue-500 p-1 text-white" />
                  )}
                </button>
              </h6>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === 1 ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                  Nagpals Kitchen is open from 9:00 AM to 10:00 PM, Monday through Sunday.
                </div>
              </div>
            </div>
            <div className="relative mb-3">
              <h6 className="mb-0">
                <button
                  className="relative flex items-center w-full py-5 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                  onClick={() => toggleAccordion(2)}
                >
                  <span>Do you offer vegan options?</span>
                  {openIndex === 2 ? (
                    <FaMinus className="absolute right-0 pt-1 text-lg rounded-full bg-blue-500 p-1 text-white" />
                  ) : (
                    <FaPlus className="absolute right-0 pt-1 text-lg rounded-full bg-blue-500 p-1 text-white" />
                  )}
                </button>
              </h6>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === 2 ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                  Yes, we have a variety of vegan options available. Check our menu for more details.
                </div>
              </div>
            </div>
            <div className="relative mb-3">
              <h6 className="mb-0">
                <button
                  className="relative flex items-center w-full py-5 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                  onClick={() => toggleAccordion(3)}
                >
                  <span>Do you offer delivery services?</span>
                  {openIndex === 3 ? (
                    <FaMinus className="absolute right-0 pt-1 text-lg rounded-full bg-blue-500 p-1 text-white" />
                  ) : (
                    <FaPlus className="absolute right-0 pt-1 text-lg rounded-full bg-blue-500 p-1 text-white" />
                  )}
                </button>
              </h6>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === 3 ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                  Yes, we offer delivery services through various platforms. You can order online via our website or popular food delivery apps.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='image_section h-full w-full max-h-[250px] md:max-h-[420px] lg:max-h-[360px] order-1 md:order-2 col-span-2 md:col-span-1 rounded-3xl md:rounded-none overflow-hidden'>
          <div className='w-full h-full'>
            <img src={Image} alt="image" className='w-full h-full object-cover ' />
          </div>
        </div>
        <div className='contact_us order-3 col-span-2'>
          <span className='text-sm md:text-md text-slate-500 flex items-center gap-2'>Still have questions? <Link className='text-purple-700 hover:underline'>Contact Us</Link> </span>
        </div>
      </div>
    </div>
  );
};

export default Faq;
