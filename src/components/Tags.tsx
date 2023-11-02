import { FC } from "react";
import { cn } from "../utils/cn";

interface TagsProps {
  tags: string[];
  className?: string;
}

const Tags: FC<TagsProps> = ({ tags, className }) => {
  return (
    <div className="flex gap-2 text-slate-300 text-sm mt-2 flex-wrap">
      {tags.map((tag) => {
        return (
          <span className={cn("bg-slate-950 rounded-md px-1 block", className)}>
            {tag}
          </span>
        );
      })}
    </div>
  );
};

export default Tags;
