// import React from "react";
// import { motion } from "framer-motion";
// import { FaHome } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../../../assets/Website Traffic Data.json";

const HomeSection3 = () => {
  return (
    <>
      <div
        className="h-screen bg-[#D4F6FF] snap-start flex justify-center items-center relative md:pt-10"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dqt8po5ie/image/upload/v1742359544/InteriorDesignWeb/bg1_w43a5m.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="grid xl:grid-cols-2 grid-cols-1">
          <div className="col-span-1 flex flex-col justify-center items-center p-2">
            <div className="p-2 mx-5 md:p-5 md:mx-10 flex flex-col justify-center ">
              <div className="flex flex-col">
                <div className="flex items-center pt-6 sm:pt-0">
                  <h1 className="md:text-lg text-sm font-semibold font-sans uppercase text-blue-500">MY EXPERTISE</h1>
                  <span className="w-1/2 h-[3px] bg-blue-500 mx-2"></span>
                </div>

                <h2 className="text-sm md:text-2xl text-blue-950 font-bold sm:px-3">CI/CD Pipelines + Cloud Infrastructure + Automation + Monitoring</h2>
                <p className="text-xs text-blue-950 font-bold px-3 p-2">* Hands-on with Production-Grade DevOps Systems & Scalable Deployments</p>
              </div>
              <div className="">
                <ul className="rounded-md">
                  <li className="text-sm text-pretty text-black sm:my-5">
                    <span className="text-lg sm:text-xl me-2">☁️</span>
                    Cloud-native architecture using AWS, Docker & Kubernetes
                  </li>

                  <li className="text-sm text-pretty text-black sm:my-5">
                    <span className="text-lg sm:text-xl me-2">🛠️</span>
                    End-to-end CI/CD pipeline design with Jenkins, GitHub Actions & GitLab CI
                  </li>

                  <li className="text-sm text-pretty text-black sm:my-5">
                    <span className="text-lg sm:text-xl me-2">📦</span>
                    Infrastructure as Code using Terraform & AWS CloudFormation
                  </li>

                  <li className="text-sm text-pretty text-black sm:my-5">
                    <span className="text-lg sm:text-xl me-2">🔐</span>
                    DevSecOps integration with DDoS protection, rate limiting & secret management
                  </li>

                  <li className="text-sm text-pretty text-black sm:my-5">
                    <span className="text-lg sm:text-xl me-2">📈</span>
                    Monitoring & observability with Prometheus, Grafana, ELK & CloudWatch
                  </li>

                  <li className="text-sm text-pretty text-black sm:my-5">
                    <span className="text-lg sm:text-xl me-2">⚡</span>
                    Performance tuning with auto-scaling, caching (Redis/CDN), and load balancing
                  </li>

                  <li className="text-sm text-pretty text-black sm:my-5">
                    <span className="text-lg sm:text-xl me-2">🧪</span>
                    Automated testing pipelines with Postman, JMeter, and SonarQube integration
                  </li>

                  <li className="text-sm text-pretty text-black sm:my-5">
                    <span className="text-lg sm:text-xl me-2">🚀</span>
                    GitOps workflows with branching strategies and version-controlled deployments
                  </li>

                  <li className="text-sm text-pretty text-black sm:my-5">
                    <span className="text-lg sm:text-xl me-2">🐳</span>
                    Local-to-prod consistency using Docker Compose & containerized dev environments
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-1  hidden xl:block">
            <Lottie animationData={animationData} loop autoPlay />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection3;
