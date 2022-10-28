import { useEffect, useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSearchBox, UseSearchBoxProps } from "react-instantsearch-hooks-web";

function SearchBar(props: UseSearchBoxProps) {
  const { refine, clear } = useSearchBox(props);

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
    <div className="flex items-center rounded-3xl border border-grayscale-3 bg-grayscale-2">
      <div className="pl-2">
        <MagnifyingGlassIcon className="h-6 w-6" />
      </div>
      <input
        type="search"
        onChange={(e) => setDebouncedSearchQuery(e.target.value)}
        value={debouncedSearchQuery}
        className="w-full bg-transparent p-2"
        placeholder="Buscar funcionarios"
      />
      {searchQuery && (
        <button
          aria-label="Limpiar búsqueda"
          className="px-2"
          onClick={() => {
            clear(); // reset searched hits
            setDebouncedSearchQuery("");
          }}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
