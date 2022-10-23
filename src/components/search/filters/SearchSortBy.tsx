import { Listbox } from "@headlessui/react";
import { useState } from "react";
import { useSortBy, UseSortByProps } from "react-instantsearch-hooks-web";
import { usePopper } from "react-popper";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Button from "../../core/Button";

interface Option {
  value: string;
  label: string;
}

interface SortByProps {
  config: UseSortByProps;
  title: string;
}

function SearchSortBy({ config, title }: SortByProps) {
  const { options, refine, currentRefinement } = useSortBy(config);

  console.log(currentRefinement);

  const [selectedOption, setSelectedOption] = useState("");

  // Popper.js
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement);

  function applySortBy(option: Option) {
    setSelectedOption(option.label);
    refine(option.value);
  }

  return (
    <Listbox onChange={applySortBy}>
      {({ open }) => (
        <div>
          <Listbox.Button as="div" ref={setReferenceElement}>
            <Button primary={false} className="flex items-center">
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
              className="mt-2 max-h-96 max-w-[15rem] overflow-auto rounded-xl border-2 border-grayscale-3 bg-grayscale-2"
              {...attributes.popper}
            >
              <Listbox.Options className="divide-y-2 divide-grayscale-3">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.label}
                    value={option}
                    className={
                      selectedOption === option.label
                        ? "p-1.5 font-bold hover:cursor-pointer hover:bg-grayscale-3"
                        : "p-1.5 hover:cursor-pointer hover:bg-grayscale-3"
                    }
                  >
                    {option.label}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          )}
        </div>
      )}
    </Listbox>
  );
}

export default SearchSortBy;
