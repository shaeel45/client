import React from 'react'
import { RiAdminFill } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { BiSolidComment } from "react-icons/bi";


function Blog({img}) {
  return (
    <div  style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=' max-w-[27rem] mx-auto sm:mt-0 mt-4 group overflow-hidden ' >
        <div className=' relative '>
            <div className=' absolute z-[70] text-[#fff] bg-[#0372BF] w-[6rem] h-[5rem] messageShape flex flex-col gap-1 pt-2 items-center  '> 
                <h4 className=' leading-none text-base '>27</h4>
                <h4 className=' leading-none text-base '>Feb</h4>
            </div>
            <div className=' absolute -bottom-5 w-full mx-auto z-[70] '>
                <div style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }} className=' flex items-center justify-center gap-4  bg-slate-100 rounded-md px-2 w-[80%] mx-auto py-2 '>
                <div className=' flex items-center gap-1 '>
                    <RiAdminFill className=' text-[#0372BF] ' />
                    <p className=' text-[#454545] font-light '>Admin</p>
                </div>
                <div className=' flex items-center gap-1 '>
                    <BiLike className=' text-[#0372BF] ' />
                    <p className=' text-[#454545] font-light '>17k</p>
                </div>
                <div className=' flex items-center gap-1 '>
                    <BiSolidComment className=' text-[#0372BF] ' />
                    <p className=' text-[#454545] font-light '>5k</p>
                </div>
                </div>
            </div>
            <div className=' overflow-hidden h-[20rem] w-full z-50 '>
            <img src={img} alt="" className=' group-hover:scale-110 h-full w-full object-cover transition-scale duration-300 ease-in-out ' />
            </div>
        </div>
        <div className=' text-center px-[5%] bg-[#fff] pt-8 pb-5 flex flex-col gap-3 '>
            <h3 className=' text-[1.2rem] font-semibold text-[#0372BF] px-4 transition-all duration-300 ease-out group-hover:scale-90 '>Entrepreneurs and small owners you get net.</h3>
            <p className=' px-2 text-[#454545] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
        </div>
    </div>
  )
}

export default Blog