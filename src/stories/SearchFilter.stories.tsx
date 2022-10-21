import { ComponentMeta } from "@storybook/react";
import SearchFilter from "../components/search/filters/SearchFilter";
import RegulequeFilters from "./examples/RegulequeFilters";

export default {
  title: "search/SearchFilter",
  component: SearchFilter,
  parameters: {
    backgrounds: {
      values: [{ name: "app background", value: "#e7e5e4", default: true }],
    },
  },
} as ComponentMeta<typeof SearchFilter>;

export const RegulequeSearchFilters = () => <RegulequeFilters />;
