import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <article className="flex w-full flex-col rounded-2xl border border-light-neutral-100 bg-light-neutral-200 text-light-text-200 shadow dark:border-dark-neutral-100 dark:bg-dark-neutral-200 dark:text-dark-text-200">
      {children}
    </article>
  );
}

export default Card;
