import { type ComponentProps } from "react";

interface TitleProps extends ComponentProps<"h2"> {}

const Title = ({ children, className, ...props }: TitleProps) => {
  return (
    <h2
      {...props}
      className={
        "dm-serif-display-regular  text-primary  text-center " + className
      }
    >
      {children}
    </h2>
  );
};

export default Title;
