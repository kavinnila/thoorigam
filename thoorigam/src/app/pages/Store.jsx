import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";
import { MagneticButton } from "../components/MagneticButton";
import { useNavigate } from "react-router-dom";
import FooterWOPhoto from "../components/FootWOPhoto";
const products = [
  {
    id: 1,
    image: "/assets/calendar_thumbnail.png",
    title: "2025 Minimal Calendar",
    price: "$19.99",
    description:
      "In a world overwhelmed by endless notifications and cluttered schedules, the Minimal Calendar offers a refreshing approach to planning. Designed to help you focus on what truly matters, bringing simplicity and clarity to your daily life..",
  },
];

function Store() {
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <div className="flex basis-1">
      <div
          className="text-2xl mx-20 w-1/4 items-start top-0 self-center text-left cursor-pointer"
          onClick={() => navigate("/")}
        >
          <MagneticButton className="mt-5 top-0 self-center text-left cursor-pointer flex items-center font-light justify-center w-20 h-20 rounded-full bg-black">
            <div className="text-white">Home</div>
          </MagneticButton>
        </div>
        <div className="basis-1/2 justify-end text-right text-7xl mt-20 mx-20 pt-10">
          Products .
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border flex flex-col md:flex-row">
            <img
              src={product.image}
              alt={product.title}
              className="w-full md:w-1/2 h-3/4 object-cover rounded md:rounded-r-none"
            />
            <div className="p-4 flex flex-col justify-start items-center align-middle pt-40 mt-10 md:w-1/2">
              <h3 className="text-2xl mb-10">{product.title}</h3>
              <p className="text-gray-700 mb-2 text-center align-middle justify-center leading-7 mx-20">
                {product.description}
              </p>
              <p className="text-xl mt-5">{product.price}</p>
              <div className="flex space-x-4 mt-5 ">
                {" "}
                {/* <button className="  hover:text-red-500 transition-colors">
                  <FaRegHeart size={25}/>{" "}
                </button>{" "} */}
                <button className=" hover:text-indigo-400 transition-colors py-2">
                  <TbShoppingBagPlus size={30}/>{" "}
                </button>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
      <FooterWOPhoto/>
    </div>
  );
}

export default Store;
