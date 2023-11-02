import Tags from "./Tags";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header3 from "./Reusable/Header3";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faMaximize,
} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <>
      <Header3>Projects</Header3>
      <div className="border border-slate-800 rounded-lg overflow-hidden">
        <div className="flex gap-4 border-b border-slate-800 p-6 hover:bg-slate-950 transition-all delay-0">
          <div className="flex-none flex flex-col items-start">
            <img
              src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
              alt=""
              className="object-cover w-40 h-24 rounded-lg mb-4"
            />

            <div className="text-slate-200 text-xl w-full flex justify-around">
              <FontAwesomeIcon
                icon={faGithub}
                className="hover:text-slate-500 transition-all delay-0"
              />

              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="hover:text-slate-500 transition-all delay-0"
              />

              <FontAwesomeIcon
                icon={faMaximize}
                className="hover:text-slate-500 transition-all delay-0"
              />
            </div>
          </div>
          <div className="text-slate-200">
            <h4 className="text-lg mb-1 font-bold">Project 1</h4>
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              itaque blanditiis molestiae corporis dolore aliquam culpa sed.
              Quisquam veritatis iste hic enim, numquam iure. Eveniet facilis
              ipsa sit nesciunt laboriosam.
            </p>

            <span className="text-sm font-bold">Tech stack:</span>
            <Tags
              tags={["React", "Tailwind", "Firebase"]}
              className="bg-red-950 border border-red-800"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
