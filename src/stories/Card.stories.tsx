import { ComponentMeta } from "@storybook/react";
import {
  CalendarDaysIcon,
  CurrencyDollarIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

import Card from "../components/core/Card";

export default {
  title: "core/Card",
  component: Card,
  parameters: {
    backgrounds: {
      values: [{ name: "app background", value: "#e7e5e4", default: true }],
    },
  },
} as ComponentMeta<typeof Card>;

function ExampleModalContent() {
  return (
    <div className="max-h-[70vh] overflow-auto">
      <p>this is the modal content</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        repellat nobis perferendis placeat odit, voluptatem, maxime quia est
        atque a, nostrum excepturi velit asperiores assumenda ea. Molestias
        architecto placeat aperiam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        repellat nobis perferendis placeat odit, voluptatem, maxime quia est
        atque a, nostrum excepturi velit asperiores assumenda ea. Molestias
        architecto placeat aperiam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        repellat nobis perferendis placeat odit, voluptatem, maxime quia est
        atque a, nostrum excepturi velit asperiores assumenda ea. Molestias
        architecto placeat aperiam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        repellat nobis perferendis placeat odit, voluptatem, maxime quia est
        atque a, nostrum excepturi velit asperiores assumenda ea. Molestias
        architecto placeat aperiam.
      </p>
    </div>
  );
}

export const SampleCard = () => (
  <Card
    title="Articulo 1"
    buttonText="Mas informacion"
    color="primary-rl"
    modalContent={<ExampleModalContent />}
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nulla
    libero rerum velit officiis nemo, deserunt assumenda veritatis at quisquam
    facere id pariatur vel exercitationem iste, atque perferendis tenetur aut!
  </Card>
);

export const RegulequeCard = () => (
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    <Card
      title="Rene Emanuel Caceres Abarzua"
      buttonText={<PlusIcon className="h-6 w-6 stroke-2" />}
      color="primary-rl"
      modalContent={<ExampleModalContent />}
    >
      <div className="space-y-2 text-neutral-600">
        <div className="flex items-start gap-1 text-2xl font-bold">
          <CurrencyDollarIcon className="h-8 w-8" />
          <div className="-space-y-2">
            <p>$666.420</p>
            <p className="text-sm">Remuneración Bruta</p>
          </div>
        </div>
        <div className=" flex items-center gap-1 font-bold">
          <CalendarDaysIcon className="h-8 w-8" />
          <p>Enero 2020</p>
        </div>
        <div className=" flex items-center gap-1 font-bold">
          <BuildingLibraryIcon className="h-8 w-8 shrink-0" />
          <p>Servicio Nacional de Desarrollo Web</p>
        </div>
        <div className=" flex items-center gap-1 font-bold">
          <BriefcaseIcon className="h-8 w-8 shrink-0" />
          <p>Licencia de Ensenanza Media</p>
        </div>
      </div>
    </Card>
    <Card
      title="John Juan Doe Diaz"
      buttonText="Mas informacion"
      color="primary-rl"
      modalContent={<ExampleModalContent />}
    >
      <div className="space-y-2 text-neutral-600">
        <div className="flex items-start gap-1 text-2xl font-bold">
          <CurrencyDollarIcon className="h-8 w-8" />
          <div className="-space-y-2">
            <p>$4.201.313</p>
            <p className="text-sm">Remuneración Bruta</p>
          </div>
        </div>
        <div className=" flex items-center gap-1 font-bold">
          <CalendarDaysIcon className="h-8 w-8" />
          <p>Enero 2020</p>
        </div>
        <div className=" flex items-center gap-1 font-bold">
          <BuildingLibraryIcon className="h-8 w-8 shrink-0" />
          <p>Servicio Nacional de Cualquier Cosa</p>
        </div>
        <div className=" flex items-center gap-1 font-bold">
          <BriefcaseIcon className="h-8 w-8 shrink-0" />
          <p>Ingeniero en Ingenieria de Proyectos Ingenieriles</p>
        </div>
      </div>
    </Card>
    <Card
      title="Jane Juana Doe Diaz"
      buttonText="Mas informacion"
      color="primary-rl"
      modalContent={<ExampleModalContent />}
    >
      <div className="space-y-2 text-neutral-600">
        <div className="flex items-start gap-1 text-2xl font-bold">
          <CurrencyDollarIcon className="h-8 w-8" />
          <div className="-space-y-2">
            <p>$4.206.900</p>
            <p className="text-sm">Remuneración Bruta</p>
          </div>
        </div>
        <div className=" flex items-center gap-1 font-bold">
          <CalendarDaysIcon className="h-8 w-8" />
          <p>Enero 2020</p>
        </div>
        <div className=" flex items-center gap-1 font-bold">
          <BuildingLibraryIcon className="h-8 w-8 shrink-0" />
          <p>Municipalidad de Nueva Imperial</p>
        </div>
        <div className=" flex items-center gap-1 font-bold">
          <BriefcaseIcon className="h-8 w-8 shrink-0" />
          <p>Ingenieria en Ejecucion Aplicada de Control de Plagas</p>
        </div>
      </div>
    </Card>
  </div>
);

export const CardsOnGrid = () => (
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    <Card
      title="Articulo 1"
      buttonText="Leer mas"
      color="primary-dd"
      modalContent={<ExampleModalContent />}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
      temporibus tenetur rem vel sequi expedita ab? Fugiat, modi pariatur.
      Soluta modi ex minus magni cum rem dolorum quos error voluptatem.
    </Card>
    <Card
      title="Articulo 2"
      buttonText="Leer mas"
      color="primary-dd"
      modalContent={<ExampleModalContent />}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
      temporibus tenetur rem vel sequi expedita ab? Fugiat, modi pariatur.
      Soluta modi ex minus magni cum rem dolorum quos error voluptatem.
    </Card>
    <Card
      title="Articulo 3"
      buttonText="Leer mas"
      color="primary-dd"
      modalContent={<ExampleModalContent />}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
      temporibus tenetur rem vel sequi expedita ab? Fugiat, modi pariatur.
      Soluta modi ex minus magni cum rem dolorum quos error voluptatem.
    </Card>
    <Card
      title="Articulo 4"
      buttonText="Leer mas"
      color="primary-dd"
      modalContent={<ExampleModalContent />}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
      temporibus tenetur rem vel sequi expedita ab? Fugiat, modi pariatur.
      Soluta modi ex minus magni cum rem dolorum quos error voluptatem.
    </Card>
    <Card
      title="Articulo 5"
      buttonText="Leer mas"
      color="primary-dd"
      modalContent={<ExampleModalContent />}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
      temporibus tenetur rem vel sequi expedita ab? Fugiat, modi pariatur.
      Soluta modi ex minus magni cum rem dolorum quos error voluptatem.
    </Card>
  </div>
);
