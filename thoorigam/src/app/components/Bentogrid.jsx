import React from "react";
import Footer from "../pages/Footer";
function Bentogrid() {
  // Array of box configurations
  const bentoBoxes = [
    { id: 1, colSpan: 2, rowSpan: 3, image: "https://res.cloudinary.com/dbmkd6jcy/image/upload/v1745146361/1_oitoba.png"},
    { id: 2, colSpan: 1, rowSpan: 2, image: "/assets/2.png" },
    { id: 3, colSpan: 1, rowSpan: 3, image: "/assets/3.png" },
    { id: 4, colSpan: 1, rowSpan: 2, image: "/assets/4.jpg" },
  ];
  return (
    <div className=" py-10 px-4 mx-20  mb-30">
      <div className="grid grid-cols-4  gap-6 max-w-screen-lg h-500 mx-auto">
        {bentoBoxes.map((box) => (
          <div
            key={box.id}
            className={`bento-box col-span-${box.colSpan} row-span-${box.rowSpan} bg-black text-white rounded-lg  hover:scale-105 transition-all duration-300`}
          >
            <img
              src={box.image}
              alt={`Box ${box.id}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Bentogrid;
