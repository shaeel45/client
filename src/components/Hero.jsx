import React,{useEffect,useState} from "react";
import HeroImg from "../assets/HeroImg.webp";
import HeroImg2 from "../assets/HeroImg2.webp";
import HeroImg3 from "../assets/HeroImg3.webp";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import axios from 'axios'


function Hero() {
  const [data, setData] = useState([]);

  const getHeaderData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/home/get-header",
        
      );
      if (!res.data.status === 401 || !res.data) {
        console.error("Error");
      } else {
       setData( res.data.getUser);
       console.log(res.data.getUser);
      }
    } catch (error) {
      console.error("Error fetching data:", error.response || error.message);
    }
  };
  useEffect(() => {
    getHeaderData();
  }, []);

  

  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2010,
    autoplaySpeed: 5000,
    // cssEase: "linear",
    arrows: false,
    waitForAnimate: false,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className=" z-40 ">
      <div className="   slider-container  ">

        <Slider {...settings} className="  ">
        {data.map((item, index) => (
          <div className=" relative w-full h-[60vh] md:h-[90vh]  before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-30 before:bg-black/40 ">
            <img
              src={`http://localhost:5000/public/Home/${item.imgPath}`}
              alt="heroimg"
              className=" w-full h-full object-cover   "
            />
            <div className=" absolute top-0 left-0 text-[#fff] z-50 w-full h-full flex flex-col gap-8 items-center justify-center ">
              <div className=" text-center flex flex-col gap-5 ">
                <h1 className=" text-5xl md:text-6xl font-bold max-w-[70rem] mx-auto  ">
                 {item.title}
                </h1>
                <h4 className=" text-xl md:text-xl max-w-[40rem] mx-auto text-gray-200 ">
                 {item.description}
                </h4>
              </div>
              <div className=" flex items-center gap-5 ">
              <Link to={'/services'} className=" bg-[#0372BF] text-[1rem]  px-8 py-2 rounded-full z-[1000000000000000] cursor-pointer ">
                Read More
              </Link>
              <Link to={'/contact'} className=" bg-green-500 px-8 py-2 rounded-full ">Contact Us</Link>
              </div>
            </div>
          </div>
        ))}
          {/* <div className=" relative w-full h-[60vh] md:h-[90vh]  before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-30 before:bg-black/40 ">
            <img
              src={HeroImg2}
              alt="heroimg"
              className=" w-full h-full object-cover   "
            />
            <div className=" absolute top-0 left-0 text-[#fff] z-50 w-full h-full flex flex-col gap-8 items-center justify-center ">
              <div className=" text-center flex flex-col gap-5 ">
                <h1 className=" text-5xl md:text-6xl font-bold max-w-[70rem] mx-auto  ">
                  We Provide You Best Software and IT Solution For Your
                  Business.
                </h1>
                <h4 className=" text-xl md:text-xl max-w-[40rem] mx-auto text-gray-200 ">
                  GrowiX is globally recognized for providing top-notch
                  customer experiences and offering exemplary software and IT
                  solution services, solidifying our position as one of the
                  leading software development companies worldwide.
                </h4>
              </div>
              <div className=" flex items-center gap-5 ">
              <Link to={'/services'} className=" bg-[#0372BF] text-[1rem]  px-8 py-2 rounded-full z-[1000000000000000] cursor-pointer ">
                Read More
              </Link>
              <Link to={'/contact'} className=" bg-green-500 px-8 py-2 rounded-full ">Contact Us</Link>
              </div>
            </div>
          </div>
          <div className=" relative w-full h-[60vh] md:h-[90vh]  before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-30 before:bg-black/40 ">
            <img
              src={HeroImg3}
              alt="heroimg"
              className=" w-full h-full object-cover   "
            />
            <div className=" absolute top-0 left-0 text-[#fff] z-50 w-full h-full flex flex-col gap-8 items-center justify-center ">
              <div className=" text-center flex flex-col gap-5 ">
                <h1 className=" text-5xl md:text-6xl font-bold max-w-[70rem] mx-auto  ">
                  We Provide You Best Software and IT Solution For Your
                  Business.
                </h1>
                <h4 className=" text-xl md:text-xl max-w-[40rem] mx-auto text-gray-200 ">
                  GrowiX is globally recognized for providing top-notch
                  customer experiences and offering exemplary software and IT
                  solution services, solidifying our position as one of the
                  leading software development companies worldwide.
                </h4>
              </div>
              <div className=" flex items-center gap-5 ">
              <Link to={'/services'} className=" bg-[#0372BF] text-[1rem]  px-8 py-2 rounded-full z-[1000000000000000] cursor-pointer ">
                Read More
              </Link>
              <Link to={'/contact'} className=" bg-green-500 px-8 py-2 rounded-full ">Contact Us</Link>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
