import { type ComponentProps } from "react";

interface CardTitleProps extends ComponentProps<"h2"> {}

const CardTitle = ({ children, className, ...props }: CardTitleProps) => {
  return (
    <h2
      {...props}
      className={"cinzel-700  text-primary leading-[34px] " + className}
    >
      {children}
    </h2>
  );
};

export default CardTitle;
