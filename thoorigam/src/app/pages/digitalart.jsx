import React from "react";
import { useNavigate } from "react-router-dom";
import FooterWOPhoto from "../components/FootWOPhoto";
import { MagneticButton } from "../components/MagneticButton";

function DigitalArtGallery() {
  const navigate = useNavigate();
  const artworks = [
    "/assets/calendar_thumbnail.png",
    "/assets/Photographs/2.png",
    "/assets/Photographs/3.png",
    "/assets/Photographs/4.jpg",
    "/assets/Photographs/5.JPG",
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
          Digital Art.
        </div>
      </div>
      <div className="max-w-7xl mt-20 h-full mx-auto p-4 grid grid-cols-5 gap-2 md:gap-4">
        {artworks.map((artwork, index) => (
          <div
            key={index}
            className="relative w-full aspect-square overflow-hidden"
          >
            <img
              src={artwork}
              alt={`Creation ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      <FooterWOPhoto />
    </div>
  );
}

export default DigitalArtGallery;
