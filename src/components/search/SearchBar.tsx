import { useEffect, useState, useRef } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSearchBox, UseSearchBoxProps } from "react-instantsearch-hooks-web";

interface SearchBarProps {
  placeholder: string;
  config?: UseSearchBoxProps;
  captureSearchedQuery?: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar({
  placeholder,
  config,
  captureSearchedQuery,
}: SearchBarProps) {
  const { refine, clear, query } = useSearchBox(config);
  const searchInputRef = useRef<HTMLInputElement>(null);

  if (captureSearchedQuery) {
    captureSearchedQuery(query);
  }

  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

  // debounce, search when 200 miliseconds have pass from previus input change
  useEffect(() => {
    const timer = setTimeout(() => setSearchQuery(debouncedSearchQuery), 200);
    return () => clearTimeout(timer);
  }, [debouncedSearchQuery]);

  useEffect(() => {
    if (searchQuery !== "") {
      refine(searchQuery);
    }
  }, [searchQuery]);

  return (
    <div className="flex items-center rounded-3xl border border-grayscale-4 bg-grayscale-2">
      <span className="px-3">
        <MagnifyingGlassIcon className="h-6 w-6 shrink-0" />
      </span>
      <input
        type="search"
        ref={searchInputRef}
        onChange={(e) => setDebouncedSearchQuery(e.target.value)}
        value={debouncedSearchQuery}
        className="w-full bg-transparent p-2 focus:outline-dotted focus:outline-2 focus:outline-primary/40"
        placeholder={placeholder}
      />
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
