import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'
import AboutUsImg from "../assets/AboutUsImg.webp"
// import AboutpImg2 from "../assets/AboutImg.png"
import Testimonials from '../components/Testimonials'
import AboutImg from "../assets/AboutImg.jpg"

const Aboutp = () => {
  return (
    <div>

<div className=" h-[25rem] w-full relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black/20 ">
        <div className=" absolute bottom-[15%] left-[10%] text-[#fff] font-semibold ">
          <h2 className=" text-[4rem] font-bold ">About Us</h2>
          <p className=" flex items-center gap-3 text-[2rem] ">
            Home <MdDoubleArrow /> About
          </p>
        </div>
        <img
          src="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2020/07/20162255/iStock-1157887211.jpg"
          alt=""
          className="w-full h-full object-cover   "
        />
      </div>

     <div className=' max-w-[1300px] mx-auto px-3 mt-10  '>

     <div className=' flex items-start md:gap-0 gap-5 md:items-center md:flex-row flex-col  '>
        <div className=' flex-1 '>
          <h3 className=' text-[#0372BF] text-[1.5rem]  font-semibold '>Growix</h3>
          <h2 className=' text-[2.5rem] leading-tight font-bold text-[#454545] '>Transform with <br /> Software</h2>
        </div>
        <div className=' flex-1 text-xl text-[#454545] flex flex-col gap-5 '>
          <p>GrowiX is a reliable software development firm dedicated to delivering innovative digital solutions with the latest technologies. Specializing in custom software development, <span className=' bg-[#df5533]/70 px-2 rounded-sm '>web development</span>, <span className=' bg-[#fcd940]/70 px-2 rounded-sm '>AI development</span>, <span className=' bg-[#2ecf29]/70 px-2 rounded-sm '>cloud solutions</span>, <span className=' bg-[#47f1f1]/70 px-2 rounded-sm '>mobile app development</span>, and <span className=' bg-[#5767f3]/70 px-2 rounded-sm '>IT staff augmentation services</span>, we strive to exceed expectations and drive success for our clients.</p>
          <p>Our mission is to empower businesses by leveraging cutting-edge technology and exceptional customer service. We pride ourselves on our client-centric approach, ensuring that each solution is tailored to meet the unique needs of our clients.</p>
        </div>
      </div>

      <div className=' p-3 border-2 border-[#0372BF] border-dashed mt-16 '>
        <img src={AboutUsImg} alt="" className=' h-[30rem] w-full object-cover ' />
      </div>

      <div className=' my-20 '>
        <Testimonials />
      </div>

      <div className=' flex items-center md:flex-row flex-col my-14 '>
        <div className=' flex-1 md:order-1 order-2 '>
          <h3 className=' text-[1.4rem] font-semibold text-[#0372BF] '>CEO's Speech</h3>
          <p className=' text-xl mt-12 text-[#454545] '>It is a great honor and delight for me to share a few words about GrowiX, a company dedicated to delivering exceptional software development services globally. At GrowiX, we help clients achieve their business goals through innovative and reliable software solutions, tailored to enhance efficiency and meet their unique needs.</p>
          <p className=' text-xl mt-6 text-[#454545] '>Our mission is guided by core values: trust, respect, commitment, quality, and teamwork. We believe in honoring our commitments and taking full responsibility for our actions. We value each person's uniqueness, including our clients and partners, and strive to help them reach their full potential. Our dedication ensures mutual growth and success for both GriwiX and our clients.</p>
          <div className=' mt-4 '>
            <p className=' font-semibold '>Shahriar Mahmud</p>
            <p>CEO & Founder at GrowiX</p>
          </div>
        </div>
        <div className=' md:order-2 order-1 flex-1 flex justify-center items-center '>
          <div className=' p-3 border-2 border-dashed  rounded-full border-[#0372BF] '>
          <img src={AboutImg} alt="" className=' h-full w-[30rem] object-cover rounded-full bg-[#0372BF] ' />
          </div>
        </div>
      </div>

     </div>

    </div>
  )
}

export default Aboutp