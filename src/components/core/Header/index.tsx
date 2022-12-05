import React from "react";
import Card from "../Card";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  title: string;
  imagePath: string;
  color?: string;
  description: string;
  captureThemeChange: React.Dispatch<React.SetStateAction<string>>;
}

function Header({
  title,
  imagePath,
  color,
  description,
  captureThemeChange,
}: HeaderProps) {
  // bg-[#a21caf]

  const backgroundColor = color ? `bg-${color}` : "bg-primary";

  const headerStyles = `${backgroundColor} px-4 py-6 text-grayscale-2`;

  return (
    <header className={headerStyles}>
      <div className="mx-auto mb-4 flex max-w-6xl justify-end">
        <ThemeToggle captureThemeChange={captureThemeChange} />
      </div>
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        <div className="flex flex-col justify-between">
          <h1 className="mb-4 text-2xl font-extrabold uppercase italic text-white">
            {title}
          </h1>
          <p className="text-xl font-semibold text-dark-text-100 lg:text-2xl">
            {description}
          </p>
        </div>
        <Card>
          <div className="p-4">
            <a
              href="https://americatransparente.org/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imagePath}
                alt="Inicio de América Transparente"
                className="inline h-8"
              />
              <span className="ml-2 inline text-lg font-extrabold text-light-text-100 dark:text-dark-text-100">
                América Transparente
              </span>
            </a>
            <p>
              Somos una organización sin fines de lucro que busca entregar
              herramientas, reportes y métodos que ayuden a la transparencia de
              gobiernos y organismos públicos.
            </p>
            <div className="mt-2 flex flex-col gap-4 lg:flex-row">
              <a
                className={`w-full rounded-3xl ${backgroundColor} p-2 text-center font-bold text-white transition duration-300 hover:brightness-75 focus:brightness-110`}
                href="https://app.reveniu.com/checkout-custom-link/guYWYTIWJqCUnNtZQRdIzpE3DFkAXtd1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donar ahora
              </a>
              <a
                className={`w-full rounded-3xl ${backgroundColor} p-2 text-center font-bold text-white transition duration-300 hover:brightness-75 focus:brightness-110`}
                href="https://app.reveniu.com/checkout-custom-link/aSmPLaykZ0lAnrXpMcJUopEccz9F4kRE"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hazte socio
              </a>
            </div>
          </div>
        </Card>
      </div>
    </header>
  );
}

export default Header;
