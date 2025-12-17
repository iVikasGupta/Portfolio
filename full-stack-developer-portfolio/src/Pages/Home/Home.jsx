import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../Components/Header/Navbar/Navbar";
import SubNavbar from "../../Components/Header/Sub-Navbar/SubNavbar";
import Footer from "../../Components/Footer/Footer";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

import { Link } from "react-router-dom";
import HomeSection1 from "./homePage Components/HomeSection1";
import HomeSection2 from "./homePage Components/HomeSection2";
import HomeSection3 from "./homePage Components/HomeSection3";
import HomeSection4 from "./homePage Components/HomeSection4";



const Home = () => {
  return (
    <>
      <section className="relative h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth overflow-x-hidden hide-scrollbar w-screen">
        <Navbar />
        <SubNavbar />
        {/* section 1 */}
        <HomeSection1 />
        {/* section 2 */}
        <HomeSection2 />
        {/* section 3 */}
        <HomeSection3 />
        {/* section 4 */}
        <HomeSection4 />

        <Footer />
      </section>
    </>
  );
};

export default Home;
