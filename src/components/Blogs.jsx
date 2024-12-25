import React from 'react'
import BlogImg1 from "../assets/BlogImg1.webp"
import BlogImg2 from "../assets/BlogImg2.webp"
import BlogImg3 from "../assets/BlogImg3.webp"
import BlogImg4 from "../assets/BlogImg4.webp"
import Blog from './SubComponents/Blog'

function Blogs() {
  return (
    <div className=' max-w-[1300px] mx-auto px-3 mb-28 '>
        <div className=' flex flex-col gap-2 items-center pt-10 '>
            <h2  className=' text-[3rem] font-light '>Latest Blog</h2>
            <p className=" text-[#474747]  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className=' grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14 sm:mt-20 '>
            <Blog img={BlogImg1}/>
            <Blog img={BlogImg2}/>
            <Blog img={BlogImg3}/>
            {/* <Blog img={BlogImg4}/> */}
        </div>

    </div>
  )
}

export default Blogs