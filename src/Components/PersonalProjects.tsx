import { UserIcon } from "@heroicons/react/solid";
import React from "react";

const PersonalProjects = () => {
  const images = [
    "/unisex-premium-hoodie-sky-blue-back-66cdc5ad6eb0a.png",
    "/Person Back.png",
    "/unisex-premium-t-shirt-charcoal-back-669bc815c5ed6.png",
    "/unisex-premium-t-shirt-natural-front-667b11cb38158.png",
    "/unisex-premium-t-shirt-navy-back-6667385a81de1.png",
  ];

  return (
    <div className="mx-auto max-w-2xl lg:max-w-5xl mt-12">
      <div>
        <div className="flex items-center space-x-2">
          <UserIcon className="h-6 w-6 text-green-500" />
          <h2 className="text-2xl font-bold text-gray-300">
            Personal Projects
          </h2>
        </div>
        <p className="mt-4 text-gray-400">
          I started this brand to turn my ideas into something real. It’s a mix
          of my style and creativity, with each piece designed to stand out and
          feel personal. It’s all about putting my own touch on every item and
          seeing where this journey takes me.
        </p>
        <div className="flex overflow-x-auto mt-6 scrollbar-hide">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-none w-64 h-64 overflow-hidden rounded-lg shadow-md mx-2"
            >
              <img
                src={src}
                alt={`Project Image ${index + 1}`}
                className="h-64 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
