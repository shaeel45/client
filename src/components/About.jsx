import React from 'react'
import { SiWebpack } from "react-icons/si";
import { MdWebStories } from "react-icons/md";
import AboutImg from "../assets/AboutImg.webp"
// import AboutImg2 from "../assets/AboutImg.png"

function About() {
  return (
    <div className=' flex sm:flex-row flex-col items-center gap-5 max-w-[1300px] mx-auto my-16 px-3 '>
        <div className=' flex flex-col gap-20 flex-1 sm:order-1 order-2 '>
        <div>
        <h2 className=' text-[2.5rem] mb-3 sm:text-left text-center '>About Us</h2>
        <p className=' text-[1.2rem] leading-8 sm:max-w-[35rem] sm:mx-0 mx-auto sm:text-left text-center text-[#616161] font-light '>GroxiX is a dynamic software company dedicated to delivering innovative digital solutions. We specialize in creating high-performance, scalable software that drives business growth. Our expertise lies in transforming complex challenges into seamless, user-friendly experiences for clients across diverse industries.</p>
        </div>

        <div className=' flex gap-6 '>
        <div className=' flex flex-col gap-4 flex-1 '>
            <SiWebpack className=' text-[2rem] text-[#363636] ' />
            <p className=' text-base text-[#616161] '>At GroxiX, we build high-performance, scalable websites tailored to meet business needs, ensuring responsive designs, smooth navigation, and optimized performance for a superior user experience on all devices.</p>
        </div>
        <div className=' flex flex-col gap-4 flex-1 '>
            <MdWebStories className=' text-[2rem] text-[#363636] '/>
            <p className=' text-base text-[#616161] '>GroxiX delivers custom mobile app solutions, blending intuitive design with robust functionality to create seamless user experiences that engage and empower users, driving business success across various platforms.</p>
        </div>
        </div>
        </div>
        <div className='  flex-1 h-[80%] sm:order-2 order-1 '>
            <img src={AboutImg} alt="" className=' w-full h-full object-cover ' />
        </div>

    </div>
  )
}

export default About