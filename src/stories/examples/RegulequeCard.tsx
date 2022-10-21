import Card from "../../components/core/Card";
import { useState } from "react";
import {
  XMarkIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
  BuildingLibraryIcon,
  BriefcaseIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import Button from "../../components/core/Button";

// interface IHit {
// 	nombre: string;
// 	tipo_calificación_profesional: string;
// 	tipo_cargo: string;
// 	remuneración_líquida_mensual: string;
// 	remuneración_bruta_mensual: string;
// 	tipo_contrato: string;
// 	tipo_estamento: string;
// 	unidad_monetaria: string;
// 	viáticos: string;
// 	fecha_ingreso: string;
// 	fecha_término: string;
// 	mes: string;
// 	año: string;
// 	nombre_organismo: string;
// }

interface IHit {
  nombre: string;
  remuneracion_bruta: string;
  mes: string;
  ano: string;
  tipo_calificacion_profesional: string;
  nombre_organismo: string;
}

interface RegulequeCardProps {
  hit: IHit;
}

export const RegulequeCard = ({ hit }: RegulequeCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card title={hit.nombre}>
        <section className="flex h-full flex-col justify-between">
          <div className="space-y-2 text-neutral-600">
            <div className="flex items-start gap-1 text-xl font-bold">
              <CurrencyDollarIcon className="h-6 w-6" />
              <div className="-space-y-1">
                <p>${hit.remuneracion_bruta}</p>
                <p className="text-xs">Remuneración Bruta</p>
              </div>
            </div>
            <div className=" flex items-start gap-1 font-bold">
              <CalendarDaysIcon className="h-6 w-6" />
              <p>{`${hit.mes} ${hit.ano}`}</p>
            </div>
            <div className=" flex items-start gap-1 font-bold">
              <BuildingLibraryIcon className="h-6 w-6 shrink-0" />
              <p>{hit.nombre_organismo}</p>
            </div>
            <div className=" flex items-start gap-1 font-bold">
              <BriefcaseIcon className="h-6 w-6 shrink-0" />
              <p>{hit.tipo_calificacion_profesional}</p>
            </div>
          </div>
          <div className="flex w-full justify-end">
            <Button
              primary={true}
              color="primary-rl"
              onClick={() => setIsModalOpen(true)}
              icon={true}
            >
              <InformationCircleIcon className="h-6 w-6 stroke-2" />
            </Button>
          </div>
        </section>
      </Card>
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 m-4 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-lg rounded-2xl border-2 bg-white p-4">
            <div className="flex w-full items-center justify-between">
              <Dialog.Title className="text-xl font-bold">
                {hit.nombre}
              </Dialog.Title>
              <Button
                primary={false}
                icon={true}
                onClick={() => setIsModalOpen(false)}
                className="self-start p-1"
              >
                <XMarkIcon className="h-6 w-6 text-black" />
              </Button>
            </div>
            {hit.nombre}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
