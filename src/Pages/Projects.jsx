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
                  className="bg-white border-4 border-blue-400 mt-[2vh] sm:mt-[6vh] shadow-lg"
                  style={{
                    backgroundImage: `url("https://res.cloudinary.com/dqt8po5ie/image/upload/v1742359544/InteriorDesignWeb/bg1_w43a5m.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <img src={project.img} alt={project.title} className="w-full h-60 object-cover" />
                  <div className="p-6 rounded-lg">
                    <h2 className="text-xl text-blue-800 font-semibold mb-2">{project.title}</h2>
                    <p className="text-gray-600 mb-4 h-32">{project.description}</p>
                    <p className="text-sm text-blue-500 mb-4 h-14">
                      <span className="text-blue-800">Focused on :</span> {project.focusedOn}
                    </p>
                    <div className="flex items-center justify-center bottom-3 gap-2">
                      {project.githubLink && (
                        <Link
                          to={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                        >
                          Details
                        </Link>
                      )}
                      {project.liveLink && (
                        <Link
                          to={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
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
