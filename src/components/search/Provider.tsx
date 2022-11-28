import React from "react";

import { ReactNode } from "react";
import { InstantSearch } from "react-instantsearch-hooks-web";

interface ProviderProps {
  children: ReactNode;
  indexName: string;
  searchClient: any;
}

function Provider({ children, searchClient, indexName }: ProviderProps) {
  return (
    <InstantSearch searchClient={searchClient} indexName={indexName}>
      {children}
    </InstantSearch>
  );
}

export default Provider;
