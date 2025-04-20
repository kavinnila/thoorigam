// // import React from "react";
// import { Link } from "react-router-dom";
// import { Dot } from 'lucide-react';
// import { MagneticButton } from "../components/MagneticButton";

// function Hero() {
//   return (
//     <div className="container flex items-center justify-between mx-auto py-5">
//       {/* Logo Section */}
//       <Link to="/about" className="group relative w-24 h-24">
//         {/* Initial Logo */}
//         <img
//         src = "https://res.cloudinary.com/dbmkd6jcy/image/upload/v1745146361/1_oitoba.png"
//           // src="/assets/logo.png"
//           alt="Logo"
//           className="absolute inset-0 w-16 h-auto transition-opacity duration-500 opacity-100"
//         />
//         {/* Expanded Logo */}
//         <img
//           src="/assets/sign.png"
//           alt="Expanded Logo"
//           className="absolute inset-0 w-24 h-auto transition-opacity duration-500 opacity-0 group-hover:opacity-100"
//         />
//       </Link>

//       {/* Navigation Section */}
//       <div className="flex space-x-5 text-xl">
//         {/* Portfolio Link */}
//         <Link to="/portfolio" className="hover:text-2xl">
//         <MagneticButton className="mt-5 top-0 self-center text-left cursor-pointer flex items-center font-light justify-center w-20 h-20 rounded-full bg-black">
//             <div className="text-white hover:text-indigo-400">Portfolio</div>
//           </MagneticButton>
//         </Link>
//         <Dot className='scale-0 justify-center align-middle transition-transform duration-200 ease-in-expo group-hover:scale-100' />

//         {/* Let's Talk Link */}
//         <Link to="/contact" className="hover:text-2xl text-gray-800">
//         <MagneticButton className="mt-5 top-0 self-center text-left cursor-pointer flex items-center font-light justify-center w-20 h-20 rounded-full bg-black">
//             <div className="text-white hover:text-indigo-400">Let's talk</div>
//           </MagneticButton>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Hero;
// src/app/sections/Hero.jsx
'use client';

import Link from 'next/link';
import { Dot } from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';

export default function Hero() {
  return (
    <div className="container flex items-center justify-between mx-auto py-5">
      {/* Logo Section */}
      <Link href="/about" className="group relative w-24 h-24">
        {/* Initial Logo */}
        <img
          src="/assets/logo.png" 
          alt="Logo"
          sizes='60x60'
          className="absolute inset-0 w-50 h-auto transition-opacity duration-500 opacity-100"
        />
      </Link>

      {/* Navigation Section */}
      <div className="flex space-x-5 text-xl">
        {/* Portfolio Link */}
        <Link href="/portfolio">
          <MagneticButton className="mt-5 top-0 self-center text-left cursor-pointer flex items-center font-light justify-center w-20 h-20 rounded-full bg-black">
            <div className="text-white hover:text-indigo-400">Portfolio</div>
          </MagneticButton>
        </Link>
        <Dot className="scale-0 justify-center align-middle transition-transform duration-200 ease-in-expo group-hover:scale-100" />

        {/* Let's Talk Link */}
        <Link href="/contact">
          <MagneticButton className="mt-5 top-0 self-center text-left cursor-pointer flex items-center font-light justify-center w-20 h-20 rounded-full bg-black">
            <div className="text-white hover:text-indigo-400">Let's talk</div>
          </MagneticButton>
        </Link>
      </div>
    </div>
  );
}
