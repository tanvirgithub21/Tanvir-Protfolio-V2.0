import React, { useEffect, useState } from "react";
import SingleProject from "./SingleProject";
import { toast } from "react-toastify";

const Projects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/tanvirgithub21/assainment-11-data/main/portfolio.json"
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => {
        err && toast.error("Data not found");
      });
  }, []);

  return (
    <div>
      <div className="container">
        {/* section header projects  */}
        <h2 className="text-emerald-400 text-2xl text-center font-semibold my-7">
          Our Projects
        </h2>

        <div className="projectsBox my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-6 md:gap-10">
          {data.map((singleData) => (
            <SingleProject key={singleData._id} singleData={singleData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
