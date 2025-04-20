// 'use client';
// import React from "react";
// import Bentogrid from "../components/Bentogrid";
// import { MagneticButton } from "../components/MagneticButton";
// import { Link } from "react-router-dom";
// import { FaRegHeart } from "react-icons/fa";

// // import PhotoStack from "../components/stack";
// function Landing() {
//   return (
//     <div className="flex-col basis-0">
//       {/* Top Section */}
//       <div className="flex basis-3 justify-center items-center ml-20 text-2xl px-20">
//         <div className=" flex basis-1/4 "></div>
//         <div className="flex basis-1/4 justify-center text-8xl align-middle items-center">
//           Hello, You.
//         </div>
//         <div>{/* <PhotoStack/> */}</div>
//         <div className="flex-col items-center self-center">
//           <div className="flex basis-1/4">
//             <a href="/store">
//               <img
//               src= "https://res.cloudinary.com/dbmkd6jcy/image/upload/v1745146361/1_oitoba.png"
//                 // src="/assets/homepageimg.png"
//                 alt="Homepage"
//                 className="w-full md:w-1/2 h-full mx-20 object-cover rounded md:rounded-r-none transition-transform duration-300 hover:scale-105 cursor-pointer"
//               />
//             </a>
//           </div>

//           <div className="flex w-3/4 basis-1/4 justify-center items-center text-sm pb-10">
//             Discover the magic of our first creation. Click now to fall in
//             <span className="mx-2 text-indigo-400">
//               {" "}
//               <FaRegHeart />
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="flex justify-around text-3xl px-5 p-20 mx-20">
//         <div className="flex flex-grow justify-center px-4">
//           <Link to="/design" className="hover:text-indigo-400">
//             <MagneticButton className="mt-5 self-center cursor-pointer flex items-center font-light justify-center">
//               <div className="text-3xl font-normal whitespace-nowrap ">
//                 Design
//               </div>
//             </MagneticButton>
//           </Link>
//         </div>
//         <div className="flex flex-grow justify-center px-4">
//           <Link
//             to="/photography"
//             className="flex flex-grow hover:text-indigo-400"
//           >
//             <MagneticButton className="mt-5 self-center cursor-pointer flex flex-grow items-center font-light justify-center">
//               <div className="text-3xl font-normal whitespace-nowrap">
//                 Photography
//               </div>
//             </MagneticButton>
//           </Link>
//         </div>
//         <div className="flex flex-grow justify-center px-4">
//           <Link to="/book" className="hover:text-indigo-400">
//             <MagneticButton className="mt-5 self-center cursor-pointer flex items-center font-light justify-center">
//               <div className="text-3xl font-normal whitespace-nowrap">Book</div>
//             </MagneticButton>
//           </Link>
//         </div>
//         <div className="flex flex-grow justify-center px-4">
//           <Link to="/store" className="hover:text-indigo-400">
//             <MagneticButton className="mt-5 self-center cursor-pointer flex items-center font-light justify-center">
//               <div className="text-3xl font-normal whitespace-nowrap">
//                 Store
//               </div>
//             </MagneticButton>
//           </Link>
//         </div>
//       </div>

//       {/* <div className="flex justify-around text-3xl px-5 p-20 mx-20">
//         <div className="flex basis-1/4 justify-center px-4">
//           <MagneticButton className="mt-5 top-0 self-center text-left cursor-pointer flex items-center font-light justify-center">
//             <div className="text-3xl font-normal">Design</div>
//           </MagneticButton>
//         </div>
//         <div className="flex basis-1/4 w-full justify-center ">
//           <MagneticButton className="mt-5 top-0 self-center text-left cursor-pointer flex items-center font-light justify-center">
//             <div className="text-3xl w-full font-normal whitespace-nowrap">Photography</div>
//           </MagneticButton>
//         </div>
//         <div className="flex basis-1/4 justify-center px-4">
//           <MagneticButton className="mt-5 top-0 self-center text-left cursor-pointer flex items-center font-light justify-center">
//             <div className="text-3xl font-normal">Book</div>
//           </MagneticButton>
//         </div>
//         <div className="flex basis-1/4 justify-center px-4"><MagneticButton className="mt-5 top-0 self-center text-left cursor-pointer flex items-center font-light justify-center">
//             <div className="text-3xl font-normal">Store</div>
//           </MagneticButton></div>
//       </div> */}
//       {/* <div className="flex basis-1/4 justify-center text-8xl mt-auto">What's new</div> */}
//       <div className="basis-1/2 justify-center text-center text-5xl font-light mt-20 mx-20 pt-10">
//         Featured.
//       </div>
//       <Bentogrid />
//     </div>
//   );
// }

// export default Landing;
// //flex flex-col h-screen justify-between px-4 py-10
// //flex justify-center text-2xl
// //flex justify-around text-3xl px-5
'use client';

import React from "react";
import Link from "next/link";
import Bentogrid from "../components/Bentogrid";
import { MagneticButton } from "../components/MagneticButton";
import { FaRegHeart } from "react-icons/fa";

export default function Landing() {
  return (
    <div className="flex-col basis-0">
      {/* Top Section */}
      <div className="flex basis-3 justify-center items-center ml-20 text-2xl px-20">
        <div className="flex basis-1/4" />
        <div className="flex basis-1/4 justify-center text-8xl align-middle items-center">
          Hello, You.
        </div>
        <div>{/* Optional: Add PhotoStack component */}</div>
        <div className="flex-col items-center self-center">
          <div className="flex basis-1/4">
            <Link href="/store">
              <img
                src="/assets/homepageimg.png"
                alt="Homepage"
                className="w-full md:w-1/2 h-full mx-20 object-cover rounded md:rounded-r-none transition-transform duration-300 hover:scale-105 cursor-pointer"
              />
            </Link>
          </div>

          <div className="flex w-3/4 basis-1/4 justify-center items-center text-sm pb-10">
            Discover the magic of our first creation. Click now to fall in
            <span className="mx-2 text-indigo-400">
              <FaRegHeart />
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-around text-3xl px-5 p-20 mx-20">
        {[
          { href: "/design", label: "Design" },
          { href: "/photography", label: "Photography" },
          { href: "/book", label: "Book" },
          { href: "/store", label: "Store" },
        ].map(({ href, label }) => (
          <div key={href} className="flex flex-grow justify-center px-4">
            <Link href={href} className="hover:text-indigo-400">
              <MagneticButton className="mt-5 self-center cursor-pointer flex items-center font-light justify-center">
                <div className="text-3xl font-normal whitespace-nowrap">
                  {label}
                </div>
              </MagneticButton>
            </Link>
          </div>
        ))}
      </div>

      {/* Featured Section */}
      <div className="basis-1/2 justify-center text-center text-5xl font-light mt-20 mx-20 pt-10">
        Featured.
      </div>
      <Bentogrid />
    </div>
  );
}
