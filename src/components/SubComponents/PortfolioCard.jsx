import React from "react";
import { Link } from "react-router-dom";

function PortfolioCard({ img, url }) {
  return (
    <a target="_blank" href={url} className="relative overflow-hidden group cursor-pointer ">
      <img src={img} alt="" className="w-full h-full object-cover" />
      <a
      target="_blank"
        href={url}
        className="absolute inset-0 bg-slate-600/60 transition-all duration-500 ease-in-out w-[0.5rem] h-full group-hover:w-full"
      >
        <div className=" group-hover:flex hidden  text-[#fff] items-center justify-center h-full ">
          <div className=" flex flex-col gap-2 text-center ">
            <h3 className=" text-[1.5rem] font-semibold ">
              Business Portfolio
            </h3>
            <h4 className=" text-[1.2rem] ">Website</h4>
          </div>
        </div>
      </a>
    </a>
  );
}

export default PortfolioCard;
