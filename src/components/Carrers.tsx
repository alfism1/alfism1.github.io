import Tags from "./Tags";

import experiences from "../datas/experiences.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Header3 from "./Reusable/Header3";

const Carrers = () => {
  return (
    <>
      <Header3>Experiences</Header3>
      <div className="border border-slate-800 rounded-lg overflow-hidden">
        {experiences?.map((experience) => {
          return (
            <div className="grid grid-cols-12 border-b border-slate-800 py-6 hover:bg-slate-950 transition-all delay-0">
              <div className="col-span-12 lg:col-span-3 lg:text-right mb-2 lg:mb-0 text-blue-100 font-semibold text-xs md:text-sm px-6 lg:px-3">
                {experience.periode}
              </div>
              <div className="col-span-12 lg:col-span-9 text-blue-200 px-6 lg:px-3">
                <h3 className="text-base md:text-lg mb-1 font-bold">
                  {experience.title}
                </h3>

                {experience?.url && (
                  <a
                    href={experience?.url}
                    target="_blank"
                    className="font-bold text-blue-300 hover:underline text-xs md:text-sm mb-3 inline-block"
                    rel="noreferrer"
                  >
                    {experience?.url}{" "}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                )}

                <p className="mb-3 text-sm md:text-base">
                  {experience?.description}
                </p>

                <span className="text-xs md:text-sm font-bold">
                  Tech stack:
                </span>
                <Tags
                  tags={experience.techs}
                  className="bg-red-950 border border-red-800"
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Carrers;
