import React from "react";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export const Eyebrow: React.FC<EyebrowProps> = ({ children, className = "" }) => {
  return <p className={`eyebrow ${className}`}>{children}</p>;
};

