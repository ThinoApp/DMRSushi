import type { ComponentProps } from "react";

interface ParagraphProps extends ComponentProps<"p"> {}

const Paragraph = ({ children, className, ...props }: ParagraphProps) => {
  return (
    <p {...props} className={"dm-sans-400  text-p " + className}>
      {children}
    </p>
  );
};

export default Paragraph;
