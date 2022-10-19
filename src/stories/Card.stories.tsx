import { ComponentMeta } from "@storybook/react";
import Card from "../components/core/Card";
import { RegulequeCard } from "./examples/ReguelequeCard";

export default {
  title: "core/Card",
  component: Card,
  parameters: {
    backgrounds: {
      values: [{ name: "app background", value: "#e7e5e4", default: true }],
    },
  },
} as ComponentMeta<typeof Card>;

export const RegulequeCards = () => (
  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <RegulequeCard
      hit={{
        nombre: "Rene Emanuel Caceres Abarzua",
        remuneracion_bruta: "666.420",
        ano: "2020",
        mes: "Enero",
        tipo_calificacion_profesional: "Licencia de Ensenanza Media",
        nombre_organismo: "Servicio Nacional de Desarrollo Web",
      }}
    />
    <RegulequeCard
      hit={{
        nombre: "Joaquin Jimenez Juan Jose Juarez del Estero",
        remuneracion_bruta: "2.666.420",
        ano: "2021",
        mes: "Febrero",
        tipo_calificacion_profesional: "Abogado",
        nombre_organismo: "Servicio Nacional Saul Goodman",
      }}
    />
    <RegulequeCard
      hit={{
        nombre: "Jennifer Jane Dominguez Doe",
        remuneracion_bruta: "10.666.420",
        ano: "2022",
        mes: "Septiembre",
        tipo_calificacion_profesional:
          "Ingenieria Aplicada al Arbitraje de cripto cositas",
        nombre_organismo: "Servicio Nacional de Criptomonedas",
      }}
    />
    <RegulequeCard
      hit={{
        nombre: "Gato Gaston Gatuso III",
        remuneracion_bruta: "69.696.696",
        ano: "2022",
        mes: "Septiembre",
        tipo_calificacion_profesional:
          "Ingenieria en Botar Pelos mencion Dormir",
        nombre_organismo: "Servicio Nacional de Bolas de Pelo",
      }}
    />
  </div>
);
