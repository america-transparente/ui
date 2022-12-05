import React, { useState } from "react";
import { usePopper } from "react-popper";
import {
  SparklesIcon,
  MoonIcon,
  SunIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import { Listbox } from "@headlessui/react";
import Button from "../Button";

interface Props {
  captureThemeChange: React.Dispatch<React.SetStateAction<string>>;
}

function ThemeToggle({ captureThemeChange }: Props) {
  // ! this code should be in the top html file in head tag

  // if (
  //   localStorage.theme === "dark" ||
  //   (!("theme" in localStorage) &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches)
  // ) {
  //   document.documentElement.classList.add("dark");
  // } else {
  //   document.documentElement.classList.remove("dark");
  // }

  // Popper.js
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement);

  function handleThemeChange(value: string) {
    captureThemeChange(value);
    if (value === "light") return (localStorage.theme = "light");
    if (value === "dark") return (localStorage.theme = "dark");
    localStorage.removeItem("theme");
  }

  return (
    <Listbox as="div" onChange={handleThemeChange}>
      {({ open }) => (
        <>
          <Listbox.Button as="div" ref={setReferenceElement}>
            <Button primary={false} icon>
              <SparklesIcon className="h-5 w-5" />
            </Button>
          </Listbox.Button>
          {open && (
            <div
              ref={setPopperElement}
              style={styles.popper}
              className="mt-2 max-h-96 max-w-[15rem] overflow-auto rounded-xl border-2 border-light-neutral-100 text-light-text-100  dark:border-dark-neutral-100 dark:text-dark-text-200"
              {...attributes.popper}
            >
              <Listbox.Options className="divide-y-2 outline-none dark:divide-dark-neutral-100">
                <Listbox.Option key="1" value="light">
                  {({ active }) => (
                    <span
                      className={
                        active
                          ? "hover:bg-light-300 flex items-center gap-1 bg-light-neutral-300 p-1.5 hover:cursor-pointer dark:bg-dark-neutral-300 dark:hover:bg-dark-neutral-300"
                          : "flex items-center gap-1 bg-light-neutral-200 p-1.5 hover:cursor-pointer dark:bg-dark-neutral-200"
                      }
                    >
                      <SunIcon className="h-5 w-5" />
                      Tema Claro
                    </span>
                  )}
                </Listbox.Option>
                <Listbox.Option key="2" value="dark">
                  {({ active }) => (
                    <span
                      className={
                        active
                          ? "hover:bg-light-300 flex items-center gap-1 bg-light-neutral-300 p-1.5 hover:cursor-pointer dark:bg-dark-neutral-300 dark:hover:bg-dark-neutral-300"
                          : "flex items-center gap-1 bg-light-neutral-200 p-1.5 hover:cursor-pointer dark:bg-dark-neutral-200"
                      }
                    >
                      <MoonIcon className="h-5 w-5" />
                      Tema Oscuro
                    </span>
                  )}
                </Listbox.Option>
                <Listbox.Option key="3" value="default">
                  {({ active }) => (
                    <span
                      className={
                        active
                          ? "hover:bg-light-300 flex items-center gap-1 bg-light-neutral-300 p-1.5 hover:cursor-pointer dark:bg-dark-neutral-300 dark:hover:bg-dark-neutral-300"
                          : "flex items-center gap-1 bg-light-neutral-200 p-1.5 hover:cursor-pointer dark:bg-dark-neutral-200"
                      }
                    >
                      <ComputerDesktopIcon className="h-5 w-5" />
                      Tema Predeterminado
                    </span>
                  )}
                </Listbox.Option>
              </Listbox.Options>
            </div>
          )}
        </>
      )}
    </Listbox>
  );
}

export default ThemeToggle;
