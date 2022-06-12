import React from "react";
import { Link } from "react-router-dom";
import "./AboutMe.css";
import {
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa";

const AboutMe = () => {
  return (
    <section className="backgroundImg">
      <div className="container">
        {/* section header about me  */}
        <h2 className="text-2xl text-center font-semibold py-7">
          <span className="text-emerald-400">About</span> Me
        </h2>

        {/* about me box  */}
        <div className="aboutMeBox sm:flex justify-center items-center text-center sm:text-left">
          <div className="aboutImage flex justify-center sm:justify-end sm:items-center mr-0 sm:mr-10 md:mr-28 mb-10 sm:mb-0 flex-1 overflow-hidden">
            <div className="aboutMeImage w-[20rem] h-[20rem]"></div>
          </div>

          <div className="aboutText flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              I'm Md Tanvir Ahmed
              <br />
              <span className=" text-lg md:text-xl text-[#007ced]">Junior web Developer</span>
            </h2>
            <p className="w-full mb-5  sm:max-w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              laudantium voluptatum, quod ipsum repellat dolorum assumenda nisi
              ea eius doloremque inventore nam aut voluptatibus dignissimos
              debitis voluptas accusamus modi doloribus! Ducimus ratione culpa
              quod inventore,.
            </p>
            <a href="Tanvir Ahmed_Resume.pdf" download={"Tanvir Resume"} className="btn btn-primary">Download Resume</a>
            {/* social icon box  */}
            <div className="socialIcon">
              <ul className="flex justify-center sm:justify-start text-2xl text-slate-700">
                <li className="mr-5 mt-8 hover:text-slate-500 ease-in-out duration-300">
                  <a href="https://www.linkedin.com/in/tanvirahmed6174/">
                    <FaLinkedin />
                  </a>
                </li>
                <li className="mr-5 mt-8 hover:text-slate-500 ease-in-out duration-300">
                  <a href="https://github.com/tanvirgithub21">

                  <FaGithub />
                  </a>
                </li>
                <li className="mr-5 mt-8 hover:text-slate-500 ease-in-out duration-300">
                  <a href="https://www.facebook.com/tanviruniquebd/">
                    <FaFacebookSquare />
                  </a>
                </li>
                <li className="mr-5 mt-8 hover:text-slate-500 ease-in-out duration-300">
                  <a href="https://www.instagram.com/tan_vir_ahmed___/">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default AboutMe;
