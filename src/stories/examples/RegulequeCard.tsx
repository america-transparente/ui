import React from "react";

import Card from "../../components/core/Card";
import {
  CurrencyDollarIcon,
  CalendarDaysIcon,
  BuildingLibraryIcon,
  BriefcaseIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
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
  return (
    <>
      <Card>
        <section className="flex h-full flex-col justify-between p-4">
          <div>
            <h2 className="mb-2 text-xl font-extrabold text-light-text-100 dark:text-dark-text-100">
              {hit.nombre}
            </h2>
            <div className="space-y-2">
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
          </div>

          <div className="flex justify-end">
            <Button primary icon>
              <InformationCircleIcon className="h-6 w-6 stroke-2" />
            </Button>
          </div>
        </section>
      </Card>
    </>
  );
};
