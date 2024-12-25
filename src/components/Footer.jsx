// import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Logo from "../assets/Logo.png"
import { IoMdArrowUp } from "react-icons/io";


function Footer() {
  return (
    <div className=" bg-slate-200 mt-6 pt-10 px-3 ">
      <div className=" max-w-[1300px] mx-auto  mb-10">

        <div className="  grid grid-cols-2 sm:grid-cols-4 gap-3 ">
        <div className=" text-[#454545] ">
        <div>
          <h3 className=" text-[1.5rem] font-semibold mb-5  ">About Us</h3>
          <p className=" text-base ">Aliquam orci nullam tempor sapien orci gravida donec enim ipsum porta justo integer at velna vitae auctor integer congue magna</p>
        </div>
        <div className=" flex items-center gap-4 mt-12 ">
          <FaFacebookF className=" bg-slate-400 text-[#fff] p-2 rounded-full text-[2.2rem] cursor-pointer " />
          <FaInstagram className=" bg-slate-400 text-[#fff] p-2 rounded-full text-[2.2rem] cursor-pointer " />
          <FaLinkedinIn className=" bg-slate-400 text-[#fff] p-2 rounded-full text-[2.2rem] cursor-pointer " />
          <BsTwitterX className=" bg-slate-400 text-[#fff] p-2 rounded-full text-[2.2rem] cursor-pointer " />
        </div>
        </div>
        
        <div className=" flex flex-col items-end sm:items-center gap-3 text-[#454545] ">
          <h3 className=" mb-2 font-semibold text-xl ">Products</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">How It Works?</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Community</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Careers</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Site Map</h3>
        </div>

        <div className=" flex flex-col items-start sm:mt-0 mt-5 sm:items-center gap-3 text-[#454545] ">
          <h3 className=" mb-2 font-semibold text-xl ">Company</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">About us</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Core Services</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Pricing Plans</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Contact Us</h3>
        </div>
        
        <div className=" flex flex-col items-end sm:mt-0 mt-5 gap-3 text-[#454545] ">
          <h3 className=" mb-2 font-semibold text-xl ">Resources</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Life Chatting</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Customer Forum</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Privacy Policy</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Terms of Service</h3>
          <h3 className=" hover:text-[#0372BF] cursor-pointer ">Return Policy</h3>
        </div>
        </div>

        

      </div>
      <div className=" bg-slate-300 py-2  text-[#454545] ">
      <div className=" flex items-center justify-between max-w-[1300px] mx-auto ">
          <div>
            <img src={Logo} alt="" className=" h-[3rem] w-full object-cover " />
          </div>
          <div>
            <IoMdArrowUp className=" cursor-pointer bg-[#0372BF] p-2 rounded-full text-[2.5rem] text-[#fff] " />
          </div>
          <div>
            <p className=" ">© All Copyright 2024 by Growix</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
