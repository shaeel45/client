import React from "react";
import Team1 from "../assets/TeamImg1.png";
import Team2 from "../assets/TeamImg2.png";
// import Team3 from "../assets/TeamImg3.png";
import Team4 from "../assets/TeamImg4.jpg";
// import Team5 from "../../public/TeamImg5.jpg";
// import Team6 from "../../public/TeamImg6.jpg";
// import Team7 from "../../public/TeamImg7.jpg";
// import Team8 from "../../public/TeamImg8.jpg";
// import AboutImg from "../assets/AboutImg.png";
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Team() {
  return (<>
  </>
    // <div className="max-w-[1300px] mx-auto my-16 px-3 ">
    //   <div className=" flex flex-col gap-2 items-center pt-10 ">
    //     <h2 className=" text-[3rem] font-light ">Our Creative Team</h2>
    //     <p className=" text-[#474747] text-center  ">
    //       Our team and staff is presented here, we do what we love. Who we are,
    //       what we do and our social networks, connect with us.
    //     </p>
    //   </div>
    //   <div className=" grid grid-cols-2 md:grid-cols-4 gap-3 mt-20 ">
    //     <div className=" relative overflow-hidden group  rounded-md  shadow-lg">
    //       <div className=" absolute top-0 left-0 w-full h-full hover:bg-black/30 transition-all z-50 duration-300 ease-in-out "></div>
    //       <div className=" absolute -bottom-[10rem] group-hover:bottom-0 py-3 bg-black/50 transition-bottom duration-200 ease-linear z-[100] flex w-full items-end justify-between px-[2%] ">
    //         <div>
    //           <h3 className=" text-[#fff] font-semibold text-[1.2rem] ">
    //             Shahriar Mahmud
    //           </h3>
    //           <p className=" text-[#0372BF] font-semibold text-base ">
    //             Ceo & Founder
    //           </p>
    //         </div>
    //         <div className=" flex items-center gap-2 text-[2.1rem] ">
    //           <FaFacebookF
    //             style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
    //             className=" p-2 rounded-full bg-[#3B5998] text-[#fff] cursor-pointer "
    //           />
    //           <FaInstagram
    //             style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
    //             className=" p-2 rounded-full bg-[#D33E63] text-[#fff] cursor-pointer "
    //           />
    //           <FaLinkedinIn
    //             style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
    //             className=" p-2 rounded-full bg-[#015886] text-[#fff]  cursor-pointer"
    //           />
    //         </div>
    //       </div>
    //       <img
    //         src={AboutImg}
    //         alt=""
    //         className=" h-[20rem] group-hover:scale-110 transition-scale duration-300 z-30 ease-in-out w-full object-cover  bg-slate-200"
    //       />
    //     </div>

    //     <div className=" relative overflow-hidden group  rounded-md  shadow-lg">
    //       <div className=" absolute top-0 left-0 w-full h-full hover:bg-black/30 transition-all z-50 duration-300 ease-in-out "></div>
    //       <div className=" absolute -bottom-[10rem] group-hover:bottom-0 py-3 bg-black/50 transition-bottom duration-200 ease-linear z-[100] flex w-full items-end justify-between px-[2%] ">
    //         <div>
    //           <h3 className=" text-[#fff] font-semibold text-[1.2rem] ">
    //             Atkia Fahmida
    //           </h3>
    //           <p className=" text-[#0372BF] font-semibold text-base ">
    //             SEO expert & blogging affiliation
    //           </p>
    //         </div>
    //         <div className=" flex items-center gap-2 text-[2.1rem] ">
    //           <FaFacebookF
    //             style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
    //             className=" p-2 rounded-full bg-[#3B5998] text-[#fff] cursor-pointer "
    //           />
    //           <FaInstagram
    //             style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
    //             className=" p-2 rounded-full bg-[#D33E63] text-[#fff] cursor-pointer "
    //           />
    //           <FaLinkedinIn
    //             style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
    //             className=" p-2 rounded-full bg-[#015886] text-[#fff]  cursor-pointer"
    //           />
    //         </div>
    //       </div>
    //       <img
    //         src={Team5}
    //         alt=""
    //         className=" h-[20rem] group-hover:scale-110 transition-scale duration-300 z-30 ease-in-out w-full object-cover  bg-slate-200"
    //       />
    //     </div>

    //     <div className=" relative overflow-hidden group  rounded-md  shadow-lg">
    //       <div className=" absolute top-0 left-0 w-full h-full hover:bg-black/30 transition-all z-50 duration-300 ease-in-out "></div>
    //       <div className=" absolute -bottom-[10rem] group-hover:bottom-0 py-3 bg-black/50 transition-bottom duration-200 ease-linear z-[100] flex w-full items-end justify-between px-[2%] ">
    //         <div>
    //           <h3 className=" text-[#fff] font-semibold text-[1.2rem] ">
    //             Afsana
    //           </h3>
    //           <p className=" text-[#0372BF] font-semibold text-base ">
    //             Website Developer
    //           </p>
    //         </div>
    //         <div className=" flex items-center gap-2 text-[2.1rem] ">
    //           <FaFacebookF
    //             style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
    //             className=" p-2 rounded-full bg-[#3B5998] text-[#fff] cursor-pointer "
    //           />
    //           <FaInstagram
    //             style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
    //             className=" p-2 rounded-full bg-[#D33E63] text-[#fff] cursor-pointer "
    //           />
    //           <FaLinkedinIn
    //             style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
    //             className=" p-2 rounded-full bg-[#015886] text-[#fff]  cursor-pointer"
    //           />
    //         </div>
    //       </div>
    //       <img
    //         src={Team6}
    //         alt=""
    //         className=" h-[20rem] group-hover:scale-110 transition-scale duration-300 z-30 ease-in-out w-full object-cover  bg-slate-200"
    //       />
    //     </div>

    //     <div className=" relative overflow-hidden group  rounded-md shadow-lg ">
    //       <div className=" absolute top-0 left-0 w-full h-full hover:bg-black/30 transition-all z-50 duration-300 ease-in-out "></div>
    //       <div className=" absolute -bottom-[10rem] group-hover:bottom-0 py-3 bg-black/50 transition-bottom duration-200 ease-linear z-[100] flex w-full items-end justify-between px-[2%] ">
    //         <div>
    //           <h3 className=" text-[#fff] font-semibold text-[1.2rem] ">
    //             Md Shahed
    //           </h3>
    //           <p className=" text-[#0372BF] font-semibold text-base ">
    //             Full stack developer
    //           </p>
    //         </div>
    //         <div className=" flex items-center gap-2 text-[2.1rem] ">
    //           <Link
    //             to={"https://www.facebook.com/profile.php?id=61557221282774"}
    //             target="_blank"
    //           >
    //             <FaFacebookF
    //               style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
    //               className=" p-2 rounded-full bg-[#3B5998] text-[#fff] cursor-pointer "
    //             />
    //           </Link>
    //           <Link to={'https://www.instagram.com/mdshahed827/'} target="_blank">
    //           <FaInstagram
    //             style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
    //             className=" p-2 rounded-full bg-[#D33E63] text-[#fff] cursor-pointer "
    //           />
    //           </Link>
    //           <Link to={'https://www.linkedin.com/in/shahed89/'} target="_blank">
    //           <FaLinkedinIn
    //             style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
    //             className=" p-2 rounded-full bg-[#015886] text-[#fff] cursor-pointer "
    //           />
    //           </Link>
    //         </div>
    //       </div>
    //       <img
    //         src={Team1}
    //         alt=""
    //         className=" h-[20rem] group-hover:scale-110 transition-scale duration-300 z-30 ease-in-out w-full object-cover bg-slate-200 "
    //       />
    //     </div>

    //     <div className=" relative overflow-hidden group  rounded-md  shadow-lg">
    //       <div className=" absolute top-0 left-0 w-full h-full hover:bg-black/30 transition-all z-50 duration-300 ease-in-out "></div>
    //       <div className=" absolute -bottom-[10rem] group-hover:bottom-0 py-3 bg-black/50 transition-bottom duration-200 ease-linear z-[100] flex w-full items-end justify-between px-[2%] ">
    //         <div>
    //           <h3 className=" text-[#fff] font-semibold text-[1.2rem] ">
    //             Samrina Toma
    //           </h3>
    //           <p className=" text-[#0372BF] font-semibold text-base ">
    //             Wordpress Developer
    //           </p>
    //         </div>
    //         <div className=" flex items-center gap-2 text-[2.1rem] ">
    //           <FaFacebookF
    //             style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
    //             className=" p-2 rounded-full bg-[#3B5998] text-[#fff] cursor-pointer "
    //           />
    //           <FaInstagram
    //             style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
    //             className=" p-2 rounded-full bg-[#D33E63] text-[#fff] cursor-pointer "
    //           />
    //           <FaLinkedinIn
    //             style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
    //             className=" p-2 rounded-full bg-[#015886] text-[#fff]  cursor-pointer"
    //           />
    //         </div>
    //       </div>
    //       <img
    //         src={Team7}
    //         alt=""
    //         className=" h-[20rem] group-hover:scale-110 transition-scale duration-300 z-30 ease-in-out w-full object-cover  bg-slate-200"
    //       />
    //     </div>

    //     <div className=" relative overflow-hidden group  rounded-md shadow-lg">
    //       <div className=" absolute top-0 left-0 w-full h-full hover:bg-black/30 transition-all z-50 duration-300 ease-in-out "></div>
    //       <div className=" absolute -bottom-[10rem] group-hover:bottom-0 py-3 bg-black/50 transition-bottom duration-200 ease-linear z-[100] flex w-full items-end justify-between px-[2%] ">
    //         <div>
    //           <h3 className=" text-[#fff] font-semibold text-[1.2rem] ">
    //             Shahriar Zaman
    //           </h3>
    //           <p className=" text-[#0372BF] font-semibold text-base ">
    //             Digital Marketer
    //           </p>
    //         </div>
    //         <div className=" flex items-center gap-2 text-[2.1rem] ">
    //           <FaFacebookF
    //             style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
    //             className=" p-2 rounded-full bg-[#3B5998] text-[#fff] cursor-pointer "
    //           />
    //           <FaInstagram
    //             style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
    //             className=" p-2 rounded-full bg-[#D33E63] text-[#fff] cursor-pointer "
    //           />
    //           <FaLinkedinIn
    //             style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
    //             className=" p-2 rounded-full bg-[#015886] text-[#fff] cursor-pointer "
    //           />
    //         </div>
    //       </div>
    //       <img
    //         src={Team2}
    //         alt=""
    //         className=" h-[20rem] group-hover:scale-110 transition-scale duration-300 z-30 ease-in-out w-full object-cover  bg-slate-200"
    //       />
    //     </div>

    //     <div className=" relative overflow-hidden group  rounded-md  shadow-lg">
    //       <div className=" absolute top-0 left-0 w-full h-full hover:bg-black/30 transition-all z-50 duration-300 ease-in-out "></div>
    //       <div className=" absolute -bottom-[10rem] group-hover:bottom-0 py-3 bg-black/50 transition-bottom duration-200 ease-linear z-[100] flex w-full items-end justify-between px-[2%] ">
    //         <div>
    //           <h3 className=" text-[#fff] font-semibold text-[1.2rem] ">
    //           Mansura Akter
    //           </h3>
    //           <p className=" text-[#0372BF] font-semibold text-base ">
    //           WP Developer and Article Writer
    //           </p>
    //         </div>
    //         <div className=" flex items-center gap-2 text-[2.1rem] ">
    //           <Link
    //             to={"https://www.facebook.com/profile.php?id=61557221282774"}
    //             target="_blank"
    //           >
    //             <FaFacebookF
    //               style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
    //               className=" p-2 rounded-full bg-[#3B5998] text-[#fff] cursor-pointer "
    //             />
    //           </Link>
    //           <FaInstagram
    //             style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
    //             className=" p-2 rounded-full bg-[#D33E63] text-[#fff] cursor-pointer "
    //           />
    //           <FaLinkedinIn
    //             style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
    //             className=" p-2 rounded-full bg-[#015886] text-[#fff]  cursor-pointer"
    //           />
    //         </div>
    //       </div>
    //       <img
    //         src={Team4}
    //         alt=""
    //         className=" h-[20rem] group-hover:scale-110 transition-scale duration-300 z-30 ease-in-out w-full object-cover  bg-slate-200"
    //       />
    //     </div>

    //     <div className=" relative overflow-hidden group  rounded-md  shadow-lg">
    //       <div className=" absolute top-0 left-0 w-full h-full hover:bg-black/30 transition-all z-50 duration-300 ease-in-out "></div>
    //       <div className=" absolute -bottom-[10rem] group-hover:bottom-0 py-3 bg-black/50 transition-bottom duration-200 ease-linear z-[100] flex w-full items-end justify-between px-[2%] ">
    //         <div>
    //           <h3 className=" text-[#fff] font-semibold text-[1.2rem] ">
    //             Lisan Ahmed
    //           </h3>
    //           <p className=" text-[#0372BF] font-semibold text-base ">
    //             Graphics Designer
    //           </p>
    //         </div>
    //         <div className=" flex items-center gap-2 text-[2.1rem] ">
    //           <FaFacebookF
    //             style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
    //             className=" p-2 rounded-full bg-[#3B5998] text-[#fff] cursor-pointer "
    //           />
    //           <FaInstagram
    //             style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
    //             className=" p-2 rounded-full bg-[#D33E63] text-[#fff] cursor-pointer "
    //           />
    //           <FaLinkedinIn
    //             style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)" }}
    //             className=" p-2 rounded-full bg-[#015886] text-[#fff]  cursor-pointer"
    //           />
    //         </div>
    //       </div>
    //       <img
    //         src={Team8}
    //         alt=""
    //         className=" h-[20rem] group-hover:scale-110 transition-scale duration-300 z-30 ease-in-out w-full object-cover  bg-slate-200"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}

export default Team;
