import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showHam, setShowHam] = useState(false);
  const handleHamShow = (e) => {
    e.preventDefault();
    setShowHam(!showHam);
  };
  return (
    <>
      <div
        className="navbar bg-[#2792df] overflow-x-hidden shadow-md h-[5vh] sm:h-[7vh]  fixed top-0 z-50"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dqt8po5ie/image/upload/v1742359546/InteriorDesignWeb/text-bg_bu8xx2.png")`,
          backgroundPosition: "center",
        }}
      >
        <div className="navbar-start">
          <div className="dropdown md:hidden ">
            <div tabIndex={0} role="button" className="btn btn-ghost hover:scale-75 btn-circle">
              <button onClick={handleHamShow} className="font-extrabold text-sm text-white">
                ☰
              </button>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <a className=" hover:bg-transparent hover:text-[#96EFFF] lg:text-2xl text-xl text-white">
            <span className="text-white">Vikas</span>
            <span className="text-sky-400">Gupta</span>
          </a>
        </div>
        <div className="navbar-end">
          <button className=""></button>
        </div>
      </div>

      {/* mobile */}

      {showHam ? (
        <>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-12 bg-[#1fa2ff] place-content-center place-items-center md:p-10 md:py-12 h-screen  z-[2000] snap-start overflow-x-hidden shadow-md   fixed top-0 md:hidden "
            style={{
              backgroundImage: `url("https://res.cloudinary.com/dqt8po5ie/image/upload/v1742359546/InteriorDesignWeb/footer-bg_l4ishi.jpg")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            initial={{ x: "-300px" }}
            animate={{ x: 0 }}
            transition={{ duration: "1" }}
          >
            <div className="flex justify-center items-center col-span-1 md:col-span-2 md:h-screen w-full ">
              <button onClick={handleHamShow} className=" absolute top-5 right-5 bg-red-600 text-white p-1 px-4 rounded-full">
                close
              </button>
              <ul className="">
                <li className="text-lg font-thin uppercase hover:text-yellow-400 text-white my-5 md:my-10">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-lg font-thin uppercase hover:text-yellow-400 text-white my-5 md:my-10">
                  <Link to="/projects">Projects</Link>
                </li>

                <li className="text-lg font-thin uppercase hover:text-yellow-400 text-white my-5 md:my-10">
                  <Link to="/about">About Me</Link>
                </li>

                <li className="text-lg font-thin uppercase hover:text-yellow-400 text-white my-5 md:my-10">
                  <Link to="/services">Services</Link>
                </li>
                <li className="text-lg font-thin uppercase hover:text-yellow-400 text-white my-5 md:my-10">
                  <Link to="/contact">Contact Me</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1 md:col-span-10 md:h-screen w-full text-white">
              <div className="grid grid-cols-1 md:grid-cols-12 place-content-center place-items-center">
                <div className="col-span-1 md:col-span-5 flex justify-center items-center p-16 md:h-screen md:p-0">
                  <div className="flex flex-col gap-5">
                    <h1 className="text-4xl md:text-7xl md:text-start text-center font-bold">
                      {" "}
                      Vikas <span className=" text-cyan-600">Gupta</span>{" "}
                    </h1>
                    <h2 className="text-xl px-7 md:px-0">Gopal Ganj Bambi Road Orai (jalaun)Uttar Pradesh, India </h2>
                    <div className="w-full h-[2px] bg-yellow-500 px-5 md:px-0"></div>
                    <p className="text-cyan-500 px-5 md:px-0">+91 8887641882 / vikasgupta2426@gmail.com</p>

                    <div className="flex justify-center items-center mt-5 gap-8 px-5 md:px-0">
                      <Link target="_blank" to="https://www.linkedin.com/in/vikas-gupta-273a9725b" className="text-cyan-500 hover:text-yellow-500">
                        <FaLinkedin className="sm:text-5xl text-3xl" />
                      </Link>

                      <Link target="_blank" to="https://github.com/iVikasGupta" className="text-cyan-500 hover:text-yellow-500">
                        <FaSquareGithub className="sm:text-5xl text-3xl" />
                      </Link>
                      <Link target="_blank" to="mailto:vikasgupta2426S@gmail.com" className="text-cyan-500 hover:text-yellow-500">
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
          </motion.div>
        </>
      ) : (
        ""
      )}

      {/* mobile */}
    </>
  );
};

export default Navbar;
