import type { ComponentProps } from "react";

interface LinkItemProps extends ComponentProps<"li"> {}

const LinkItem = ({ children, className, ...props }: LinkItemProps) => {
  return (
    <li
      {...props}
      className={`list-none cormorant-sc-regular text-white text-2xl cursor-pointer ${className}`}
    >
      {children}
    </li>
  );
};

export default LinkItem;
