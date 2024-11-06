import React from "react";
import { Description } from "./Description.tsx";
import { Header } from "./Header.tsx";
import ImageRow from "./ImageRow.tsx";
import Aboutme from "./Aboutme.tsx";
import Work from "./Work.tsx";
import Education from "./Education.tsx";
import Footer from "./Footer.tsx";
import PersonalProjects from "./PersonalProjects.tsx";

export const Main = () => {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8 ">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
        </div>
      </div>
      <div className="sm:px-8 mt-9">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            {/* <Header /> */}
            <Description />
            <ImageRow />
            <div className="flex justify-between mt-24">
              <div className="w-full max-w-md">
                <Education />
                <PersonalProjects />
              </div>
              <div className="w-full max-w-md">
                <Work />
              </div>
            </div>
            <Aboutme />

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
