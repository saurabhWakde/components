import React from 'react'
import { Link } from 'react-router-dom'
import Sofa from './assets/sofa.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const StoreLocator = () => {
  return (
   <div className="relative bg-gray-800 text-white p-8 rounded-3xl flex flex-col lg:flex-row justify-around  gap-10  w-11/12 m-auto h-1/2 py-20 mt-10">
   <div className="flex flex-col w-full   lg:w-1/2 ">
       <h2 className="text-4xl lg:text-[3rem] font-semi-bold mb-2 leading-snug">Catch Our Updates</h2>
       <p className="mb-4">Be the first to know about our latest designs and inspirations. Sign up for exclusive insights!</p>
       <Link className="max-w-[12rem] lg:w-1/2 bg-[#BBE198] text-black py-2 px-4 rounded flex justify-between items-center">
           Get In Touch <MdOutlineKeyboardArrowRight className='border-2 border-slate-900 rounded-full text-lg' />
       </Link>
   </div>
   <div className="relative w-full">
       <div className="text-center lg:mr-6">
           <h2 className="text-4xl lg:text-[4rem] font-bold text-center leading-normal lg:-mt-10 mt-5">STORE LOCATOR</h2>
       </div>
      
       <div className='image_container   z-10 lg:absolute left-10 w-full h-auto top-20  p-0 lg:m-0 mt-5'>
       <img src={Sofa} alt="sofa" className="w-full h-full"/>
        
       </div>
   </div>
</div>
  )
}

export default StoreLocator
