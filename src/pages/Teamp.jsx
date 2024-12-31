import React from 'react'
import Team from '../components/Team'
import { MdDoubleArrow } from 'react-icons/md'

const Teamp = () => {
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


        <Team />
    </div>
  )
}

export default Teamp