import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='text-structure mt-52 px-20'>
        {["We Create", "Eye opening", "presentations"].map((item, index)=>{
            return (
              <div className='masker '>
                <div className='w-fit flex items-end overflow-hidden'>
                    {index===1 && (
                    <motion.div intially={{width: 0}} animate={{width: "9vw"}} transition={{ease: [0.76, 0, 0.24,1], duration: 1}}  className='mr-[1vw] w-[8vw] rounded-md h-[5.7vw] relative -top-[1.2vw] bg-red-600'></motion.div>
                   )}
                <h1 className='pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[.75] font-["Founders_Grotesk_X-Condensed"] font-bold'>{item}</h1>
                </div>
                 </div>
            );
            })}
      </div>
      <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
        {[
            "For public and private companies", 
            "From the pitch to IPO"].
            map((items, index)=>(
            <p className='text-md font-light tracking-tigh leading-none '>{items}</p>
        ))}
        <div className='start flex items-center gap-3'>
        <div className='px-5 py-2 border-[1px] border-zinc-500 font-light text-md uppercase rounded-full'>start the poject</div>
        <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-500 font-light rounded-full'>
      <span className='rotate-[45deg]'>
      <FaArrowUpLong />
      </span>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default LandingPage
