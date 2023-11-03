import { FC } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProjectActionsProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: IconDefinition;
}

const ProjectActions: FC<ProjectActionsProps> = ({ label, icon, ...rest }) => {
  return (
    <button
      className="flex items-center gap-2 text-base border px-2 rounded-lg w-fit group hover:bg-slate-100 hover:text-slate-900 transition-all delay-0"
      {...rest}
    >
      {label}{" "}
      <FontAwesomeIcon
        icon={icon}
        className="group-hover:text-slate-900 transition-all delay-0"
      />
    </button>
  );
};

export default ProjectActions;
