import React from "react";
// import Photo from "../assets/footerphoto.png"; // Replace with your image path
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
// import { MagneticButton } from "../components/MagneticButton";
function Footer() {
  return (
    <footer className="relative py-6 mt-auto flex justify-center items-center ">
      <div className="flex flex-col items-center mt-20 mx-20 p-20">
        {/* Circular Photo */}
        <img 
        src="/assets/FooterPhoto.png"
          // src={Photo} 
          alt="Profile" 
          className="w-1/2"
        />
        {/* Footer Text */}
        <p className="mt-10 text-sm text-gray-500">
          © 2024 K. All Rights Reserved.
        </p>
        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-10">
{/*           
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-blue-400 transition-colors"
          >
            <FaTwitter size={20} />
          </a> */}
          <a
            href="https://www.linkedin.com/in/kavin-nila-m-p-997a2917b/"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-blue-700 transition-colors"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/aspect_apertureo/?igsh=emVoNTJpNXg5ZjRt#"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-pink-500 transition-colors"
          >
            {/* <MagneticButton */}
            <FaInstagram size={20} />
          </a>
          <a
            href="mailto:letterkdott@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-red-800 transition-colors"
          >
            <MdOutlineAlternateEmail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
