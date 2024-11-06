import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  ChevronDownIcon,
  UserIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";
import React from "react";

export const AboutMe = () => {
  return (
    <div className="mx-auto max-w-7xl mt-24">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Personal Q&A Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center space-x-2 mb-4">
            <UserIcon className="h-6 w-6 text-green-500" />
            <h2 className="text-2xl font-bold text-gray-300">Personal Q&A</h2>
          </div>
          <div className="divide-y divide-white/5 rounded-xl bg-white/5">
            <Disclosure as="div" className="p-6">
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium text-white group-hover:text-white/80">
                  What inspired you to start a clothing project this year?
                </span>
                <ChevronDownIcon className="h-5 w-5 fill-white/60 group-hover:fill-white/50 group-open:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm text-white/50">
                I wanted a creative outlet beyond coding. Designing clothing
                felt like the perfect mix of art and personal style.
              </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div" className="p-6">
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium text-white group-hover:text-white/80">
                  How do you unwind after a long day?
                </span>
                <ChevronDownIcon className="h-5 w-5 fill-white/60 group-hover:fill-white/50 group-open:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm text-white/50">
                After work, I disconnect with some kind of sport. Lately, I’ve
                been focusing on tennis and fitness, which helps me relax.
              </DisclosurePanel>
            </Disclosure>
          </div>
        </div>

        {/* Professional Q&A Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center space-x-2 mb-4">
            <BriefcaseIcon className="h-6 w-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-gray-300">
              Professional Q&A
            </h2>
          </div>
          <div className="divide-y divide-white/5 rounded-xl bg-white/5">
            <Disclosure as="div" className="p-6">
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium text-white group-hover:text-white/80">
                  What motivates you as a developer each day?
                </span>
                <ChevronDownIcon className="h-5 w-5 fill-white/60 group-hover:fill-white/50 group-open:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm text-white/50">
                Solving problems and creating things that others use keeps me
                going. The thrill of seeing a project come together is
                unbeatable.
              </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div" className="p-6">
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium text-white group-hover:text-white/80">
                  What project are you most proud of and why?
                </span>
                <ChevronDownIcon className="h-5 w-5 fill-white/60 group-hover:fill-white/50 group-open:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2 text-sm text-white/50">
                For a project that brought me great satisfaction, I developed an
                RFID system using a tag reader to manage inventory more
                efficiently. This project was hands-on and involved integrating
                RFID hardware with custom software to track items in real-time.
                It combined technical challenges—working with signal detection
                and processing—with problem-solving as I designed an interface
                for seamless data updates. Seeing the final system work
                flawlessly, scanning tags to update inventory with just a tap,
                made it a deeply rewarding experience.
              </DisclosurePanel>
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
