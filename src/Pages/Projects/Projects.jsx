import React from "react";
import SingleProject from "./SingleProject";


const Projects = () => {
  return (
    <div>
      <div className="container">
        {/* section header projects  */}
        <h2 className="text-emerald-400 text-2xl text-center font-semibold my-7">
          Our Projects
        </h2>

        <div className="projectsBox my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-6 md:gap-10">
            <SingleProject/>
            <SingleProject/>
            <SingleProject/>
        </div>
      </div>
    </div>
  );
};

export default Projects;
