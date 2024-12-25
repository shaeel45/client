import React from 'react'
import PageCoverImg from "../assets/PageCoverImg.webp"
import { MdDoubleArrow } from "react-icons/md";
import ContactImg1 from "../assets/ContactImg1.webp"
import ContactImg2 from "../assets/ContactImg2.webp"
import ContactImg3 from "../assets/ContactImg3.webp"
import { IoIosMailOpen } from "react-icons/io";
import { SlCallIn } from "react-icons/sl";
import { GrMapLocation } from "react-icons/gr";



function Contactp() {
  return (
    <div className='  '>
      <div className=' h-[25rem] w-full relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black/20 '>
      <div className=' absolute bottom-[15%] left-[10%] text-[#fff] font-semibold '>
        <h2 className=' text-[4rem] font-bold '>Contact Us</h2>
        <p className=' flex items-center gap-3 text-[2rem] '>Home <MdDoubleArrow /> Contact</p>
      </div>
        <img src="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2020/07/20162255/iStock-1157887211.jpg" alt="" className='w-full h-full object-cover   ' />
      </div>

      <div className=' max-w-[1300px] p-3 my-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-7  '>

        <div className=' border rounded-lg group  hover:shadow-lg transition-hover duration-300 ease-in-out  '>
          <div className=' relative '>
            <div className=' absolute bottom-[-9%] md:bottom-[-16%] left-0 w-full h-full flex items-end justify-center z-50   '>
              <div className=' sm:p-7 p-4 md:p-5 lg:p-7 rounded-lg bg-[#fff] shadow-lg'>
              <IoIosMailOpen className=' text-[#0372BF]  text-[2.6rem] transition-transform duration-500 transform group-hover:rotate-[360deg] ' />
              </div>
            </div>
          <img src={ContactImg1} alt="" className=' relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black/80 before:z-50 z-30 ' />
          </div>
          <div className=' pb-6 pt-16 px-3  text-center font-semibold flex flex-col gap-2 '>
            <h3 className=' text-[1.5rem]   '>Send us Email</h3>
            <p className=' text-[1.1rem] text-[#4b4b4b] '>developer.growix@gmail.com</p>
          </div>
        </div>

        <div className=' border rounded-lg group  hover:shadow-lg transition-hover duration-300 ease-in-out  '>
          <div className=' relative '>
            <div className=' absolute  bottom-[-9%] md:bottom-[-16%] left-0 w-full h-full flex items-end justify-center z-50   '>
              <div className='  sm:p-7 p-4 md:p-5 lg:p-7 rounded-lg bg-[#fff] shadow-lg'>
              <SlCallIn className=' text-[#0372BF]  text-[2rem] transition-transform duration-500 transform group-hover:rotate-[360deg] ' />
              </div>
            </div>
          <img src={ContactImg3} alt="" className=' relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black/40 before:z-50 z-30 ' />
          </div>
          <div className=' pb-6 pt-16 px-3  text-center font-semibold flex flex-col gap-2 '>
            <h3 className=' text-[1.5rem]   '>Call us</h3>
            <p className=' text-[1.1rem] text-[#4b4b4b] '>+8801787357433</p>
          </div>
        </div>

        <div className=' border rounded-lg group hover:shadow-lg transition-hover duration-300 ease-in-out  '>
          <div className=' relative '>
            <div className=' absolute  bottom-[-9%] md:bottom-[-16%] left-0 w-full h-full flex items-end justify-center z-50   '>
              <div className='  sm:p-7 p-4 md:p-5 lg:p-7 rounded-lg bg-[#fff] shadow-lg '>
              <GrMapLocation className=' text-[#0372BF]  text-[2.3rem] transition-transform duration-500 transform group-hover:rotate-[360deg] ' />
              </div>
            </div>
          <img src={ContactImg2} alt="" className=' rounded-t-lg relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black/40 before:z-50 z-30 ' />
          </div>
          <div className=' pb-6 pt-16 px-3  text-center font-semibold flex flex-col gap-2 '>
            <h3 className=' text-[1.5rem]   '>Visit our office</h3>
            <p className=' text-[1.1rem] text-[#4b4b4b] '>SM Squad Road, Savar 1340, Savar, Dhaka</p>
          </div>
        </div>
        
      </div>



      <div className=' max-w-[1300px] mx-auto '>

        <div className=' text-center '>
          <h3 className=' text-[3rem] font-bold text-[#464646] '>Drop us a line</h3>
          <p className=' text-[#616161] '>GrowiX Inc will arrange your first business consultation totally free of cost</p>
        </div>

        <div className=' px-[10%] py-[5%] bg-slate-100 mt-10 '>
          <div className=' flex flex-col gap-3 '>

            <div className=' flex items-center gap-5 '>
              <input type="text" placeholder='Enter Name*' className=' w-full py-3 text-[1.1rem] px-3 rounded-md outline-none ' />
              <input type="text" placeholder='Enter Email Address*' className=' w-full py-3 text-[1.1rem] px-3 rounded-md outline-none ' />
            </div>
            <div className=' flex items-center gap-5 '>
              <input type="text" placeholder='Enter Phone No*' className=' w-full py-3 text-[1.1rem] px-3 rounded-md outline-none ' />
              <input type="text" placeholder='Enter Subject*' className=' w-full py-3 text-[1.1rem] px-3 rounded-md outline-none ' />
            </div>
            <div>
              <textarea name="" id="" rows={10} placeholder=' Enter Message* '  className=' w-full py-3 text-[1.1rem] px-3 rounded-md outline-none ' ></textarea>
            </div>

            <button className=' text-[1.2rem] font-semibold text-center w-full py-3 rounded-md bg-[#0372BF] text-[#fff] uppercase mt-10 '>Send Message</button>

          </div>
        </div>

      </div>



    </div>
  )
}

export default Contactp