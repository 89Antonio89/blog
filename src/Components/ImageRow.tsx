import React from "react";

const ImageRow = () => {
  // Replace with your image URLs
  const images = [
    "/9CE6399C-3B20-4778-A817-0491FDAC2CA7_1_105_c.jpeg",
    "/3DA04FF1-FC5A-4E06-A266-88C152E5C990.JPG",
    "/145054792_2815531145369630_2799461721663301094_n.jpg",
    "/1AB07A8E-AA6E-477C-BCF4-28B11101289C.JPG",
    "/121194088_177546800640870_5778228652929042785_n.jpg",
  ];

  return (
    <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8 mt-24">
      {images.map((src, index) => (
        <div
          className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl  ${index % 2 == 0 ? "rotate-2" : "-rotate-2"}`}
        >
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="h-72 w-72 rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageRow;
