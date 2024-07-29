import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMenu } from 'react-icons/fa'
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiMenuAlt2 } from "react-icons/hi";
import bg from './assets/bg.jpg'
import Clients from './assets/user.jpg'
const Testimonial = () => {
  return (
    <div className='w-11/12 mt-20 m-auto bg-[#111111] flex items-center h-[850px] rounded-3xl mb-20 p-5'>
    <div className='left_contaier flex flex-col w-2/6 p-10 pb-2 h-full justify-between'>
    <div className='logo text-white'>logo</div>
    <div className='text-[3rem] text-white font-semibold'>
    <h1 className='uppercase'>Develop Your 3D designs with Ai</h1>
    <p className='text-[1.5rem] text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, voluptate.</p>
    </div>
    <div className='social_icons flex gap-3 items-center '>
       <div className='icon bg-[#6668F1] p-2 rounded-full'>
        <FaFacebook className='text-[2rem] '/>
       </div>
       <div className='icon bg-[#6668F1] p-2 rounded-full'>
        <FaTwitter className='text-[2rem] '/>
       </div>
       <div className='icon bg-[#6668F1] p-2 rounded-full'>
        <FaInstagram className='text-[2rem] '/>
       </div>
       <div className='icon bg-[#6668F1] p-2 rounded-full'>
        <FaLinkedin className='text-[2rem] '/>
       </div>
    </div>
    </div>
    <div
    className="right_container flex flex-col justify-end   w-2/3 h-full relative z-0 p-5 rounded-3xl"
    
  >
   <img className='bg-cover w-full h-full overflow-hidden rounded-3xl' src={bg} alt="bg" />
   <div className='login_section w-1/2 flex absolute z-0 bg-[#111111] gap-3 justify-end -top-5 right-2 p-5 rounded-bl-3xl'>
   <div className='py-4 px-8 rounded-3xl border-2 border-[#6668F1] '>
   <button className='w-1/2 text-white   '>Login</button>
   </div>
   <div className='py-4 px-8 rounded-3xl border-2 border-[#6668F1] '>
   <button className='w-1/2 text-white   '>Login</button>
   </div>
   <div className=''>
   <button className=' text-black   rounded-full bg-[#C7F962] p-5'><HiMenuAlt2 className='text-[1.5rem]' /></button>
   </div>
   

   
   </div>
   <div className="content grid grid-cols-1 gap-5 absolute top-28 w-1/2 right-10 rounded-tr-3xl p-5">
   <div className="bg-transparent shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-2xl rounded-3xl p-5">
     <div className="text-3xl text-black">
       <h1>100k +</h1>
     </div>
     <p>100k happy customers we have</p>
     <div className="arrow flex justify-end">
       <Link to="/">
         <IoIosArrowRoundForward className="text-[3rem] bg-[#ffff] rounded-full p-2 -rotate-45 relative border-[#6668F1] border-4" />
       </Link>
     </div>
   </div>
   <div className="bg-transparent shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-2xl rounded-3xl p-5">
     <div className="text-3xl text-black">
       <h1 className='uppercase'>Testimonials</h1>
     </div>
     <div className='clients mt-4 flex '>
     <div className='image_div w-[4rem] h-[4rem] -ml-2'>
     <img src={Clients} alt="clients" className='w-full h-full rounded-full' />
     </div>
     <div className='image_div w-[4rem] h-[4rem]  -ml-2'>
     <img src={Clients} alt="clients" className='w-full h-full rounded-full' />
     </div>
     <div className='image_div w-[4rem] h-[4rem]  -ml-2'>
     <img src={Clients} alt="clients" className='w-full h-full rounded-full' />
     </div>
     </div>
     <div className="arrow flex justify-end">
       <Link to="/">
         <IoIosArrowRoundForward className="text-[3rem] bg-[#111111] rounded-full p-2 text-white -rotate-45 relative border-[#C7F962] border-4" />
       </Link>
     </div>
   </div>
   <div className="bg-transparent shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-2xl rounded-3xl p-5">
    <div className='pr-20'>
    <div className="text-3xl text-black uppercase">
    <h1>Automated 3d modeling</h1>
  </div>
  <p className='leading-5 text-justify'> Generate 3d models from 3d scans and 3d scans Generate 3d models from 3d scans and 3d scans Generate 3d models from 3d scans and 3d scans hjbsahjdbsjbfjsdf </p>
    </div>
     <div className="arrow flex justify-end">
       <Link to="/">
         <IoIosArrowRoundForward className="text-[3rem] bg-[#ffff] rounded-full p-2 -rotate-45 relative border-[#6668F1] border-4" />
       </Link>
     </div>
   </div>
 </div>
 <div className='absolute bottom-0 left-0 bg-[#111111]  z-50 p-2 w-1/4 rounded-tr-3xl'>
    <div className='get_in_touch flex items-center  rounded-3xl gap-5 bg-[#6668F1]'>
      <Link to="/" className='text'>
        <IoIosArrowRoundForward className="text-[3rem] bg-[#ffff] rounded-full p-2 -rotate-45 relative border-[#6668F1] border-4" />
      </Link>
      <span className='text-white uppercase text-xl'>Get in touch</span>
    </div>
 </div>
  </div>
     
    </div>
  )
}

export default Testimonial
