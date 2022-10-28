import SearchFilter from "./components/search/filters/SearchFilter";
import SearchSortBy from "./components/search/filters/SearchSortBy";
import Provider from "./components/search/Provider";
import SearchBar from "./components/search/SearchBar";
import {
  useInfiniteHits,
  UseInfiniteHitsProps,
} from "react-instantsearch-hooks-web";

export type { UseInfiniteHitsProps };
export {
  SearchBar,
  SearchFilter,
  SearchSortBy,
  Provider,
  useInfiniteHits,
};
