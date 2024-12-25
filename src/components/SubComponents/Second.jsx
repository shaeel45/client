import React from 'react'
import { IoMdCheckmark } from "react-icons/io";


function Second() {
  return (
    <div className=' grid grid-cols-3 gap-4 max-w-[1300px] mx-auto mt-16 mb-[10rem] px-3 '>
        <div className=' relative '>
            <h2 className=' absolute md:text-[7rem] text-gray-300 leading-none top-[-10%] md:top-[-20%] text-[6rem] -left-5 lg:left-[-10%] font-bold opacity-30 select-none '>01</h2>
            <h3 className=' text-[1.7rem] font-medium text-[#0372BF] '>Innovate</h3>
            <p className=' font-light my-3 leading-7 line-clamp-4 '>Transform ideas into reality by pushing boundaries, embracing change, and discovering new solutions that drive progress.</p>
            <div className=' mt-6 flex flex-col gap-3 '>
                <div className=' flex items-center gap-2 '>
                    <IoMdCheckmark className=' text-[1.2rem] text-[#0372BF] '/>
                    <p className=' font-light  '>Customer Experience</p>
                </div>
                <div className=' flex items-center gap-2 '>
                    <IoMdCheckmark className=' text-[1.2rem] text-[#0372BF] '/>
                    <p className=' font-light  '>Product Management</p>
                </div>
                <div className=' flex items-center gap-2 '>
                    <IoMdCheckmark className=' text-[1.2rem] text-[#0372BF] '/>
                    <p className=' font-light  '>Proof of Concept</p>
                </div>
            </div>
        </div>
        <div  className=' relative '>
            <h2 className=' absolute md:text-[7rem] text-gray-300 leading-none top-[-10%] md:top-[-20%] text-[6rem] -left-5 lg:left-[-10%] font-bold opacity-30 select-none '>02</h2>
            <h3 className=' text-[1.7rem] font-medium text-[#0372BF] '>Create</h3>
            <p className=' font-light my-3 leading-7 line-clamp-4 '>Harness creativity to craft meaningful experiences, turning visions into impactful designs, products, and systems with purpose.</p>
            <div className=' mt-6 flex flex-col gap-3 '>
                <div className=' flex items-center gap-2 '>
                    <IoMdCheckmark className=' text-[1.2rem] text-[#0372BF] '/>
                    <p className=' font-light  '>Web Design</p>
                </div>
                <div className=' flex items-center gap-2 '>
                    <IoMdCheckmark className=' text-[1.2rem] text-[#0372BF] '/>
                    <p className=' font-light  '>Branding</p>
                </div>
                <div className=' flex items-center gap-2 '>
                    <IoMdCheckmark className=' text-[1.2rem] text-[#0372BF] '/>
                    <p className=' font-light  '>Web & App Development</p>
                </div>
            </div>
        </div>
        <div className=' relative '>
            <h2 className=' absolute md:text-[7rem] text-gray-300 leading-none top-[-10%] md:top-[-20%] text-[6rem] -left-5 lg:left-[-10%] font-bold opacity-30 select-none '>03</h2>
            <h3 className=' text-[1.7rem] font-medium text-[#0372BF] '>Scale</h3>
            <p className=' font-light my-3 leading-7 line-clamp-4 '>Expand potential by optimizing resources, streamlining processes, and leveraging innovation for exponential growth and lasting success.</p>
            <div className=' mt-6 flex flex-col gap-3 '>
                <div className=' flex items-center gap-2 '>
                    <IoMdCheckmark className=' text-[1.2rem] text-[#0372BF] '/>
                    <p className=' font-light  '>Social Media</p>
                </div>
                <div className=' flex items-center gap-2 '>
                    <IoMdCheckmark className=' text-[1.2rem] text-[#0372BF] '/>
                    <p className=' font-light  '>Paid Campaigns</p>
                </div>
                <div className=' flex items-center gap-2 '>
                    <IoMdCheckmark className=' text-[1.2rem] text-[#0372BF] '/>
                    <p className=' font-light  '>Marketing & SEO</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Second