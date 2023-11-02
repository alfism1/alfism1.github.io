import { FC } from "react";
import { cn } from "../../utils/cn";

interface DividerProps {
  className?: string;
}

const Divider: FC<DividerProps> = ({ className }) => {
  return <div className={cn(["border-t border-slate-800 my-2", className])} />;
};

export default Divider;
