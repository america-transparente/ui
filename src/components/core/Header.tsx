import { ReactNode, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Button from "./Button";

interface HeaderProps {
  title: string;
  color: string;
  image: ReactNode;
}

function SupportUsButtons() {
  return (
    <div className="flex w-full flex-col gap-4 md:flex-row">
      <Button primary={false} color="primary-rl">
        Donar
      </Button>
      <Button primary={false} color="primary-rl">
        Hazte socio
      </Button>
    </div>
  );
}

function Header({ title, color, image }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerStyles = `bg-${color} p-4 text-accent-light`;
  const mobileMenuStyles = `w-full flex justify-between items-center mb-4 bg-${color} p-4`;

  return (
    <header className={headerStyles}>
      <div className="mx-auto flex max-w-6xl justify-between">
        <div className="flex items-center gap-4">
          <h1 className="font-extrabold uppercase italic md:text-xl lg:text-2xl">
            {title}
          </h1>
          {image}
        </div>
        <Button
          primary={false}
          icon={true}
          className="px-2 md:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <Bars3Icon className="h-4 w-4 text-black" />
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
                {image}
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
