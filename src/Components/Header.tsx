import React from "react";
import { Tab, TabGroup } from "@headlessui/react";

export const Header = () => {
  return (
    <header className="flex justify-center items-center py-2">
      <TabGroup>
        <div className="flex">
          <Tab
            autoFocus={false}
            className={({ selected }) =>
              `py-2 px-4 rounded-full transition-colors duration-200 border-b-2 ${
                selected
                  ? "border-blue-500 text-blue-500"
                  : "border-transparent text-gray-300 hover:text-blue-400"
              }`
            }
          >
            About
          </Tab>
          <Tab
            className={({ selected }) =>
              `py-2 px-4 rounded-full transition-colors duration-200 border-b-2 ${
                selected
                  ? "border-blue-500 text-blue-500"
                  : "border-transparent text-gray-300 hover:text-blue-400"
              }`
            }
          >
            Projects
          </Tab>
        </div>
      </TabGroup>
    </header>
  );
};
