import React from "react";
import { BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/solid";
const Education = () => {
  const educationHistory = [
    {
      title: "Bachelor's in Computer Science",
      institution: "University of Porto",
      duration: "2017 - 2020",
    },
    {
      title: "Master's in Computer Science",
      institution: "University of Porto",
      duration: "2020 - 2023",
    },
  ];

  return (
    <div className="mx-auto max-w-2xl lg:max-w-5xl">
      <div>
        <div className="flex items-center space-x-2">
          <AcademicCapIcon className="h-6 w-6 text-green-500" />
          <h2 className="text-2xl font-bold text-gray-300">Education</h2>
        </div>
        {educationHistory.map((edu, index) => (
          <div
            key={index}
            className="mt-4 border border-zinc-700/40 shadow-md rounded-md p-3"
          >
            <h3 className="text-xl font-bold text-gray-300">{edu.title}</h3>
            <h4 className="text-md text-gray-500">{edu.institution}</h4>
            <p className="text-sm text-gray-400">{edu.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
