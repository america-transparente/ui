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
  <Header title="reguleque" imagePath={logoWhite} />
);

export const DuenosDirectosHeader = () => (
  <Header title="Dueños Directos" color="[#a21caf]" imagePath={logoWhite} />
);
