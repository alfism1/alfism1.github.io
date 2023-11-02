import { FC } from "react";
import { cn } from "../../utils/cn";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

const Container: FC<ContainerProps> = ({
  children,
  fullWidth,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn([
        "container mx-auto",
        fullWidth && "max-w-full",
        className,
      ])}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
