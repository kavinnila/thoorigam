import React from "react";
import { useNavigate } from "react-router-dom";
import FooterWOPhoto from "../components/FootWOPhoto";
import { MagneticButton } from "../components/MagneticButton";

function Design() {
  const navigate = useNavigate();

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
          Kavin .
        </div>
      </div>
      <div className="flex">
        <div className="flex basis-1/2">
          <ul>
            <li className="text-7xl font-extralight border-t border-solid border-black mx-30 p-10 transition-all last-of-type:border-b group-hover:opacity-90">
              Digital Art
            </li>
            <li className="text-7xl font-extralight border-t border-solid border-black mx-30 p-10 transition-all last-of-type:border-b group-hover:opacity-90">
              Posters
            </li>
            <li className="text-7xl font-extralight border-t border-solid border-black mx-30 p-10 transition-all last-of-type:border-b group-hover:opacity-90">
              Tshirts
            </li>
          </ul>
        </div>
      </div>
      <FooterWOPhoto />
    </div>
  );
}

export default Design;
