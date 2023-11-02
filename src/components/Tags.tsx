import { FC } from "react";

interface TagsProps {
  tags: string[];
}

const Tags: FC<TagsProps> = ({ tags }) => {
  return (
    <div className="flex gap-1 text-slate-300 text-sm mt-2 flex-wrap">
      {tags.map((tag) => {
        return (
          <span className="bg-slate-950 rounded-md px-1 block">{tag}</span>
        );
      })}
    </div>
  );
};

export default Tags;
