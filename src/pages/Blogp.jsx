import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import Blog from "../Components/SubComponents/Blog";
import Blogs from "../Components/Blogs";
import BlogImg1 from "../assets/BlogImg1.webp"
import BlogImg2 from "../assets/BlogImg2.webp"
import BlogImg3 from "../assets/BlogImg3.webp"
import BlogImg4 from "../assets/BlogImg4.webp"

const Blogp = () => {
  return (
    <div>
      <div className=" h-[25rem] w-full relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black/20 ">
        <div className=" absolute bottom-[15%] left-[10%] text-[#fff] font-semibold ">
          <h2 className=" text-[4rem] font-bold ">Contact Us</h2>
          <p className=" flex items-center gap-3 text-[2rem] ">
            Home <MdDoubleArrow /> Blogs
          </p>
        </div>
        <img
          src="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2020/07/20162255/iStock-1157887211.jpg"
          alt=""
          className="w-full h-full object-cover   "
        />
      </div>

      <div className=' max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-14 sm:mt-20 '>
            <Blog img={BlogImg1}/>
            <Blog img={BlogImg2}/>
            <Blog img={BlogImg3}/>
            <Blog img={BlogImg4}/>
            <Blog img={BlogImg1}/>
            <Blog img={BlogImg2}/>
            <Blog img={BlogImg3}/>
            <Blog img={BlogImg4}/>
            <Blog img={BlogImg1}/>
            <Blog img={BlogImg2}/>
            <Blog img={BlogImg3}/>
            <Blog img={BlogImg4}/>
            <Blog img={BlogImg1}/>
            <Blog img={BlogImg2}/>
            <Blog img={BlogImg3}/>
            {/* <Blog img={BlogImg4}/> */}
        </div>


    </div>
  );
};

export default Blogp;
