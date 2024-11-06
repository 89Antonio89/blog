import React from "react";

const DownloadCV = () => {
  return (
    <div className="flex justify-center mt-10">
      <a
        href={`/CvAntónioBertelo-1.pdf`}
        download="António_CV.pdf"
        className="border border-zinc-500 text-zinc-500 font-bold py-2 px-4 rounded hover:bg-zinc-500 hover:text-white transition duration-300"
      >
        Download CV
      </a>
    </div>
  );
};

export default DownloadCV;
