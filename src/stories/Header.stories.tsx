import { ComponentMeta } from "@storybook/react";

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

export const Reguleque = () => <Header title="reguleque" color="primary-rl" />;
export const DuenosDirectos = () => (
  <Header title="Dueños Directos" color="primary-dd" />
);
