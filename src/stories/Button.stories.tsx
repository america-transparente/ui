import { ComponentMeta } from "@storybook/react";

import Button from "../components/core/Button";

export default {
  title: "core/Button",
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        { name: "ligh", value: "#e7e5e4", default: true },
        { name: "dark", value: "#242424", default: true },
      ],
    },
  },
} as ComponentMeta<typeof Button>;

export const Primary = () => <Button primary={true}>Más información</Button>;

export const PrimaryWithLink = () => (
  <Button
    primary={true}
    color="[#a21caf]"
    href="https://app.reveniu.com/checkout-custom-link/guYWYTIWJqCUnNtZQRdIzpE3DFkAXtd1"
  >
    Donar
  </Button>
);

export const Secondary = () => (
  <Button primary={false} color="primary-rl">
    Por relevancia
  </Button>
);
