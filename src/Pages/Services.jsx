// import React from "react";
import Navbar from "../Components/Header/Navbar/Navbar";
import SubNavbar from "../Components/Header/Sub-Navbar/SubNavbar";
import services from "../assets/ServicesCards.json";
import Footer from "../Components/Footer/Footer";

const Services = () => {
  return (
    <>
      <section className="relative h-screen scroll-smooth overflow-x-hidden hide-scrollbar w-screen">
        <Navbar />
        <SubNavbar />
        <div
          className="py-20 bg-white text-blue-900 sm:py-32 sm:h-screen flex justify-center items-center overflow-y-auto"
          style={{
            backgroundImage: `url("https://res.cloudinary.com/dqt8po5ie/image/upload/v1742359544/InteriorDesignWeb/bg1_w43a5m.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:pt-10">
            <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 mt-2 sm:text-left justify-items-stretch">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden bg-white border-4 border-blue-300 shadow-md rounded-xl h-full p-9 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                  style={{
                    backgroundImage: `url("https://res.cloudinary.com/dqt8po5ie/image/upload/v1742359561/InteriorDesignWeb/bg4_xwcahq.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <h3 className="mb-4 text-xl font-bold text-blue-900 leading-tight">{service.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />   
      </section>
    </>
  );
};

export default Services;
