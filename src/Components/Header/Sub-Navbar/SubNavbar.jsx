import React from "react";
import { Link } from "react-router-dom";

const SubNavbar = () => {
  return (
    <>
      <div className="hidden lg:block justify-center item-center bg-[#A1E3F9] h-[3vh] shadow-md border-b-2 border-[#41c6f2] fixed top-[7vh] w-full z-50">
        <ul className="flex justify-center items-center gap-10">
        <li className="text-xs font-thin hover:scale-110 text-black cursor-pointer"><Link to="/">Home </Link> </li>
        <li className="text-md text-blue-300 hidden sm:block">|</li>
             <li className="text-xs font-thin hover:scale-110 text-black cursor-pointer"><Link to="/projects">Projects </Link> </li>
             <li className="text-md text-blue-300 hidden sm:block">|</li>
             <li className="text-xs font-thin hover:scale-110 text-black cursor-pointer"><Link to="/services">Services </Link> </li>
             <li className="text-md text-blue-300 hidden sm:block">|</li>
             <li className="text-xs font-thin hover:scale-110 text-black cursor-pointer"><Link to="/about">About Me </Link> </li>
             <li className="text-md text-blue-300 hidden sm:block">|</li>
             <li className="text-xs font-thin hover:scale-110 text-black cursor-pointer"><Link to="/contact">Contact Me </Link> </li>
             
        </ul>
      </div>
    </>
  );
};

export default SubNavbar;
