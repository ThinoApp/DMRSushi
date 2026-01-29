import type { ComponentProps, PropsWithChildren } from "react";

interface BoxProps extends PropsWithChildren, ComponentProps<"div"> {
  active?: boolean;
  className?: string;
}

const Box = ({ children, active = false, className, ...props }: BoxProps) => {
  return (
    <div
      {...props}
      className={`cursor-pointer flex items-center justify-center gap-2
             border border-white text-p px-4 py-2
            ${active ? "bg-secondary! border-secondary! text-black" : ""}
            ${className}
        `}
    >
      {children}
    </div>
  );
};

export default Box;
