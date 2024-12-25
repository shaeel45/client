import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import MVImg3 from '../assets/MVImg3.jpeg'
import MVImg1 from '../assets/MVImg1.avif'
import MVImg2 from '../assets/MVImg2.png'

function MV() {
  return (
    <div className=" min-h-[100vh] ">
      <div className=" h-[25rem] w-full relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black/20 ">
        <div className=" absolute bottom-[15%] left-[10%] text-[#fff] font-semibold ">
          <h2 className=" text-[4rem] font-bold ">Mission, Vision</h2>
          <p className=" flex items-center gap-3 text-[2rem] ">
            Home <MdDoubleArrow /> Mission, Vision
          </p>
        </div>
        <img
          src="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2020/07/20162255/iStock-1157887211.jpg"
          alt=""
          className="w-full h-full object-cover   "
        />
      </div>

      <div className=" max-w-[1300px] mx-auto ">

      <div className=" flex items-center md:flex-row flex-col px-2 gap-7 my-10 ">
        <div className=" flex-1 h-full">
          <img src={MVImg1} alt="" className=" w-full min-h-[25rem] h-full object-cover " />
        </div>
        <div className=" flex-1 lg:pl-[3%] ">
          <h3 className=" text-[1.6rem] font-semibold text-[#0372BF] ">Our Mission</h3>
          <p className=" text-xl text-[#454545] mt-6 ">At GrowiX, our mission is to empower businesses by delivering cutting-edge software solutions that drive success. We are unwavering in our commitment to innovation, excellence, and customer satisfaction. By continually pushing the boundaries of technology, we ensure our solutions uphold the highest standards of quality, reliability, and performance.</p>
          <p className=" text-xl text-[#454545] mt-3 ">Through collaboration and teamwork, we gain a deep understanding of our client's unique needs, allowing us to exceed their expectations consistently. Our ultimate goal is to be a trusted partner in our client's digital transformation journeys, supporting sustainable growth and long-term success.</p>
        </div>
      </div>

      <div className=" flex items-center md:flex-row flex-col px-2 gap-7 my-20 ">
        <div className=" flex-1 lg:pr-[3%] md:order-1 order-2 ">
          <h3 className=" text-[1.6rem] font-semibold text-[#0372BF] ">Our Vision</h3>
          <p className=" text-xl text-[#454545] mt-6 ">At GrowiX, our mission is to empower businesses by delivering cutting-edge software solutions that drive success. We are unwavering in our commitment to innovation, excellence, and customer satisfaction. By continually pushing the boundaries of technology, we ensure our solutions uphold the highest standards of quality, reliability, and performance.</p>
          <p className=" text-xl text-[#454545] mt-3 ">Through collaboration and teamwork, we gain a deep understanding of our client's unique needs, allowing us to exceed their expectations consistently. Our ultimate goal is to be a trusted partner in our client's digital transformation journeys, supporting sustainable growth and long-term success.</p>
        </div>
        <div className=" flex-1 md:order-2 order-1 ">
          <img src={MVImg2} alt="" className=" w-full min-h-[25rem] h-full object-cover " />
        </div>
      </div>

      <div className=" flex items-center md:flex-row flex-col px-2 gap-7 my-10 ">
        <div className=" flex-1 ">
          <img src={MVImg3} alt="" className=" w-full h-full object-cover " />
        </div>
        <div className=" flex-1 lg:pl-[3%] ">
          <h3 className=" text-[1.6rem] font-semibold text-[#0372BF] mb-7 ">Core Values</h3>
          <div className=" flex flex-col gap-2 ">
            <div className=" flex items-start gap-2 ">
              <span className=" font-semibold text-base ">Excellence: </span>
              <p className=" text-base ">We are committed to providing exceptional results and going the extra mile for our customers.</p>
            </div>
            <div className=" flex items-start gap-2">
              <span className=" font-semibold text-base ">Integrity: </span>
              <p className=" text-base ">We are committed to providing exceptional results and going the extra mile for our customers.</p>
            </div>
            <div className=" flex items-start gap-2">
              <span className=" font-semibold text-base ">Innovation: </span>
              <p className=" text-base ">We are committed to providing exceptional results and going the extra mile for our customers.</p>
            </div>
            <div className=" flex items-start gap-2">
              <span className=" font-semibold text-base ">Accountability: </span>
              <p className=" text-base ">We are committed to providing exceptional results and going the extra mile for our customers.</p>
            </div>
            <div className=" flex items-start gap-2">
              <span className=" font-semibold text-base ">Customer Focus: </span>
              <p className=" text-base ">We are committed to providing exceptional results and going the extra mile for our customers.</p>
            </div>
          </div>
        </div>
      </div>


      </div>


    </div>
  );
}

export default MV;
