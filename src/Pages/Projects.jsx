// import React from "react";
import Navbar from "../Components/Header/Navbar/Navbar";
import projects from "../assets/projects/ProjectsCardsData.json";
import SubNavbar from "../Components/Header/Sub-Navbar/SubNavbar";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";

const Projects = () => {
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
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:pt-[9vh]">
            <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 mt-2 sm:text-left sm:pt-[75vh]">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-blue-300 mt-[2vh] sm:mt-[6vh] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img src={project.img} alt={project.title} className="w-full h-60 object-cover" />
                  <div className="p-5 bg-white bg-opacity-95">
                    <h2 className="text-lg text-blue-800 font-bold mb-2">{project.title}</h2>
                    <p className="text-gray-700 mb-2 text-xs leading-snug text-justify line-clamp-3">{project.description}</p>
                    <p className="text-xs text-gray-600 mb-2 leading-snug">
                      <span className="text-blue-800 font-semibold">Focused on:</span> {project.focusedOn}
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      {project.githubLink && (
                        <Link
                          to={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-lg text-sm font-medium transition-colors duration-200"
                        >
                          Details
                        </Link>
                      )}
                      {project.liveLink && (
                        <Link
                          to={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-600 hover:bg-green-700 text-white py-2 px-5 rounded-lg text-sm font-medium transition-colors duration-200"
                        >
                          Live Demo
                        </Link>
                      )}
                    </div>
                  </div>
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

export default Projects;
