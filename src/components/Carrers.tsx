import Tags from "./Tags";

import experiences from "../resources/experiences.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Carrers = () => {
  return (
    <div className="border border-slate-800">
      {experiences?.map((experience) => {
        return (
          <div className="grid grid-cols-12 border-b border-slate-800 py-6">
            <div className="col-span-3 text-right text-blue-100 font-semibold text-sm px-3">
              {experience.periode}
            </div>
            <div className="col-span-9 text-blue-200 px-3">
              <h3 className="text-lg mb-1 font-bold">{experience.title}</h3>

              {experience?.url && (
                <a
                  href={experience?.url}
                  target="_blank"
                  className="font-bold text-blue-300 hover:underline text-sm mb-3 inline-block"
                  rel="noreferrer"
                >
                  {experience?.url}{" "}
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              )}

              <p className="mb-3">{experience?.description}</p>

              <span className="text-sm font-bold">Tech stack:</span>
              <Tags tags={experience.techs} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carrers;
