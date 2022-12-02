import React, { useState } from "react";

import { ComponentMeta } from "@storybook/react";
import DonationCard from "../components/core/DonationCard";
import Card from "../components/core/Card";
import Button from "../components/core/Button";
import { RegulequeCard } from "./examples/RegulequeCard";

export default {
  title: "core/Card",
  component: Card,
  parameters: {
    backgrounds: {
      values: [
        { name: "ligh", value: "#e7e5e4", default: true },
        { name: "dark", value: "#242424", default: true },
      ],
    },
  },
} as ComponentMeta<typeof Card>;

export const RegulequeCards = () => (
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
    <RegulequeCard
      hit={{
        nombre: "Abraham Gabriel Curiche Huenulao",
        remuneracion_bruta: "666.420",
        ano: "2020",
        mes: "Enero",
        tipo_calificacion_profesional: "Ingeniero En Negocios Internacionales",
        nombre_organismo:
          "AGENCIA CHILENA DE COOPERACIÓN INTERNACIONAL PARA EL DESARROLLO (AGCID)",
      }}
    />
    <RegulequeCard
      hit={{
        nombre: "Francisco Aurelio Curiqueo Leon",
        remuneracion_bruta: "3.499.695",
        ano: "2021",
        mes: "Febrero",
        tipo_calificacion_profesional: "Abogado",
        nombre_organismo: "Corporación Municipal de Castro",
      }}
    />
    <RegulequeCard
      hit={{
        nombre: "Ximena Carolina Daroch Hernandez",
        remuneracion_bruta: "2.114.139",
        ano: "2022",
        mes: "Septiembre",
        tipo_calificacion_profesional:
          "Ingeniero de Ejecución En Control de Gestión",
        nombre_organismo: "Servicio Nacional de Aduanas",
      }}
    />
    <RegulequeCard
      hit={{
        nombre: "Fernando Luis Baeriswyl Rada",
        remuneracion_bruta: "1.069.092",
        ano: "2022",
        mes: "Septiembre",
        tipo_calificacion_profesional: "Técnico Comercio Exterior",
        nombre_organismo: "Consejo de Defensa del Estado (CDE)",
      }}
    />
  </div>
);

export const DonationCardExample = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  return (
    <>
      <Button primary onClick={() => setIsCardVisible(true)}>
        Abrir tarjeta de donacion
      </Button>
      <DonationCard
        showDonationCard={isCardVisible}
        setShowDonationCard={setIsCardVisible}
      />
    </>
  );
};
