import { type ComponentProps } from "react";

interface SubtitleProps extends ComponentProps<"h3"> {}
const Subtitle = ({ children, className, ...props }: SubtitleProps) => {
  return (
    <h3
      {...props}
      className={`great-vibes-regular text-white leading-[20px] lg:tracking-[0.8rem] tracking-[0.5rem] ${className}`}
    >
      {children}
    </h3>
  );
};

export default Subtitle;
