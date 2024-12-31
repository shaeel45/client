import { useEffect, useRef, useState } from "react";
import Logo from "../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
import { HiBars3BottomRight } from "react-icons/hi2";
import { TbArrowsCross } from "react-icons/tb";
// import { IoMdArrowDropdown } from "react-icons/io";
import Loading from "./SubComponents/Loading";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import gsap from "gsap";

// import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';


function Header({ tl }) {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [msubMenuOpen, setMsubMenuOpen] = useState(false)
  console.log(menuOpen);
  // const [locationPath, setlocationPath] = useState()

  const headerTimeline = gsap.timeline()

  const mainMenuDivRef = useRef();
  const crossIconRef = useRef();
  // const menuRef = useRef()


  useGSAP(()=>{

    headerTimeline.from(".headerItem", {
      y:50,
      duration:2,
      stagger: 0.5,
      opacity:0
    })

  },[])


  const handleBarClick = () => {
    console.log("clicked");
    setMenuOpen(true);
    tl.play();
  };

  const handleCrossClick = () => {
    console.log("cross clicked");
    setMenuOpen(false);
    tl.reverse();
  };

  const [loading, setLoading] = useState(true);
  const location = useLocation();
  // setlocationPath(location.pathname)
  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 700);
      return () => clearTimeout(timer);
    };

    handleRouteChange();
  }, [location.pathname]);

  useGSAP(() => {
    tl.to(mainMenuDivRef.current, {
      right: 0,
      duration: 0.3,
    });

    tl.from(".menu", {
      x: 150,
      duration: 0.3,
      stagger: 0.2,
      opacity: 0,
    });

    tl.from(crossIconRef.current, {
      opacity: 0,
      duration: 0.2,
      rotate: 90,
    });

    tl.pause();
  }, [!loading]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return <Loading />;
  }
  console.log(subMenuOpen);
  

  return (
    <>
      <div
        className={` ${
          scroll ? "bg-slate-100 text-[#000] shadow-lg" : "mt-3 text-[#fff] "
        } transition-all px-3 duration-300 ease-in-out w-full top-0 left-1/2  transform -translate-x-1/2 py-3 fixed z-[100]  `}
      >
        <div className=" z-50  flex justify-between items-center max-w-[1300px] mx-auto w-full px-3   ">
          <div className=" headerItem ">
            <img src={Logo} alt="" className=" h-[3rem] w-full object-cover " />
          </div>
          <div className=" hidden md:flex items-center gap-10  text-[1.1rem] ">
            <Link to={"/"}>
              <h3 className=" hover:text-[#0372BF] transition-colors duration-200 ease-in-out headerItem ">
                Home
              </h3>
            </Link>
            <div className="relative">
          <h3
            onMouseEnter={() => setSubMenuOpen(true)}
            onMouseLeave={() => setSubMenuOpen(false)}
            className="flex items-center hover:text-[#0372BF] transition-colors duration-200 ease-in-out py-4 cursor-pointer headerItem"
          >
            Company
            <IoMdArrowDropdown
              className={`${
                subMenuOpen ? 'rotate-180' : ''
              } mt-3 text-xl transition-transform duration-200 ease-linear`}
            />
          </h3>
          <div
            onMouseEnter={() => setSubMenuOpen(true)}
            onMouseLeave={() => setSubMenuOpen(false)}
            className={`absolute text-[#fff] transition-all duration-300 ease-linear bg-[#0372BF] w-[15rem] flex flex-col ${
              subMenuOpen ? 'submenuopen' : 'submenuleave'
            }`}
          >
           
                <Link
                  to={"/about"}
                  onClick={()=>setsubMenuOpen(false)}
                  className="hover:bg-[#51abeb] py-2 px-3 border-[#a0a0a0] border-b "
                >
                  About Us
                </Link>
                <Link
                  to={"/mission-vision"}
                  onClick={()=>setsubMenuOpen(false)}
                  className="hover:bg-[#51abeb] py-2 px-3 border-[#a0a0a0] border-b "
                >
                  Mission & Vission
                </Link>
                <Link to={"/team"}
                onClick={()=>setsubMenuOpen(false)} 
                className="hover:bg-[#51abeb] py-2 px-3 ">
                  Our Team
                </Link>
              </div>
            </div>
            <Link to={"/portfolio"}>
              <h3 className=" hover:text-[#0372BF] transition-colors duration-200 ease-in-out headerItem ">
                Portfolio
              </h3>
            </Link>
            <Link to={"/services"}>
              <h3 className=" hover:text-[#0372BF] transition-colors duration-200 ease-in-out headerItem ">
                Services
              </h3>
            </Link>
            <Link to={"/blogs"}>
              <h3 className=" hover:text-[#0372BF] transition-colors duration-200 ease-in-out headerItem ">
                Blogs
              </h3>
            </Link>
            <Link to={"/contact"}>
              <h3 className=" hover:text-[#0372BF] transition-colors duration-200 ease-in-out headerItem ">
                Contact
              </h3>
            </Link>
          </div>

          <HiBars3BottomRight
            onClick={handleBarClick}
            className=" md:hidden block text-3xl cursor-pointer "
          />
        </div>
      </div>
      <div
        ref={mainMenuDivRef}
        className=" fixed md:hidden block -right-[25rem] w-[25rem] bg-slate-200/90 min-h-[70rem] h-[100vh] top-0 z-[10000000000] "
      >
        <div className="flex justify-end pr-5 pt-8 pb-[10rem] ">
          <div ref={crossIconRef} onClick={handleCrossClick}>
            <TbArrowsCross className=" cursor-pointer text-6xl  bg-slate-300 p-4 rounded-full " />
          </div>
        </div>
        <div className=" flex flex-col gap-8 pl-8 text-[#454545] text-4xl menus  ">
          <Link
            onClick={() => tl.reverse()}
            to={"/"}
            className=" hover:text-[#0372BF] menu "
          >
            Home
          </Link>
          <div
            
            className="  menu relative"
          >
            <div className=" flex items-center justify-between ">
            <h3 onClick={() => setMsubMenuOpen(!msubMenuOpen)}>Conpmany</h3>
            {
              msubMenuOpen ? <FaMinus className=" pr-3 " /> : <FaPlus className=" pr-3 " />
            }
            </div>
            <div className={` flex flex-col gap-2 transition-all duration-300 ease-linear ${msubMenuOpen ? "msubmenuOpen h-full": "nmsubmenuOpen h-0"} `}>
            <Link to={"/about"} className=" px-3 pt-4 pb-2 hover:text-[#0372BF] ">About Us</Link>
            <Link to={"/mission-vision"} className=" px-3 py-2 hover:text-[#0372BF]">Mission & Vission</Link>
            <Link to={"/team"} className=" px-3 hover:text-[#0372BF] ">Our Team</Link>
            </div>
          </div>
          <Link
            onClick={() => tl.reverse()}
            to={"/portfolio"}
            className=" hover:text-[#0372BF] menu "
          >
            Portfolio
          </Link>
          <Link
            onClick={() => tl.reverse()}
            to={"/services"}
            className=" hover:text-[#0372BF] menu "
          >
            Services
          </Link>
          <Link
            onClick={() => tl.reverse()}
            to={"/blogs"}
            className=" hover:text-[#0372BF] menu "
          >
            Blogs
          </Link>
          <Link
            onClick={() => tl.reverse()}
            to={"/contact"}
            className=" hover:text-[#0372BF] menu "
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
