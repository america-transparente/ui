import { useState } from "react";
import { usePopper } from "react-popper";
import {
  useRefinementList,
  UseRefinementListProps,
} from "react-instantsearch-hooks-web";
import { Listbox } from "@headlessui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Button from "../../core/Button";

interface SearchFilterProps {
  config: UseRefinementListProps;
  title: string;
  label: string;
}

function SearchFilter({ config, title, label }: SearchFilterProps) {
  const { items, refine, canToggleShowMore, isShowingMore, toggleShowMore } =
    useRefinementList(config);

  function applyFilter(value: string) {
    refine(value);
  }

  // Popper.js
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement);

  return (
    <Listbox as="div" onChange={applyFilter}>
      {({ open }) => (
        <>
          <Listbox.Button as="div" ref={setReferenceElement}>
            <Button
              primary={false}
              className="flex w-full items-center justify-center"
              aria-label={label}
            >
              {open ? (
                <ChevronUpIcon className="h-6 w-6" />
              ) : (
                <ChevronDownIcon className="h-6 w-6" />
              )}
              <span className="whitespace-nowrap">{title}</span>
            </Button>
          </Listbox.Button>
          {open && (
            <div
              ref={setPopperElement}
              style={styles.popper}
              className="mt-2 max-h-96 max-w-[15rem] overflow-auto rounded-xl border-2 border-grayscale-4 bg-grayscale-2"
              {...attributes.popper}
            >
              <Listbox.Options className="divide-y-2 divide-grayscale-3 outline-none">
                {items
                  .sort((a, b) => parseInt(b.value) - parseInt(a.value))
                  .map((item, index) => {
                    const label =
                      item.label.charAt(0).toUpperCase() + item.label.slice(1);

                    return (
                      <Listbox.Option
                        key={index}
                        value={item.value}
                        className="p-1.5 hover:cursor-pointer hover:bg-grayscale-3"
                      >
                        <span className={item.isRefined ? "font-bold" : ""}>
                          {item.label === "codigodeltrabajo"
                            ? "Código del Trabajo"
                            : label}
                        </span>
                      </Listbox.Option>
                    );
                  })}
                {canToggleShowMore && (
                  <button
                    onClick={() => toggleShowMore()}
                    className="w-full rounded-b-xl bg-primary p-1.5 font-semibold text-white"
                  >
                    {isShowingMore ? "Mostrar menos" : "Mostrar más"}
                  </button>
                )}
              </Listbox.Options>
            </div>
          )}
        </>
      )}
    </Listbox>
  );
}

export default SearchFilter;
