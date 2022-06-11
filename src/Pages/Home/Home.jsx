import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section className="container">
      <div className="homeWrap md:flex justify-center items-center mt-16">
        {/* image box  */}
        <div className="flex flex-1 justify-center md:justify-end items-center mb-8 md:mb-0">
          <div className="imgBox w-[14rem] md:w-[19rem] h-[14rem] md:h-[19rem] bg-slate-200 rounded-full overflow-hidden md:my-10 md:mr-20">
            <div className="img w-full h-full"></div>
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          {/* home text box  */}
          <div className=" md:max-w-[70%]">
            <h2 className="text-xl sm:text-3xl md:text-4xl text-[#007ced] font-semibold">
              Tanvir Ahmed
            </h2>
            <h4 className="text-base sm:text-lg text-slate-600 my-3">
              Web Devloper
            </h4>
            <div className="flex justify-center">
             <p className="max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              dolores eveniet pariatur consequatur, corrupti nesciunt illo
              tempora eius illum deserunt, natus provident ea fugit adipisci!
            </p>

            </div>

            <div className="buttonBox mt-6">
              <a href="Tanvir Ahmed_Resume.pdf" download={"Tanvir Resume"} className="btn btn-primary">Download Resume</a>
              <Link to="/contact" className="btn btn-primary">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
