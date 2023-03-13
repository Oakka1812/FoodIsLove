import React from "react";
import { RiRestaurant2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to={"/"}>
        <div className="flex items-center gap-2 my-8">
          <RiRestaurant2Fill className="text-orange-500 text-4xl" />
          <p className="text-xl text-orange-500 font-bold">FOODISLOVE</p>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
