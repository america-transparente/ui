import { Dialog } from "@headlessui/react";
import { useState, ReactNode } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Button from "./Button";

interface CardProps {
  title: string;
  children: ReactNode;
  buttonText: ReactNode;
  color: string;
  modalContent: ReactNode;
}

function Card({ title, children, buttonText, color, modalContent }: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <article className="rounded-2xl border-2 border-grayscale-3 bg-grayscale-2 p-4">
        <div className="mb-4">
          <h2 className="text-xl font-extrabold">{title}</h2>
          <div>{children}</div>
        </div>
        <div className="flex w-full justify-end">
          <Button
            primary={true}
            color={color}
            onClick={() => setIsModalOpen(true)}
            icon={true}
          >
            {buttonText || "buttonText prop missing."}
          </Button>
        </div>
      </article>

      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 m-4 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-lg rounded-2xl border-2 bg-white p-4">
            <div className="flex w-full items-center justify-between">
              <Dialog.Title className="text-xl font-bold">{title}</Dialog.Title>
              <Button
                primary={false}
                icon={true}
                onClick={() => setIsModalOpen(false)}
                className="self-start p-1"
              >
                <XMarkIcon className="h-6 w-6 text-black" />
              </Button>
            </div>
            {modalContent}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

export default Card;
