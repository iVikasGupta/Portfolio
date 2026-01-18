// import React from "react";
import HomeCards from "./HomeCards";
import { Link } from "react-router-dom";

const HomeSection4 = () => {
  return (
    <>
      <div
        className="h-screen bg-[#D4F6FF] snap-start sm:flex sm:flex-col justify-center items-center relative hidden"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dqt8po5ie/image/upload/v1742359544/InteriorDesignWeb/bg1_w43a5m.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <HomeCards />
        <Link to="/projects">
          <button
            className="btn cursor-pointer  mt-5  mb-5 hover:scale-110 text-blue-200"
            style={{
              backgroundImage: `url("https://res.cloudinary.com/dqt8po5ie/image/upload/v1742359546/InteriorDesignWeb/text-bg_bu8xx2.png")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            Explore more{" "}
          </button>
        </Link>
      </div>
    </>
  );
};

export default HomeSection4;
