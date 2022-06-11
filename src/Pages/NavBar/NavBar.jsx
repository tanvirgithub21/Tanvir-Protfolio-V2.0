import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  

    const handleMenu = () => setOpen(!open)

  const active =
    "block py-2 px-4 bg-[#007ced] md:bg-transparent text-white rounded md:text-blue-700 font-[500] md:p-0";
  const deActive =
    "block py-2 pr-4 pl-3 text-gray-700 rounded  font-[500] md:p-0";

  return (
    <nav class="px-2 sm:px-4 py-2.5 sticky top-0 left-0 z-50  bg-white shadow-b">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <div class="self-center text-xl font-semibold whitespace-nowrap">
          Tanivr
        </div>

        <div onClick={handleMenu} className="">
          {open ? (
            <button
              type="button"
              className="inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden"
            >
              <svg
                class="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          ) : (
            <button
              type="button"
              class="inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden"
            >
              <svg
                class="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          )}
        </div>

        <div class={`w-full md:block md:w-auto ease-in-out duration-1000 ${open ? "mt-0" : "mt-[-300px]" }  md:mt-0 z-20`}>
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? active : deActive)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? active : deActive)}
              >
                About Me
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? active : deActive)}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Blog"
                className={({ isActive }) => (isActive ? active : deActive)}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? active : deActive)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
