import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectsDetails = () => {
  const { _id } = useParams();

  const [singleData, setSingleData] = useState({});

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/tanvirgithub21/assainment-11-data/main/portfolio.json"
    )
      .then((res) => res.json())
      .then((data) =>
        data.map((sData) => sData?._id === _id && setSingleData(sData))
      );
  }, [_id]);

  console.log(singleData);

  return (
    <section>
      <div className="container">
        <div className="detailsBox">
          <div className="">
            <div class="max-w-4xl mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-6 md:mb-10 mt-7 md:mt-10">
              <div>
                <img
                  class="rounded-t-lg"
                  src={singleData?.projThumbnail}
                  alt="images"
                />
              </div>
              <div class="p-5">
                <div className="">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {singleData?.projName}
                  </h5>
                  <h3 class="mb-2 text-sm tracking-tight text-gray-900 dark:text-white">
                    {singleData?.projShortDric}
                  </h3>
                </div>

                {/* features  */}
                <div className=" text-gray-900 dark:text-gray-200 mb-5">
                  <p className="mt-2 text-md font-semibold ">Features</p>
                  <ul className="list-disc ml-[1.2rem] text-sm mt-1">
                    {singleData?.fractures?.map((singleFractures) => (
                      <li>{singleFractures}</li>
                    ))}
                  </ul>
                </div>

                <div className="md:flex md:items-center md:justify-center">
                  <div className="language mt-4 md:mt-0  flex flex-wrap">
                    {singleData?.projUsedLanguage?.map((language) => (
                      <span className="px-2 py-1 mt-2  md:mt-0 bg-slate-600 text-white text-[500] text-sm mr-2 rounded-md">
                        {language}
                      </span>
                    ))}
                  </div>

                  <div className="links mt-4  md:mt-0 flex flex-wrap">
                    {singleData?.projLinks?.liveSite && (
                      <a
                        href={singleData?.projLinks?.liveSite}
                        className="px-2 py-1 mt-2  md:mt-0 bg-amber-500 hover:bg-amber-300 hover:text-gray-800 ease-in-out duration-300 text-gray-100 text-[500] text-sm mr-2 rounded-md"
                      >
                        Preview
                      </a>
                    )}

                    {singleData?.projLinks?.clientSideLink && (
                      <a
                        href={singleData?.projLinks?.clientSideLink}
                        className="px-2 py-1 mt-2 md:mt-0 bg-amber-500 hover:bg-amber-300 hover:text-gray-800 ease-in-out duration-300 text-gray-100 text-[500] text-sm mr-2 rounded-md"
                      >
                        Git Client
                      </a>
                    )}

                    {singleData?.projLinks?.serverSiteLink && (
                      <a
                        href={singleData?.projLinks?.serverSiteLink}
                        className="px-2 py-1 mt-2 md:mt-0 bg-amber-500 hover:bg-amber-300 hover:text-gray-800 ease-in-out duration-300 text-gray-100 text-[500] text-sm mr-2 rounded-md"
                      >
                        Git Server
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg border border-gray-200 shadow-md mb-6 md:mb-10">
            <h2 className="text-2xl font-semibold text-gray-600 my-5 pl-5">
              Project Screenshot
            </h2>

            {singleData?.projDetailsPhotos?.map((img) => (
              <img
                className="w-full mb-6 md:mb-10 shadow-b"
                src={img}
                alt="images"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsDetails;
