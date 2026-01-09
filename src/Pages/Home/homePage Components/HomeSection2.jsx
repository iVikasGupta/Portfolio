import { motion } from "framer-motion";
import React from "react";
import { MdVerified } from "react-icons/md";
import profile from "/Profile.png";

const HomeSection2 = () => {
  return (
    <>
      <div
        className="h-screen bg-white snap-start flex justify-center items-center relative"
        style={{
          backgroundImage: `url("D:/portfolio/full-stack-developer-portfolio/public/Profile.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pt-[10vh]">
          <div className="container mx-auto pb-8 sm:py-8">
            <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
              <div className="col-span-4 sm:col-span-3 ">
                <div className=" border-4 border-blue-300 shadow rounded-lg p-2 sm:p-6 h-full">
                  <div className="flex flex-col items-center">
                    <img src={profile} className="w-24 h-w-24 bg-gray-300 border-4 border-yellow-300 rounded-full  shrink-0" />
                    <h1 className="text-lg font-bold text-blue-900">
                      <span className="flex justify-center items-center">
                        Vikas Gupta
                        <MdVerified className="ms-1 text-blue-500" />
                      </span>
                    </h1>
                    <p className="text-blue-500">Full Stack Developer</p>
                    <p className="text-blue-800 text-sm">MCA (2024)</p>
                    <p className="text-blue-800 text-center text-xs">G L Bajaj Institute of Technology and Management Greater Noida</p>
                  </div>
                  <hr className="my-6 border-t border-blue-700" />
                  <div className="flex flex-col">
                    <ul className=" p-4 rounded-lg">
                      <li className="mb-2 flex justify-center items-center gap-2">
                        <h2 className="font-bold text-yellow-500 font-sans">JavaScript</h2>

                        {/* Progress bar */}
                        <div className="h-3 w-full rounded-full overflow-hidden bg-slate-300">
                          <div className="h-full rounded-full bg-blue-500" style={{ width: "90%" }} />
                        </div>
                      </li>
                      <li className="mb-2 flex justify-center items-center gap-2">
                        <h2 className="font-bold text-green-700 font-sans">Node.js</h2>

                        {/* Progress bar */}
                        <div className="h-3 w-full rounded-full overflow-hidden bg-slate-300">
                          <div className="h-full rounded-full bg-blue-500" style={{ width: "90%" }} />
                        </div>
                      </li>
                      <li className="mb-2 flex justify-center items-center gap-2">
                        <h2 className="font-bold text-black font-sans">Express</h2>

                        {/* Progress bar */}
                        <div className="h-3 w-full rounded-full overflow-hidden bg-slate-300">
                          <div className="h-full rounded-full bg-blue-500" style={{ width: "95%" }} />
                        </div>
                      </li>
                      <li className="mb-2 flex justify-center items-center gap-2">
                        <h2 className="font-bold text-blue-500 font-sans">React.js</h2>

                        {/* Progress bar */}
                        <div className="h-3 w-full rounded-full overflow-hidden bg-slate-300">
                          <div className="h-full rounded-full bg-blue-500" style={{ width: "85%" }} />
                        </div>
                      </li>
                      <li className="mb-2 flex justify-center items-center gap-2">
                        <h2 className="font-bold text-blue-500 font-sans">Tailwind</h2>

                        {/* Progress bar */}
                        <div className="h-3 w-full rounded-full overflow-hidden bg-slate-300">
                          <div className="h-full rounded-full bg-blue-500" style={{ width: "100%" }} />
                        </div>
                      </li>
                      <li className="mb-2 flex justify-center items-center gap-2">
                        <h2 className="font-bold text-green-700 font-sans">MongoDB</h2>

                        {/* Progress bar */}
                        <div className="h-3 w-full rounded-full overflow-hidden bg-slate-300">
                          <div className="h-full rounded-full bg-blue-500" style={{ width: "85%" }} />
                        </div>
                      </li>
                      <li className="mb-2 flex justify-center items-center gap-2">
                        <h2 className="font-bold text-blue-800 font-sans">Docker</h2>

                        {/* Progress bar */}
                        <div className="h-3 w-full rounded-full overflow-hidden bg-slate-300">
                          <div className="h-full rounded-full bg-blue-500" style={{ width: "60%" }} />
                        </div>
                      </li>
                      <li className="mb-2 flex justify-center items-center gap-2">
                        <h2 className="font-bold text-red-700 font-sans">Redis</h2>

                        {/* Progress bar */}
                        <div className="h-3 w-full rounded-full overflow-hidden bg-slate-300">
                          <div className="h-full rounded-full bg-blue-500" style={{ width: "80%" }} />
                        </div>
                      </li>
                      <li className="mb-2 flex justify-center items-center gap-2">
                        <h2 className="font-bold text-slate-700 font-sans">AWS</h2>

                        {/* Progress bar */}
                        <div className="h-3 w-full rounded-full overflow-hidden bg-slate-300">
                          <div className="h-full rounded-full bg-blue-500" style={{ width: "50%" }} />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-span-4 sm:col-span-9">
                <div className="border-4 border-blue-300 shadow rounded-lg p-6 h-full hidden sm:block">
                  <h2 className="text-xl text-center text-blue-900 font-bold mb-2">Professional Summary</h2>
                  <p className="text-gray-700 text-sm" style={{ fontFamily: "Caveat, cursive" }}>
                    I'm a Full Stack Developer specializing in building high-performance, secure, and scalable web applications using the MERN stack. I combine
                    strong technical skills in Frontend Development, Backend Engineering, and Database Architecture with a DevOps mindset, ensuring applications
                    are both feature-rich and operationally resilient. Passionate about creating solutions that balance user experience with technical
                    excellence, I thrive on solving complex scalability challenges and implementing robust security measures.
                  </p>

                  <h2 className="text-xl text-center text-blue-900 font-bold mt-6 mb-4">Experience</h2>
                  <div className="mb-6">
                    <div className="flex justify-between flex-wrap gap-2 w-full">
                      <span className="text-blue-600 font-bold">Full Stack Developer</span>
                      <p>
                        <span className="text-gray-800 text-xs mr-2">Ezpedal</span>
                        <span className="text-gray-700 text-xs  mr-2">(Onsite)</span>
                        <span className="text-black font-bold">Feb 2025 - Sep 2025</span>
                      </p>
                    </div>
                    <p className="mt-2 text-sm text-gray-500" style={{ fontFamily: "Caveat, cursive" }}>
                      Designed and developed responsive user interfaces (UI) using React.js and Tailwind CSS, with smooth animations powered by Framer Motion
                      Built and maintained RESTful APIs using Node.js and Express.js, enabling seamless frontend-backend communication Integrated applications
                      with both NoSQL (MongoDB) and SQL (MySQL, PostgreSQL) databases, ensuring efficient data handling and performance Performed API
                      development, integration, and testing using Postman Deployed full-stack applications on AWS EC2, handling server configuration,
                      deployment, and environment setup Applied DevOps practices such as version control with Git/GitHub, environment automation, and cloud
                      infrastructure management Participated in continuous improvement of applications, supporting scalable and maintainable deployment
                      pipelines.
                    </p>
                  </div>
                  <div className="mb-6">
                    <div className="flex justify-between flex-wrap gap-2 w-full">
                      <span className="text-blue-600 font-bold">ByteCode It Solution</span>
                      <p>
                        <span className="text-gray-800 text-xs mr-2">ByteCode It Solution</span>
                        <span className="text-gray-700 text-xs  mr-2">(Remote)</span>
                        <span className="text-black font-bold">Jun 2024 - Dec 2024</span>
                      </p>
                    </div>
                    <p className="mt-2 text-sm text-gray-500" style={{ fontFamily: "Caveat, cursive" }}>
                      Strong understanding of OOPS concepts, encapsulation, inheritance, polymorphism, and abstraction Experience writing clean, modular Java
                      code using classes, interfaces, collections, and exception handling Exposure to Java Servlets, JSP, and MVC architecture Familiar with
                      Spring Boot basics for building REST APIs (if applicable) Worked with MySQL and PostgreSQL
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between flex-wrap gap-2 w-full">
                      <span className="text-blue-600 font-bold">Web Development Trainee</span>
                      <p>
                        <span className="text-gray-800 text-xs mr-2">INCAPP</span>
                        <span className="text-gray-700 text-xs  mr-2">(Onsite)</span>
                        <span className="text-black font-bold">Jan 2023 - Mar 2023</span>
                      </p>
                    </div>
                    <p className="mt-2 text-sm text-gray-500" style={{ fontFamily: "Caveat, cursive" }}>
                      Developed Websites using HTML5, CSS, JavaScript, Bootstrap Framework and Bootstrap Website Templates. Learned about Responsiveness of
                      Website across all Devices. Learned about Domain registration, Domain Hosting Service, C Panel, Word Press
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection2;
