import React, { useState } from "react";

import { ComponentMeta } from "@storybook/react";
import logoAT from "../assets/at_logo.webp";
import Header from "../components/core/Header";

export default {
  title: "core/Header",
  component: Header,
  parameters: {
    backgrounds: {
      values: [
        { name: "ligh", value: "#e7e5e4", default: true },
        { name: "dark", value: "#242424", default: true },
      ],
    },
  },
} as ComponentMeta<typeof Header>;

export const RegulequeHeader = () => {
  const [fakeTheme, setFakeTheme] = useState("");

  return (
    <Header
      captureThemeChange={setFakeTheme}
      title="Reguleque"
      imagePath={logoAT}
      description="Reguleque es un buscador de funcionarios públicos de Chile, basado en distintas fuentes de transparencia estatal."
    />
  );
};

export const DuenosDirectosHeader = () => {
  const [fakeTheme, setFakeTheme] = useState("");

  return (
    <Header
      captureThemeChange={setFakeTheme}
      title="Dueños Directos"
      imagePath={logoAT}
      description="Dueños Directos es un buscador
      de documentos del Diario Oficial
      de Chile, que permite rápidamente
      buscar entre miles de constituciones
      y otros archivos legales de
      organizaciones."
      color="[#a21caf]"
    />
  );
};
