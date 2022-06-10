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
    <section>
      <div className="container">
        {/* section header about me  */}
        <h2 className="text-2xl text-center font-semibold my-7">
          <span className="text-emerald-400">About</span> Me
        </h2>

        {/* about me box  */}
        <div className="aboutMeBox flex justify-center items-center">
          <div className="aboutImage flex justify-end items-center mr-28 flex-1 overflow-hidden">
            <div className="aboutMeImage w-[20rem] h-[20rem]"></div>
          </div>

          <div className="aboutText flex-1">
            <h2 className="text-3xl font-semibold mb-6">
              I'm Md Tanvir Ahmed
              <br />
              <span className="text-xl">Junior web Developer</span>
            </h2>
            <p className="max-w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              laudantium voluptatum, quod ipsum repellat dolorum assumenda nisi
              ea eius doloremque inventore nam aut voluptatibus dignissimos
              debitis voluptas accusamus modi doloribus! Ducimus ratione culpa
              quod inventore,.
            </p>
            <button className="btn btn-primary">Download Resume</button>
            {/* social icon box  */}
            <div className="socialIcon">
              <ul className="flex text-2xl text-slate-700">
                <li className="mr-5 mt-8">
                  <Link to="#">
                    <FaLinkedin />
                  </Link>
                </li>
                <li className="mr-5 mt-8">
                  <Link to="#"></Link>
                  <FaGithub />
                </li>
                <li className="mr-5 mt-8">
                  <Link to="#">
                    <FaFacebookSquare />
                  </Link>
                </li>
                <li className="mr-5 mt-8">
                  <Link to="#">
                    <FaInstagram />
                  </Link>
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
