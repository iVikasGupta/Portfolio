// import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div
        className="grid grid-cols-1 md:grid-cols-12 bg-[#1fa2ff] place-content-center place-items-center md:p-10 md:py-12 h-screen snap-start relative"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dqt8po5ie/image/upload/v1742359546/InteriorDesignWeb/footer-bg_l4ishi.jpg")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-center items-center col-span-1 md:col-span-2 md:h-screen w-full">
          <ul className=" sm:pt-0 pt-14">
            <li className="text-lg font-thin uppercase hover:text-yellow-400 text-white my-3 md:my-10">
              <Link to="/">Home</Link>
            </li>
            <li className="text-lg font-thin uppercase hover:text-yellow-400 text-white my-3 md:my-10">
              <Link to="/projects">Projects</Link>
            </li>

            <li className="text-lg font-thin uppercase hover:text-yellow-400 text-white my-3 md:my-10">
              <Link to="/about">About Me</Link>
            </li>

            <li className="text-lg font-thin uppercase hover:text-yellow-400 text-white my-3 md:my-10">
              <Link to="/services">Services</Link>
            </li>
            <li className="text-lg font-thin uppercase hover:text-yellow-400 text-white my-3 md:my-10">
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-10 md:h-screen w-full text-white">
          <div className="grid grid-cols-1 md:grid-cols-12 place-content-center place-items-center">
            <div className="col-span-1 md:col-span-7 md:flex justify-center items-center md:h-screen hidden ">
              <div className="bg-blue-900 border-[3px] border-yellow-500 h-[500px] w-full ">
                <img
                  src="https://res.cloudinary.com/dqt8po5ie/image/upload/v1742361426/InteriorDesignWeb/footer-Img_cafbth.jpg"
                  alt="company-img"
                  className="h-[500px] mt-10 -ms-10 shadow-2xl"
                />
              </div>
            </div>
            <div className="col-span-1 md:col-span-5 flex justify-center items-center p-16 md:h-screen md:p-0">
              <div className="flex flex-col gap-5">
                <h1 className="text-4xl md:text-7xl md:text-start text-center font-bold">
                  {" "}
                  Vikas <span className=" text-cyan-600">Gupta</span>{" "}
                </h1>
                <h2 className="text-xl px-7 md:px-0">Gamma 1 Block C, Greater Noida, Uttar Pradesh, India</h2>
                <div className="w-full h-[2px] bg-yellow-500 px-5 md:px-0"></div>
                <p className="text-cyan-500 px-5 md:px-0">+91 8887641882 / vikasgupta2426@gmail.com</p>

                <div className="flex justify-center items-center mt-5 gap-8 px-5 md:px-0">
                  <Link target="_blank" to="https://www.linkedin.com/in/vikas-gupta-273a9725b" className="text-cyan-500 hover:text-yellow-500">
                    <FaLinkedin className="sm:text-5xl text-3xl" />
                  </Link>

                  <Link target="_blank" to="https://github.com/iVikasGupta" className="text-cyan-500 hover:text-yellow-500">
                    <FaSquareGithub className="sm:text-5xl text-3xl" />
                  </Link>
                  <Link target="_blank" to="mailto:vikasgupta2426@gmail.com" className="text-cyan-500 hover:text-yellow-500">
                    <SiGmail className="sm:text-5xl text-3xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="flex justify-center items-center text-xs text-white absolute bottom-2">
          Copyright © {new Date().getFullYear()} - All right reserved by Vikas Gupta
        </p>
      </div>
    </>
  );
};

export default Footer;
