import { FC } from "react";
import { cn } from "../utils/cn";

const colorPallete = [
  {
    primary: "#F87171",
    secondary: "#FCA5A5",
  },
  {
    primary: "#FBBF24",
    secondary: "#FCD34D",
  },
  {
    primary: "#FACC15",
    secondary: "#FDE047",
  },
  {
    primary: "#86EFAC",
    secondary: "#BBF7D0",
  },
  {
    primary: "#60A5FA",
    secondary: "#93C5FD",
  },
  {
    primary: "#818CF8",
    secondary: "#A5B4FC",
  },
  {
    primary: "#EC4899",
    secondary: "#F472B6",
  },
  {
    primary: "#F472B6",
    secondary: "#F9A8D4",
  },
  {
    primary: "#A78BFA",
    secondary: "#C4B5FD",
  },
  {
    primary: "#818CF8",
    secondary: "#A5B4FC",
  },
  {
    primary: "#34D399",
    secondary: "#6EE7B7",
  },
  {
    primary: "#F472B6",
    secondary: "#F9A8D4",
  },
  {
    primary: "#F87171",
    secondary: "#FCA5A5",
  },
  {
    primary: "#FBBF24",
    secondary: "#FCD34D",
  },
  {
    primary: "#FACC15",
    secondary: "#FDE047",
  },
  {
    primary: "#86EFAC",
    secondary: "#BBF7D0",
  },
  {
    primary: "#60A5FA",
    secondary: "#93C5FD",
  },
  {
    primary: "#818CF8",
    secondary: "#A5B4FC",
  },
  {
    primary: "#EC4899",
    secondary: "#F472B6",
  },
  {
    primary: "#F472B6",
    secondary: "#F9A8D4",
  },
  {
    primary: "#A78BFA",
    secondary: "#C4B5FD",
  },
  {
    primary: "#818CF8",
    secondary: "#A5B4FC",
  },
  {
    primary: "#34D399",
    secondary: "#6EE7B7",
  },
  {
    primary: "#F472B6",
    secondary: "#F9A8D4",
  },
];

interface TagsProps {
  tags: string[];
  className?: string;
  containerClassName?: string;
  randomizeColor?: boolean;
}

const Tags: FC<TagsProps> = ({
  tags,
  className,
  containerClassName,
  randomizeColor,
}) => {
  return (
    <div
      className={cn(
        "flex gap-2 text-slate-300 text-xs lg:text-sm mt-2 flex-wrap",
        containerClassName
      )}
    >
      {tags.map((tag) => {
        const randomColor =
          colorPallete[Math.floor(Math.random() * colorPallete.length)];
        return (
          <span
            key={tag}
            className={cn(
              "bg-slate-950 rounded-md px-1.5 py-0.5 block",
              className
            )}
            style={
              randomizeColor
                ? {
                    backgroundColor: randomColor.primary,
                    border: randomColor.secondary,
                    color: "#333",
                    fontWeight: 700,
                  }
                : {}
            }
          >
            {tag}
          </span>
        );
      })}
    </div>
  );
};

export default Tags;
