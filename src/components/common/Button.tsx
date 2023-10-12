import React from "react";

export type ButtonProps = {
  onClick?: () => void;
  ver?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "reset" | "submit";
};

export const Button = ({
  onClick,
  ver,
  children,
  className,
  disabled,
}: ButtonProps) => {
  let buttonTypeClass = "";
  switch (ver) {
    case "primary":
      buttonTypeClass = "bg-blue-900 border hover:bg-blue-700 text-white";
      break;
    case "secondary":
      buttonTypeClass = "bg-gray-300 hover:bg-gray-400 text-gray-700";
      break;
    default:
      buttonTypeClass = "bg-blue-900 hover:bg-blue-700 text-white";
  }

  return (
    <button
      className={`px-4 py-2 text-gray-700  rounded-full whitespace-nowrap ${buttonTypeClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
