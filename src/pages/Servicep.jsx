import React from "react";
import { IoLogoDesignernews } from "react-icons/io";
import { MdDoubleArrow, MdOutlineDeveloperMode, MdOutlineWeb } from "react-icons/md";
import { RiSeoFill } from "react-icons/ri";
import Services from "../Components/Services";

function Servicep() {
  return (
    <div className=" min-h-[100vh] ">
      <div className=" h-[25rem] w-full relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black/20 ">
        <div className=" absolute bottom-[15%] left-[10%] text-[#fff] font-semibold ">
          <h2 className=" text-[4rem] font-bold ">Services</h2>
          <p className=" flex items-center gap-3 text-[2rem] ">
            Home <MdDoubleArrow /> Services
          </p>
        </div>
        <img
          src="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2020/07/20162255/iStock-1157887211.jpg"
          alt=""
          className="w-full h-full object-cover   "
        />
      </div>


     <Services page={true}/>


    </div>
  );
}

export default Servicep;
