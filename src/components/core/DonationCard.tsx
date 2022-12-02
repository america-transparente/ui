import React from "react";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { Dispatch } from "react";
import { Dialog } from "@headlessui/react";
import Button from "./Button";
import Card from "../core/Card";

interface DonationCardProps {
  showDonationCard: boolean;
  setShowDonationCard: Dispatch<React.SetStateAction<boolean>>;
  color?: string;
}

function DonationCard({
  showDonationCard,
  setShowDonationCard,
  color,
}: DonationCardProps) {
  const backgroundColor = color ? `bg-${color}` : "bg-primary";
  return (
    <Dialog
      open={showDonationCard}
      onClose={() => setShowDonationCard(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex items-center justify-center bg-black/30 p-4">
        <Dialog.Panel>
          <Card>
            <div className="max-h-[75vh] max-w-2xl space-y-4 overflow-auto rounded-2xl p-4 md:text-xl">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xl font-extrabold md:text-2xl">
                  ¡Hola! Por favor no cierres este mensaje.
                </p>
                <Button
                  primary={false}
                  icon={true}
                  color="primary-rl"
                  aria-label="Cerrar"
                  className="shrink-0"
                  onClick={() => setShowDonationCard(false)}
                >
                  <XMarkIcon className="h-6 w-6 text-black dark:text-white" />
                </Button>
              </div>
              <p>
                Somos la fundación América Transparente, y para mantener este
                proyecto arriba necesitamos pagar servidores, infraestructura y
                desarrolladores, y para eso{" "}
                <span className="font-semibold">necesitamos tu ayuda.</span>
              </p>
              <p>
                Puedes ayudarnos donando tan poco como $2.000 pesos mensuales,
                no toma más de un minuto.{" "}
                <span className="font-semibold">
                  para aumentar juntos y juntas la Transparencia, sé parte del
                  cambio.
                </span>
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <a
                  href="https://app.reveniu.com/checkout-custom-link/guYWYTIWJqCUnNtZQRdIzpE3DFkAXtd1"
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full rounded-3xl ${backgroundColor} p-2 text-center font-bold text-white transition duration-300 hover:brightness-75 focus:brightness-110`}
                >
                  Donar ahora
                </a>
                <a
                  href="https://app.reveniu.com/checkout-custom-link/aSmPLaykZ0lAnrXpMcJUopEccz9F4kRE"
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full rounded-3xl ${backgroundColor} p-2 text-center font-bold text-white transition duration-300 hover:brightness-75 focus:brightness-110`}
                >
                  Hazte socio
                </a>
              </div>
            </div>
          </Card>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default DonationCard;
