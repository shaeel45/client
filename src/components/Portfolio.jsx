import React from "react";
import PortfolioCard from "./SubComponents/PortfolioCard";
import Portfolio4 from "../assets/Portfolio4.png";
import Portfolio2 from "../assets/Portfolio2.webp";
import Portfolio3 from "../assets/Portfolio3.webp";
import { Link } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";

function Portfolio() {
  return (
    <div className=" bg-[#0372BF] py-5 px-3 ">
      <div className=" max-w-[1300px] mx-auto my-16  text-[#fff] ">
        <div className=" flex flex-col gap-14 ">
          <div className=" flex flex-col items-center ">
            <h2 className=" text-[2rem] md:text-[2.5rem] ">
              Creative Ideas That Impress
            </h2>
            <p className=" max-w-[30rem] text-center text-[#e7e7e7] ">
              Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
              primis libero tempus, tempor posuere ligula varius impedit enim
              tempor sapien
            </p>
          </div>
          <div className=" flex items-center justify-center gap-4 ">
            <div className=" bg-[#45a3e6] transition duration-300 ease-in-out px-8 hover:bg-[#45a3e6] py-1 rounded-md cursor-pointer ">
              All
            </div>
            <div className=" bg-[#1b6599] transition duration-300 ease-in-out px-8 hover:bg-[#45a3e6] py-1 rounded-md cursor-pointer ">
              Web
            </div>
            <div className=" bg-[#1b6599] transition duration-300 ease-in-out px-8 hover:bg-[#45a3e6] py-1 rounded-md cursor-pointer ">
              App
            </div>
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5 ">
          <PortfolioCard img={Portfolio4} url="https://new-brandio-portfolio.vercel.app" />
            <PortfolioCard img={Portfolio2} url="https://restaurent-jet.vercel.app" />
            <PortfolioCard img={Portfolio3} url="https://brandio.abmgloballtd.com" />
            {/* <PortfolioCard img={Portfolio1} />
            <PortfolioCard img={Portfolio1} />
            <PortfolioCard img={Portfolio1} /> */}
          </div>
          <div className=" flex justify-end ">
            <Link to={'/portfolio'} className="flex items-center gap-1 border-b-2 pr-2">
              <div className="group">More</div>
              <MdDoubleArrow className="transition-all duration-150 group-hover:-ml-2" />
            </Link>
          </div>
          <div className=" flex items-center w-full ">
            <div className="flex-1  ">
              <h1 className=" text-[1.8rem] sm:text-[3rem] xl:text-[5rem] font-thin leading-tight   ">
                Have any project <br /> in mind?
              </h1>
            </div>
            <div className="flex-1 flex justify-end ">
              <Link className=" bg-[#1b6599] duration-300 transition-colors ease-in-out px-10 py-3 rounded-md shadow-inner hover:bg-[#419cdd] text-[1.2rem] sm:text-[1.5rem] ">
                Let's Discuss
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
