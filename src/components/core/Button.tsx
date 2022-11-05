import { DetailedHTMLProps, ReactNode } from "react";

interface ButtonProps {
  primary: boolean;
  className?: string;
  children: ReactNode;
  href?: string;
  onClick?: () => void | string;
  color?: string;
  icon?: boolean;
}

type ButtonType = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

function Button({
  primary,
  className,
  children,
  href,
  onClick,
  color,
  icon,
}: ButtonProps & ButtonType) {
  // Tailwind doesn't really like dynamic values, so heres a comment for the compiler to generate:
  // bg-primary-dd ring-primary-dd/50 bg-primary-rl ring-primary-rl/50 border-primary-dd/10 border-primary-rl/10 bg-grayscale-2 border-grayscale-2/10 ring-grayscale-2

  const padding = icon ? "p-2" : "py-2 px-4";
  const commonStyles = `${padding} font-bold rounded-3xl transition-all ring-offset-1 focus:ring-2 border hover:brightness-75 duration-300`;
  const primaryStyles = `text-grayscale-2 bg-${color || "grayscale-2"} border-${
    color || "grayscale-2"
  }/10 ring-${color || "grayscale-2"}/50`;
  const secondaryStyles =
    "text-black bg-grayscale-2 border-grayscale-4 ring-grayscale-4";

  const computedStyle = `${commonStyles} ${
    primary ? primaryStyles : secondaryStyles
  } ${className}`;

  return (
    <button
      className={computedStyle}
      onClick={href ? () => window.open(href, "_blank") : onClick}
    >
      {children}
    </button>
  );
}

export default Button;
