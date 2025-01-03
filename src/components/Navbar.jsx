import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white py-3 rounded-xl mb-8">
      <div className="max-w-screen-xl mx-auto flex justify-center gap-8">
        <NavLink
          to="/"
          className="text-lg font-semibold hover:text-yellow-400 transition duration-300"
        >
          Home
        </NavLink>
        <NavLink
          to="/pastes"
          className="text-lg font-semibold hover:text-yellow-400 transition duration-300"
        >
          Pastes
        </NavLink>
        <NavLink
          to="/about"
          className="text-lg font-semibold hover:text-yellow-400 transition duration-300"
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
