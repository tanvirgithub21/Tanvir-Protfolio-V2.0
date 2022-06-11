import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
  FaInstagram,
  FaUserCircle,
  FaLaptopCode,
  FaLocationArrow,
  FaRegEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { name, email, messege } = data;
    emailjs
      .send(
        "service_u2g2z97",
        "template_phsfzic",
        { name, email, messege },
        "cy19EdVHUT7Htab4m"
      )
      .then((res) => {
        res && toast.success("SEND MESSAGE");
        reset();
      })
      .catch((err) => {
        err && toast.error("SMUTTING WRONG");
      });
  };

  return (
    <div className="container">
      {/* section header about me  */}
      <h2 className="text-2xl text-center font-semibold mt-5  mb-7 md:mb-0">
        <span className="text-emerald-400">Contact</span> US
      </h2>
      <div className="w-full h-[calc(100vh-55px)] md:flex justify-center items-center">
        <div className="w-full md:w-[60rem] md:flex shadow-b rounded-2xl overflow-hidden">
          <div className="w-full md:w-[65%] h-[28rem] contactUs  bg-[#FFFF] p-6">
            <h2 className="text-xl font-[500] mb-5">Send us a Massages</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div class="">
                <div>
                  <span class="uppercase text-sm text-gray-600 font-[500]">
                    Full Name
                  </span>
                  <input
                    class="w-full bg-gray-300 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Enter Your Full Name"
                    {...register("name")}
                    required
                  />
                </div>
                <div class="mt-2">
                  <span class="uppercase text-sm text-gray-600 font-[500]">
                    Email
                  </span>
                  <input
                    class="w-full bg-gray-300 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    {...register("email")}
                    required
                  />
                </div>
                <div class="mt-2">
                  <span class="uppercase text-sm text-gray-600 font-[500]">
                    Message
                  </span>
                  <textarea
                    required
                    {...register("message")}
                    class="w-full h-24 bg-gray-300 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline"
                  ></textarea>
                </div>
                <div class="mt-2">
                  <button class="uppercase text-sm font-[500] tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="min-w-full md:w-[35%] md:min-w-[18rem] h-[28rem] contactInfo bg-[#143d6c] p-4 text-center md:text-left">
            <div className="">
              <h4 className=" text-lg font-[500] text-slate-100 mb-5">
                Contact Information
              </h4>

              <div className="linkBox flex md:block justify-center items-center  ">
                <ul className="text-gray-100">
                  <li className="mb-5 flex items-center">
                    <FaUserCircle className="mr-2" /> Md Tanvir Ahmed
                  </li>
                  <li className="mb-5 flex items-center">
                    <FaLaptopCode className="mr-2" />
                    Junior Web Devloper
                  </li>
                  <li className="mb-5 flex items-center">
                    <FaPhoneAlt className="mr-2" />
                    +880 1845238826
                  </li>
                  <li className="mb-5 flex items-center">
                    <FaRegEnvelope className="mr-2" />
                    tanvir.bd.global@gmail.com
                  </li>
                  <li className="mb-5 flex items-center">
                    <FaLocationArrow className="mr-2" />
                    Banugonj, Barisal, Bangladesh
                  </li>
                </ul>
              </div>

              <div className="socialIcon flex justify-center items-center">
                <ul className="flex justify-center sm:justify-start text-2xl text-gray-200">
                  <li className="mr-5 mt-8 hover:text-gray-400 ease-in-out duration-300">
                    <a href="https://www.linkedin.com/in/tanvirahmed6174/">
                      <FaLinkedin />
                    </a>
                  </li>
                  <li className="mr-5 mt-8 hover:text-gray-400 ease-in-out duration-300">
                    <a href="https://github.com/tanvirgithub21">
                      <FaGithub />
                    </a>
                  </li>
                  <li className="mr-5 mt-8 hover:text-gray-400 ease-in-out duration-300">
                    <a href="https://www.facebook.com/tanviruniquebd/">
                      <FaFacebookSquare />
                    </a>
                  </li>
                  <li className="mr-5 mt-8 hover:text-gray-400 ease-in-out duration-300">
                    <a href="https://www.instagram.com/tan_vir_ahmed___/">
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
