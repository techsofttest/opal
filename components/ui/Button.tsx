import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "ghost";
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  className = "",
  children,
  ...props
}) => {
  const variantClass = variant === "solid" ? "btn-solid" : "btn-ghost";
  return (
    <button className={`btn ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

