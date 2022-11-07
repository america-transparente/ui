import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Button from "./Button";

interface HeaderProps {
  title: string;
  imagePath: string;
  color?: string;
}

function SupportUsButtons() {
  return (
    <div className="flex w-full flex-col gap-4 md:flex-row">
      <Button
        primary={false}
        color="primary-rl"
        href="https://app.reveniu.com/checkout-custom-link/guYWYTIWJqCUnNtZQRdIzpE3DFkAXtd1"
      >
        Donar
      </Button>
      <Button
        primary={false}
        color="primary-rl"
        href="https://app.reveniu.com/checkout-custom-link/aSmPLaykZ0lAnrXpMcJUopEccz9F4kRE"
      >
        Hazte socio
      </Button>
    </div>
  );
}

function Header({ title, imagePath, color }: HeaderProps) {
  // bg-[#a21caf]

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const backgroundColor = color ? `bg-${color}` : "bg-primary";

  const headerStyles = `${backgroundColor} p-4 text-grayscale-2`;

  const mobileMenuStyles = `w-full flex justify-between items-center mb-4 ${backgroundColor} p-4`;

  return (
    <header className={headerStyles}>
      <div className="mx-auto flex max-w-6xl justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-extrabold uppercase italic">{title}</h1>
          <a
            className="hidden md:flex"
            href="https://americatransparente.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={imagePath}
              alt="Inicio de América Transparente"
              className="h-8"
            />
          </a>
        </div>
        <Button
          primary={false}
          icon={true}
          className="px-2 md:hidden"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Opciones para apoyar al proyecto"
        >
          <Bars3Icon className="h-6 w-6 text-black" />
        </Button>

        <Dialog
          open={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex items-start justify-center">
            <Dialog.Panel className="w-full rounded-b-2xl bg-white">
              <div className={mobileMenuStyles}>
                <a
                  href="https://americatransparente.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={imagePath}
                    alt="Inicio de América Transparente"
                    className="h-8"
                  />
                </a>
                <Button
                  primary={false}
                  icon={true}
                  onClick={() => setIsMenuOpen(false)}
                  className="p-1"
                >
                  <XMarkIcon className="h-6 w-6 text-black" />
                </Button>
              </div>
              <div className="px-4 pb-4">
                <SupportUsButtons />
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>

        <div className="hidden md:flex">
          <SupportUsButtons />
        </div>
      </div>
    </header>
  );
}

export default Header;
