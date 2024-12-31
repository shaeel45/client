import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import Portfolio1 from "../assets/Portfolio1.webp";
import Portfolio2 from "../assets/Portfolio2.webp";
import Portfolio3 from "../assets/Portfolio3.webp";
import Portfolio4 from "../assets/Portfolio4.png";
import Portfolio5 from "../assets/Portfolio5.png";
import Portfolio6 from "../assets/Portfolio6.png";
import Portfolio7 from "../assets/Portfolio7.png";
import Portfolio8 from "../assets/Portfolio8.png";
import Portfolio9 from "../assets/Portfolio9.png";
import PortfolioCard from "../components/SubComponents/PortfolioCard";

const Portfoliop = () => {
  return (
    <div>
      <div className=" h-[25rem] w-full relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black/20 ">
        <div className=" absolute bottom-[15%] left-[10%] text-[#fff] font-semibold ">
          <h2 className=" text-[4rem] font-bold ">Portfolio</h2>
          <p className=" flex items-center gap-3 text-[2rem] ">
            Home <MdDoubleArrow /> Portfolio
          </p>
        </div>
        <img
          src="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2020/07/20162255/iStock-1157887211.jpg"
          alt=""
          className="w-full h-full object-cover   "
        />
      </div>

      <div className=" max-w-[1300px] mx-auto mt-16 ">

      <div className=' flex items-center justify-end gap-4 text-[#fff] '>
            <div className=' bg-[#45a3e6] transition duration-300 ease-in-out px-8 hover:bg-[#45a3e6] py-1 rounded-md cursor-pointer '>All</div>
            <div className=' bg-[#247bb9] transition duration-300 ease-in-out px-8 hover:bg-[#45a3e6] py-1 rounded-md cursor-pointer '>Web</div>
            <div className=' bg-[#247bb9] transition duration-300 ease-in-out px-8 hover:bg-[#45a3e6] py-1 rounded-md cursor-pointer '>App</div>
        </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mt-10 mb-20 ">
        <PortfolioCard img={Portfolio4} url="https://new-brandio-portfolio.vercel.app" />
        <PortfolioCard img={Portfolio1} url="https://growixbd.com" />
        <PortfolioCard img={Portfolio2} url="https://restaurent-jet.vercel.app" />
        <PortfolioCard img={Portfolio3} url="https://brandio.abmgloballtd.com" />
        <PortfolioCard img={Portfolio5} url="https://shahed89.vercel.app" />
        <PortfolioCard img={Portfolio6} url="https://abmgloballtd.com" />
        <PortfolioCard img={Portfolio7} url="https://upsilon.abmgloballtd.com" />
        <PortfolioCard img={Portfolio8} url="https://mdshahed89.github.io/Branging-Agency-Website" />
        <PortfolioCard img={Portfolio9} url="https://mdshahed89.github.io/Fitness_Responsive_Website/" />
        <PortfolioCard img={Portfolio2} url="https://restaurent-jet.vercel.app" />
        <PortfolioCard img={Portfolio3} url="https://brandio.abmgloballtd.com" />
        <PortfolioCard img={Portfolio4} url="https://new-brandio-portfolio.vercel.app" />
      </div>

      </div>
    </div>
  );
};

export default Portfoliop;
