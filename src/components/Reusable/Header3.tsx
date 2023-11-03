import { FC } from "react";
import { cn } from "../../utils/cn";

interface Header3Props {
  children: React.ReactNode;
  className?: string;
}

const Header3: FC<Header3Props> = ({ children, className }) => {
  return (
    <h3 className={cn("text-blue-200 text-xl lg:text-2xl font-semibold mb-3", className)}>
      {children}
    </h3>
  );
};

export default Header3;
