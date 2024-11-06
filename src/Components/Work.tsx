import React from "react";
import { BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/solid";
import DownloadCV from "../Funcionalities/Download.tsx";

const Work = () => {
  const workHistory = [
    {
      title: "Full Stack Developer",
      company: "I-Charging",
      duration: "March 2023 - Present",
      description: "Worked on React, Node.js, Docker, and MariaDB projects.",
      path: "/i_charging_logo.jpg",
    },
    {
      title: "Front-End Developer",
      company: "Neoception",
      duration: "2022 (6 months)",
      description: "Vue.js and Ionic along with C#.",
      path: "/NEO-logo.webp",
    },
    {
      title: "Software Developer",
      company: "Neoception",
      duration: "2021 - 2022 (9 Months)",
      description: "C#, TestStand",
      path: "/NEO-logo.webp",
    },
    {
      title: "Full Stack Developer",
      company: "HealthySystems",
      duration: "2020 (6 months)-Internship",
      description: "React.js, ElasticSearch, Kibana, Javascript",
      path: "/healthysystems_logo.jpg",
    },
  ];

  return (
    <div className=" mx-auto max-w-2xl lg:max-w-5xl">
      <div className="mb-8">
        <div className="flex items-center space-x-2">
          <BriefcaseIcon className="h-6 w-6 text-blue-500" />
          <h2 className="text-2xl font-bold text-gray-300">Work</h2>
        </div>
        {workHistory.map((job, index) => (
          <div
            key={index}
            className="mt-4 border border-zinc-700/40 shadow-md rounded-md p-3"
          >
            <h3 className="text-xl font-bold text-gray-300">{job.title}</h3>
            <div className="flex items-center space-x-2">
              <img
                alt={`${job.company} logo`}
                src={job.path}
                className="inline-block h-5 w-5 rounded-full"
              />
              <h4 className="text-md text-gray-500">{job.company}</h4>
            </div>
            <p className="text-sm text-gray-400">{job.duration}</p>
            <p className="mt-2 text-gray-300">{job.description}</p>
          </div>
        ))}
        <DownloadCV />
      </div>
    </div>
  );
};

export default Work;
