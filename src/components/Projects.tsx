import { FC, useState } from "react";
import Modal, { Styles } from "react-modal";

import Tags from "./Tags";

import Header3 from "./Reusable/Header3";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faImages,
} from "@fortawesome/free-solid-svg-icons";
import ProjectActions from "./ProjectActions";
import { Project } from "../types/projects.interface";

import projects from "../datas/projects.json";

const modalStyles: Styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 9999,
  },
  content: {
    width: "80%",
    height: "80%",
    margin: "auto",
  },
};

Modal.setAppElement("#root");

interface ProjectItemProps extends Project {
  openModal: () => void;
}
const ProjectItem: FC<ProjectItemProps> = ({
  mainImage,
  projectName,
  description,
  galleryFolder,
  techs,
  githubLink,
  projectLink,
  openModal,
}) => {
  return (
    <div className="flex  gap-4 border-b border-slate-800 p-6 hover:bg-slate-950 transition-all delay-0">
      <div className="flex-none flex flex-col items-start">
        <img
          src={mainImage}
          alt={projectName}
          className="object-cover w-40 h-24 rounded-lg mb-4"
        />

        <div className="text-slate-200 text-xl w-full flex flex-col gap-2">
          {githubLink && (
            <ProjectActions
              icon={faGithub}
              label="Github"
              onClick={() => window.open(githubLink, "_blank")}
            />
          )}

          {projectLink && (
            <ProjectActions
              icon={faArrowUpRightFromSquare}
              label="Project link"
              onClick={() => window.open(projectLink, "_blank")}
            />
          )}

          <ProjectActions icon={faImages} label="Gallery" onClick={openModal} />
        </div>
      </div>
      <div className="text-slate-200">
        <h4 className="text-lg mb-1 font-bold">{projectName}</h4>
        <p className="mb-3">{description}</p>

        <span className="text-sm font-bold">Tech stack:</span>
        <Tags tags={[...techs]} className="bg-red-950 border border-red-800" />
      </div>
    </div>
  );
};

const Projects = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Header3>Projects</Header3>
      <div className="border border-slate-800 rounded-lg overflow-hidden">
        {projects.map((project) => {
          return <ProjectItem {...project} openModal={openModal} />;
        })}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Projects Gallery"
      >
        <button onClick={closeModal}>close</button>
      </Modal>
    </>
  );
};

export default Projects;
