import React from "react";
import { useNavigate } from "react-router-dom";
import FooterWOPhoto from "../components/FootWOPhoto";
import { MagneticButton } from "../components/MagneticButton";

function Book() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex basis-1">
        <div
          className="text-2xl mx-20 w-1/4 items-start top-0 self-center text-left cursor-pointer"
          onClick={() => navigate("/")}>
          <MagneticButton className="mt-5 top-0 self-center text-left cursor-pointer flex items-center font-light justify-center w-20 h-20 rounded-full bg-black">
            <div className="text-white">Home</div>
          </MagneticButton>
        </div>
        <div className="basis-1/2 justify-end text-right text-7xl mt-20 mx-20 pt-10">
          Book : Tiny Tears .
        </div>
      </div>
      <div className="flex-col m-40">
        <div className="text-5xl text-center self-center mb-10 font-light">
          Discover the Art of Simplicity : Tearable Posters
        </div>
        <div className="text-2xl font-extralight text-center self-center mx-35">
          That Inspire Welcome to a world where art meets minimalism.
          Introducing our exclusive Minimal Tearable Posters book—a curated
          collection of thoughtfully designed posters that celebrate simplicity,
          creativity, and purpose. Each page features a striking visual or an
          inspiring message, crafted to blend effortlessly into any space. The
          tearable format allows you to transform these pages into standalone
          pieces of art—perfect for framing, gifting, or personal inspiration.
          With clean lines, subtle aesthetics, and a touch of elegance, this
          book is more than just a collection; it's an experience designed for
          those who appreciate the beauty in less. Embrace minimalism, one
          tearable masterpiece at a time.
        </div>
      </div>
      <FooterWOPhoto />
    </div>
  );
}

export default Book;
