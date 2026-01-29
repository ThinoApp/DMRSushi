import type { ComponentProps } from "react";

interface HeadingProps extends ComponentProps<"h1"> {}

const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1 {...props} className={"cinzel-700  text-primary " + className}>
      {children}
    </h1>
  );
};

export default Heading;
