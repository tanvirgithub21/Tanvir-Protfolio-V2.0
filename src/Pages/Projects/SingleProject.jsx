import React from "react";
import { Link } from "react-router-dom";

const SingleProject = ({ singleData }) => {
  console.log(singleData);

  return (
    <div class=" w-full bg-white rounded-lg border border-gray-200 shadow-md mb-8 md:mb-0">
      <img class="rounded-t-lg" src={singleData?.projThumbnail} alt="img" />
      <div class="p-5">
        <h2 className="text-2xl font-[600]">{singleData?.projName}</h2>
        <h4 className="text-sm text-gray-500">{singleData?.projShortDric}</h4>
        <p className="mt-2 text-md text-gray-600">Features</p>
        <ul className="list-disc ml-[1.2rem] text-sm mt-1 text-gray-600">
          {singleData?.fractures?.map((singleFractures) => (
            <li>{singleFractures}</li>
          ))}
        </ul>
        <div className="language mt-4 flex flex-wrap">
          {singleData?.projUsedLanguage?.map((language) => (
            <span className="px-2 py-1 mt-2 bg-slate-600 text-white text-[500] text-sm mr-2 rounded-md">
              {language}
            </span>
          ))}
        </div>

        <div className="links mt-6 flex flex-wrap">
          {singleData?.projLinks?.liveSite && (
            <a
              href={singleData?.projLinks?.liveSite}
              className="px-2 py-1 mt-2 bg-amber-500 text-gray-100 text-[500] text-sm mr-2 rounded-md"
            >
              Preview
            </a>
          )}

          {singleData?.projLinks?.clientSideLink && (
            <a
              href={singleData?.projLinks?.clientSideLink}
              className="px-2 py-1 mt-2 bg-amber-500 text-gray-100 text-[500] text-sm mr-2 rounded-md"
            >
              Git Client
            </a>
          )}

          {singleData?.projLinks?.serverSiteLink && (
            <a
              href={singleData?.projLinks?.serverSiteLink}
              className="px-2 py-1 mt-2 bg-amber-500 text-gray-100 text-[500] text-sm mr-2 rounded-md"
            >
              Git Server
            </a>
          )}

          <Link
            to={`/projects/${singleData?._id}`}
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
