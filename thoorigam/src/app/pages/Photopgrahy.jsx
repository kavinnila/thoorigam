import React from "react";
import { useNavigate } from "react-router-dom";
import FooterWOPhoto from "../components/FootWOPhoto";
import { MagneticButton } from "../components/MagneticButton";

function Photography() {
  const navigate = useNavigate();
  const photos = [
    "/assets/Photographs/1.png",
    "/assets/Photographs/2.png",
    "/assets/Photographs/3.png",
    "/assets/Photographs/4.jpg",
    "/assets/Photographs/5.JPG",
    "/assets/Photographs/6.JPG",
    "/assets/Photographs/7.jpg",
    "/assets/Photographs/8.JPG",
    "/assets/Photographs/9.JPG",
    "/assets/Photographs/10.JPG",
    "/assets/Photographs/11.JPG",
    "/assets/Photographs/12.JPG",
    "/assets/Photographs/13.jpg",
    "/assets/Photographs/14.JPG",

    "/assets/Photographs/1.png",
    "/assets/Photographs/2.png",
    "/assets/Photographs/3.png",
    "/assets/Photographs/4.jpg",
    "/assets/Photographs/5.JPG",
    "/assets/Photographs/6.JPG",
    "/assets/Photographs/7.jpg",
    "/assets/Photographs/8.JPG",
    "/assets/Photographs/9.JPG",
    "/assets/Photographs/10.JPG",
    "/assets/Photographs/11.JPG",
    "/assets/Photographs/12.JPG",
    "/assets/Photographs/13.jpg",
    "/assets/Photographs/14.JPG",
    // "src/assets/Photographs/15.HEIC",
    // "src/assets/Photographs/8.JPG",
    // "src/assets/Photographs/9.JPG",
    // "src/assets/Photographs/10.JPG",
    // Add more photo paths here
  ];
  return (
    <div>
      <div className="flex basis-1">
        <div
          className="text-2xl mx-20 w-1/4 items-start top-0 self-center text-left cursor-pointer"
          onClick={() => navigate("/")}
        >
          <MagneticButton className="mt-5 top-0 self-center text-left cursor-pointer flex items-center font-light justify-center w-20 h-20 rounded-full bg-black">
            <div className="text-white">Home</div>
          </MagneticButton>
        </div>
        <div className="basis-1/2 justify-end text-right text-9xl mt-20 mx-20 pt-10">
          Photography.
        </div>
      </div>
      <div className="max-w-7xl h-full mx-auto p-4 grid grid-cols-7 gap-2 md:gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative w-full aspect-square bg-gray-200 overflow-hidden"
          >
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      <FooterWOPhoto />
    </div>
  );
}

export default Photography;
