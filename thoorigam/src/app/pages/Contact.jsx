import React from "react";
import FooterWOPhoto from "../components/FootWOPhoto";
import { Link } from "react-router-dom";
import { MagneticButton } from "../components/MagneticButton";
function Contact() {
  return (
    <div>
      <div className="">
      <Link
          to="/"
          className="mx-20 w-1/4 items-start top-0 self-center text-left cursor-pointer"
        >
          <MagneticButton className="mt-5  mx-20 top-0 self-center text-left cursor-pointer p-5 flex items-center font-light justify-center w-20 h-20 rounded-full bg-black">
            <div className="text-white">Home</div>
          </MagneticButton>
        </Link>
      </div>
      <div className="flex-col justify-center items-center self-center">
        <div className="items-center self-center justify-center flex basis-1/2">
          <img src="/assets/logo.png" alt="" className="w-1/5 h-1/5 " />
        </div>
        <div className="text-center self-center justify-center text-2xl mx-20 ">
          Contact us at{" "}
          <a
            href="mailto:letterkdott@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-red-800 transition-colors"
          >
            <span>letterkdot@gmail.com</span>
          </a>
        </div>
        <FooterWOPhoto />
      </div>
    </div>
  );
}

export default Contact;
