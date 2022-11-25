import { DetailedHTMLProps, ReactNode } from "react";

interface ButtonProps {
  primary?: boolean;
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
  color = "primary",
  icon,
  ...rest
}: ButtonProps & ButtonType) {
  // Tailwind doesn't really like dynamic values, so heres a comment for the compiler to generate:
  // bg-grayscale-2 border-grayscale-2/10 ring-grayscale-2
  // bg-primary border-primary/10 ring-primary ring-primary/50
  // bg-[#a21caf] border-[#a21caf]/10 ring-[#a21caf] ring-[#a21caf]/50

  const padding = icon ? "p-2" : "py-2 px-4";

  const commonStyles = `${padding} border font-bold rounded-3xl transition border focus:brightness-110 hover:brightness-75 duration-300`;

  const primaryStyles = "text-white bg-primary border-primary/10";
  const secondaryStyles =
    "text-light-text-100 dark:text-dark-text-100 bg-light-neutral-200 border-light-neutral-300 dark:bg-dark-neutral-200 dark:border-dark-neutral-100";

  const computedStyle = `${commonStyles} ${
    primary ? primaryStyles : secondaryStyles
  } ${className}`;

  return (
    <button
      className={computedStyle}
      onClick={href ? () => window.open(href, "_blank") : onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
