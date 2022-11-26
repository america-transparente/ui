import React from "react";

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
                <ChevronUpIcon className="h-6 w-6 shrink-0" />
              ) : (
                <ChevronDownIcon className="h-6 w-6 shrink-0" />
              )}
              <span className="whitespace-nowrap">{title}</span>
            </Button>
          </Listbox.Button>
          {open && (
            <div
              ref={setPopperElement}
              style={styles.popper}
              className="mt-2 max-h-96 max-w-[15rem] overflow-auto rounded-xl border-2 border-light-neutral-300 text-light-text-100  dark:border-dark-neutral-100 dark:text-dark-text-200
              "
              {...attributes.popper}
            >
              <Listbox.Options className="divide-y-2 outline-none dark:divide-dark-neutral-100">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.label}
                    value={option.value}
                    className="divide-y-2 outline-none dark:divide-dark-neutral-100"
                  >
                    {({ active }) => (
                      <li
                        className={
                          active
                            ? "hover:bg-light-300 bg-light-neutral-300 p-1.5 hover:cursor-pointer dark:bg-dark-neutral-300 dark:hover:bg-dark-neutral-300"
                            : "bg-light-neutral-200 p-1.5 hover:cursor-pointer dark:bg-dark-neutral-200"
                        }
                      >
                        {option.label}
                      </li>
                    )}
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
