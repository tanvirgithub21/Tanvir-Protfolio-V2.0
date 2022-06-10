import React from "react";
import tanir from "../../Images/tanvir.png";
import "./Home.css";

const Home = () => {
  return (
    <section className="container">
      <div className="homeWrap flex justify-center items-center mt-16">
        {/* image box  */}
        <div className="flex flex-1 justify-end items-center">
          <div className="imgBox w-[19rem] h-[19rem] bg-slate-200 rounded-full overflow-hidden my-10 mr-20">
            <div className="img w-full h-full"></div>
          </div>
        </div>
        <div className="flex-1">
          {/* home text box  */}
          <div className=" max-w-[70%]">
            <h2 className="text-xl sm:text-3xl md:text-4xl  font-semibold">
              Tanvir Ahmed
            </h2>
            <h4 className="text-base sm:text-lg text-slate-600 my-3">
              Web Devloper
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              dolores eveniet pariatur consequatur, corrupti nesciunt illo
              tempora eius illum deserunt, natus provident ea fugit adipisci!
            </p>

            <div className="buttonBox">
              <button className="btn btn-primary">Download Resume</button>
              <button className="btn btn-primary">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
