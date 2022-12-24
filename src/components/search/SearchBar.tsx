import React from "react";
import { useEffect, useState, useRef } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSearchBox, UseSearchBoxProps } from "react-instantsearch-hooks-web";

interface SearchBarProps {
  placeholder: string;
  config?: UseSearchBoxProps;
  captureSearchedQuery?:
    | React.Dispatch<React.SetStateAction<string>>
    | undefined;
}

function SearchBar({
  placeholder,
  config,
  captureSearchedQuery,
}: SearchBarProps) {
  const { refine, clear, query } = useSearchBox(config);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

  // debounce, search when 200 miliseconds have pass from previous input change
  useEffect(() => {
    const timer = setTimeout(() => setSearchQuery(debouncedSearchQuery), 200);
    return () => clearTimeout(timer);
  }, [debouncedSearchQuery]);

  useEffect(() => {
    refine(searchQuery);
  }, [searchQuery]);

  // runs when a setter is pass, "query" is the search query after being applied
  useEffect(() => {
    if (captureSearchedQuery) captureSearchedQuery(query);
  }, [query]);

  useEffect(() => {
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "/") {
        searchInputRef.current?.focus();
      }
    });
  }, []);

  return (
    <div
      className="flex items-center rounded-3xl border border-light-neutral-100 bg-light-neutral-200 text-light-text-100
    dark:border-dark-neutral-100 dark:bg-dark-neutral-200 dark:text-dark-text-100"
    >
      <span className="px-3">
        <MagnifyingGlassIcon className="h-6 w-6 shrink-0" />
      </span>
      <input
        type="search"
        ref={searchInputRef}
        onChange={(e) =>
          e.target.value !== "/" && setDebouncedSearchQuery(e.target.value)
        }
        value={debouncedSearchQuery}
        className="w-full bg-transparent p-2 focus:outline-dotted focus:outline-2 focus:outline-primary/40"
        placeholder={placeholder}
      />
      <div className="rounded border border-light-text-200 bg-light-neutral-100 py-0.5 px-3 font-bold dark:border-dark-text-100 dark:bg-dark-neutral-100">
        /
      </div>
      <button
        aria-label="Limpiar búsqueda"
        onClick={() => {
          clear(); // reset searched hits
          setDebouncedSearchQuery("");
          searchInputRef.current?.focus(); // focus back to input once cleared
        }}
        className="px-3"
      >
        <XMarkIcon className="h-6 w-6 shrink-0" />
      </button>
    </div>
  );
}

export default SearchBar;
