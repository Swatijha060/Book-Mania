import React from "react";
import { FaHome, FaInfoCircle, FaBook, FaCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideBar: React.FC = () => {
  const activeClass = "text-[#A85C5C] font-bold"; // Define active styles
  const defaultClass = "text-white hover:text-[#A85C5C]"; // Default link styles

  return (
    <div className="bg-black text-white w-1/5 min-w-[200px] min-h-screen sticky p-6 flex flex-col">
      <h1 className="text-3xl font-bold mb-10">
        <NavLink to="/">
          <img src="BookMania-Logo.png" alt="BookMania Logo" />
        </NavLink>
      </h1>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center mb-6 text-lg ${
              isActive ? activeClass : defaultClass
            }`
          }
        >
          <FaHome className="mr-4" /> Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex items-center mb-6 text-lg ${
              isActive ? activeClass : defaultClass
            }`
          }
        >
          <FaInfoCircle className="mr-4" /> About Us
        </NavLink>
        <NavLink
          to="/genre"
          className={({ isActive }) =>
            `flex items-center mb-6 text-lg ${
              isActive ? activeClass : defaultClass
            }`
          }
        >
          <FaBook className="mr-4" /> Genre
        </NavLink>
        <NavLink
          to="/mylibrary"
          className={({ isActive }) =>
            `flex items-center mb-6 text-lg ${
              isActive ? activeClass : defaultClass
            }`
          }
        >
          <FaBook className="mr-4" /> My Library
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center text-lg ${isActive ? activeClass : defaultClass}`
          }
        >
          <FaCog className="mr-4" /> Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
