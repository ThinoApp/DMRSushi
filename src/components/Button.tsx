import type { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  btnType: "primary" | "outline" | "tertiary";
  lined: boolean;
  textClassName?: string;
}
const Button = ({
  btnType,
  children,
  lined,
  className,
  textClassName,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`flex items-center justify-center gap-2 px-3 py-3 
        
    ${btnType === "outline" ? "bg-black/70 border-2 border-secondary" : "bg-secondary "} ${className}`}
      style={{
        filter: "drop-shadow(0px 4px 15px rgba(245,190,50,0.5))",
      }}
    >
      <span
        className={`cormorant-sc-semibold  leading-6 text-black 
        ${btnType === "outline" ? "text-secondary" : ""}
        ${textClassName}
        `}
      >
        {children}
      </span>
      {lined && (
        <div
          className={`w-12 h-[2px] bg-black
        ${btnType === "outline" ? "bg-secondary" : ""}
        `}
        />
      )}
    </button>
  );
};

export default Button;
/* Rectangle 6 */

/* border: 2px solid #F5BE32; */
/* filter: drop-shadow(0px 4px 15px #F5BE32); */
