import { ComponentMeta } from "@storybook/react";

import Button from "../components/core/Button";

export default {
  title: "core/Button",
  component: Button,
  parameters: {
    backgrounds: {
      values: [{ name: "grayscale-1", value: "#ffff", default: true }],
    },
  },
} as ComponentMeta<typeof Button>;

export const Primary = () => (
  <Button primary={true} color="primary-dd">
    Más información
  </Button>
);

export const PrimaryWithLink = () => (
  <Button
    primary={true}
    color="primary-rl"
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
