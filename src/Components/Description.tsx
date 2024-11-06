import React from "react";

export const Description = () => {
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];
  return (
    <>
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <img
          alt=""
          src="/59700EAB-A914-4CC1-B6FD-CC727ED4573D_1_105_c.jpeg"
          className="inline-block h-24 w-auto rounded-full"
        />
        <div className="max-w-2xl mt-12">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl text-zinc-100">
            Software developer, sports enthusiast, and amateur clothing
            "artist".
          </h1>
          <p className="mt-6 text-base text-zinc-400">
            I'm António, a software developer based in Porto. Currently working
            at i-charging as a full stack web developer, I also explore my
            creative side by building brand ideas and bringing my visions to
            life.
          </p>
        </div>
      </div>

      <div className="relative flex justify-center py-4"></div>
    </>
  );
};
