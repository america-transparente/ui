import { ComponentMeta } from "@storybook/react";
import logoWhite from "../assets/logo_white.webp";
import Header from "../components/core/Header";

export default {
  title: "core/Header",
  component: Header,
  parameters: {
    backgrounds: {
      values: [{ name: "app background", value: "#e7e5e4", default: true }],
    },
  },
} as ComponentMeta<typeof Header>;

export const RegulequeHeader = () => (
  <Header
    title="reguleque"
    color="primary-rl"
    image={
      <a
        className="hidden md:flex"
        href="https://americatransparente.org/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={logoWhite}
          alt="Inicio de América Transparente"
          className="h-8"
        />
      </a>
    }
  />
);

export const DuenosDirectosHeader = () => (
  <Header
    title="Dueños Directos"
    color="primary-dd"
    image={
      <a
        className="hidden md:flex"
        href="https://americatransparente.org/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={logoWhite}
          alt="Inicio de América Transparente"
          className="h-8"
        />
      </a>
    }
  />
);
