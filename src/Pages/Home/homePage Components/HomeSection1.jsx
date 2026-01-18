// import React from "react";
import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../assets/Software Wireframe.json";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import MongoDBLogo from "/src/assets/MongoDBLogo.png";
import expressLogo from "/src/assets/expressLogo.png";
import nodeLogo from "/src/assets/nodeLogo.png";
import reactLogo from "/src/assets/reactLogo.png";
import DockerLogo from "/src/assets/DockerLogo.png";
import RedisLogo from "/src/assets/RedisLogo.png";
import AwsLogo from "/src/assets/AwsLogo.png";
import MySQLLogo from "/src/assets/MySQLLogo.png";
import jsLogo from "/src/assets/jsLogo.png";
import postmanLogo from "/src/assets/postmanLogo.png";
import tailwindLogo from "/src/assets/tailwindLogo.png";
import postgreLogo from "/src/assets/postgreLogo.png";
const HomeSection1 = () => {
  return (
    <>
      <div className="h-screen snap-start flex justify-center items-center relative">
        <div
          className="grid md:grid-cols-12 h-screen w-full "
          style={{
            backgroundImage: `url("https://res.cloudinary.com/dqt8po5ie/image/upload/v1742359561/InteriorDesignWeb/bg4_xwcahq.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="col-span-1 md:col-span-4  md:flex justify-center items-center relative hidden">
            <Lottie animationData={animationData} loop autoPlay />
          </div>
          <div className="col-span-1 md:col-span-4 flex flex-col justify-center gap-5 items-center relative">
            <motion.img src={MongoDBLogo} alt="png3" className="absolute top-16 left-0  h-[150px] bounce" />
            <motion.img src={expressLogo} alt="png3" className="absolute top-44 left-[100px] h-[60px] bounce" />
            <motion.img src={reactLogo} alt="png3" className="absolute top-52 left-[250px] h-[60px] bounce" />
            <motion.img src={nodeLogo} alt="png3" className="absolute top-28 left-[300px] h-[70px] bounce" />

            {/* <motion.img src={logo} alt="png3" className="absolute top-28 left-[300px] h-[30px] bounce" /> */}
            <motion.img src={DockerLogo} alt="png3" className="absolute bottom-24 left-[20px]  h-[60px] bounce" />
            <motion.img src={RedisLogo} alt="png3" className="absolute bottom-44 left-[100px] h-[80px] bounce" />
            <motion.img src={AwsLogo} alt="png3" className="absolute bottom-28 left-[200px] h-[40px] bounce" />
            <motion.img src={MySQLLogo} alt="png3" className="absolute bottom-44 left-[350px] h-[60px] bounce" />

            <motion.h1
              className="text-3xl md:text-5xl text-center  text-white "
              viewport={{ once: true }}
              style={{
                fontFamily: "Abril Fatface",
                backgroundImage: `url("https://res.cloudinary.com/dqt8po5ie/image/upload/v1742359546/InteriorDesignWeb/text-bg_bu8xx2.png")`,
                backgroundPosition: "center",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                // lineHeight: "1.6", // Adjusts height to avoid cutting descenders
              }}
            >
              Full Stack Developer
            </motion.h1>
            <div className="text-xs text-center text-blue-900 px-5 md:p-0">
              <p className="text-[16px] pb-2 font-semibold">
                Hello I&apos;m Vikas Gupta, A Experienced Developer From India.
                <br />
              </p>
              Expertise in Full Stack Web Development, with Hands on in Microservice Architecture And CI-CD Deployment
            </div>
            <Link to="/contact">
              <button
                className="btn hover:scale-110 cursor-pointer text-blue-200 relative z-[100]"
                style={{
                  backgroundImage: `url("https://res.cloudinary.com/dqt8po5ie/image/upload/v1742359546/InteriorDesignWeb/text-bg_bu8xx2.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                Contact Me{" "}
              </button>
            </Link>
          </div>

          <div className="col-span-1 md:col-span-4  h-screen w-full border-blue-900 border-double  hidden md:block ">
            <div className="h-full flex justify-end items-center me-20 ">
              <ul className="">
                <li className="text-lg my-10 p-5 border-4 border-blue-300 bg-white shadow-md rounded-full cursor-pointer hover:scale-110">
                  <a href="https://www.linkedin.com/in/vikas-gupta-273a9725b" target="_blank" rel="noopener noreferrer" className="text-blue-700">
                    <FaLinkedin className="text-5xl" />
                  </a>
                </li>

                <li className="text-lg my-10 p-5 border-4 border-blue-300 bg-white shadow-md rounded-full cursor-pointer hover:scale-110">
                  <Link target="_blank" to="https://github.com/iVikasGupta" className="text-blue-700">
                    <FaSquareGithub className="text-5xl" />
                  </Link>
                </li>
                <li className="text-lg my-10 p-5 border-4 border-blue-300 bg-white shadow-md rounded-full cursor-pointer hover:scale-110">
                  <Link target="_blank" to="mailto:vikasgupta2426@gmail.com" className="text-red-600">
                    <SiGmail className="text-5xl" />
                  </Link>
                </li>
              </ul>
            </div>
            <motion.img src={tailwindLogo} alt="png3" className="absolute top-36 left-[250px]  h-[20px] bounce" />
            <motion.img src={jsLogo} alt="png3" className="absolute  top-36 right-[370px] h-[60px] bounce" />
            <motion.img src={postmanLogo} alt="png3" className="absolute bottom-20 left-[300px]  h-[60px] bounce" />
            <motion.img src={postgreLogo} alt="png3" className="absolute bottom-24 right-[400px]  h-[60px] bounce" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-64 md:w-1/2 h-[60%] gap-3 md:gap-5 p-3 md:p-8 rounded-2xl absolute z-50"></div>
      </div>
    </>
  );
};

export default HomeSection1;
