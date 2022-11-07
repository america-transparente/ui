import { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
}

function Card({ title, children }: CardProps) {
  return (
    <article className="flex w-full flex-col rounded-2xl border border-grayscale-4 bg-grayscale-2 p-4 shadow">
      <h2 className="mb-2 text-xl font-extrabold">{title}</h2>
      <div className="flex-auto">{children}</div>
    </article>
  );
}

export default Card;
