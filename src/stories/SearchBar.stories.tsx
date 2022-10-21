import { ComponentMeta } from "@storybook/react";
import SearchBar from "../components/search/SearchBar";
import RegulequeSearchBar from "./examples/RegulequeSearchBar";

export default {
  title: "search/SearchBar",
  component: SearchBar,
  parameters: {
    backgrounds: {
      values: [{ name: "app background", value: "#e7e5e4", default: true }],
    },
  },
} as ComponentMeta<typeof SearchBar>;

export const Common = () => <RegulequeSearchBar />;
