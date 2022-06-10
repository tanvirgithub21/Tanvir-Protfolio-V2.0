import React from "react";
import { Link } from "react-router-dom";
import project1 from "../../Images/project-1.png";

const SingleProject = () => {
  return (
    <div class=" w-full bg-white rounded-lg border border-gray-200 shadow-md mb-8 md:mb-0">
      <img class="rounded-t-lg" src={project1} alt="img" />
      <div class="p-5">
        <h2 className="text-2xl font-[600]">3B Manufacturer</h2>
        <h4 className="text-sm text-gray-500">tools manufacturer warehouse</h4>
        <p className="mt-2 text-md text-gray-600">Features</p>
        <ul className="list-disc ml-[1.2rem] text-sm mt-1 text-gray-600">
          <li>Login Email and password & Google</li>
          <li>Full Responsive website mobile tablet desktop</li>
          <li>Use JWT verify user</li>
        </ul>
        <div className="language mt-4 flex flex-wrap">
          <span className="px-2 py-1 mt-2 bg-slate-600 text-white text-[500] text-sm mr-2 rounded-md">
            HTML
          </span>
          <span className="px-2 py-1 mt-2 bg-slate-600 text-white text-[500] text-sm mr-2 rounded-md">
            CSS
          </span>
          <span className="px-2 py-1 mt-2 bg-slate-600 text-white text-[500] text-sm mr-2 rounded-md">
            Javascript
          </span>
          <span className="px-2 py-1 mt-2 bg-slate-600 text-white text-[500] text-sm mr-2 rounded-md">
            React
          </span>
          <span className="px-2 py-1 mt-2 bg-slate-600 text-white text-[500] text-sm mr-2 rounded-md">
            MERN
          </span>
        </div>

        <div className="links mt-6 flex flex-wrap">
          <a
            href=""
            className="px-2 py-1 mt-2 bg-amber-500 text-gray-100 text-[500] text-sm mr-2 rounded-md"
          >
            Preview
          </a>
          <a
            href=""
            className="px-2 py-1 mt-2 bg-amber-500 text-gray-100 text-[500] text-sm mr-2 rounded-md"
          >
            Git Client
          </a>
          <a
            href=""
            className="px-2 py-1 mt-2 bg-amber-500 text-gray-100 text-[500] text-sm mr-2 rounded-md"
          >
            Git Server
          </a>
          <Link
            to=""
            className="px-2 py-1 mt-2 bg-amber-500 text-gray-100 text-[500] text-sm mr-2 rounded-md"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
