import { Listbox } from "@headlessui/react";
import { useState } from "react";
import { useSortBy, UseSortByProps } from "react-instantsearch-hooks-web";
import { usePopper } from "react-popper";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Button from "../../core/Button";

interface SortByProps {
  config: UseSortByProps;
  title: string;
}

function SearchSortBy({ config, title }: SortByProps) {
  const { options, refine } = useSortBy(config);

  function applySortBy(value: string) {
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
    <Listbox onChange={applySortBy}>
      {({ open }) => (
        <>
          <Listbox.Button as="div" ref={setReferenceElement}>
            <Button
              primary={false}
              className="flex w-full items-center justify-center"
              aria-label="Ordenar filtros por"
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
                {options.map((option) => (
                  <Listbox.Option
                    key={option.label}
                    value={option.value}
                    className="p-1.5 hover:cursor-pointer hover:bg-grayscale-3"
                  >
                    {option.label}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          )}
        </>
      )}
    </Listbox>
  );
}

export default SearchSortBy;
