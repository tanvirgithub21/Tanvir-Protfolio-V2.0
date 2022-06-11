import React from "react";

const Blog = () => {
  return (
    <section>
      <div className="container">
        {/* section header about me  */}
        <h2 className="text-2xl text-center font-semibold my-7">
          My
          <span className="text-emerald-400"> Blog</span>
        </h2>

        <div className="mt-[7rem] sm:mt-[10rem]  blogBox flex justify-center items-center">
          <div className="text-xl sm:text-3xl md:text-4xl text-gray-400 font-bold ">
            Coming Soon...
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
