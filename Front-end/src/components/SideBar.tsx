import React from "react";
import { FaHome, FaInfoCircle, FaBook, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar: React.FC = () => {
  return (
    <div className="bg-black text-white  w-1/5 min-w-[200px] min-h-screen sticky p-6 flex flex-col">
      <h1 className="text-3xl font-bold mb-10">
        <Link to="/">
          <img src="BookMania-Logo.png" />
        </Link>
      </h1>
      <nav>
        <Link
          to="/"
          className="flex items-center mb-6 text-lg hover:text-[#A85C5C]"
        >
          <FaHome className="mr-4" /> Home
        </Link>
        <Link
          to="/about"
          className="flex items-center mb-6 text-lg hover:text-[#A85C5C]"
        >
          <FaInfoCircle className="mr-4" /> About Us
        </Link>
        <Link
          to="/genre"
          className="flex items-center mb-6 text-lg hover:text-[#A85C5C]"
        >
          <FaBook className="mr-4" /> Genre
        </Link>
        <Link
          to="/mylibrary"
          className="flex items-center mb-6 text-lg hover:text-[#A85C5C]"
        >
          <FaBook className="mr-4" /> My Library
        </Link>
        <Link
          to="/settings"
          className="flex items-center text-lg hover:text-[#A85C5C]"
        >
          <FaCog className="mr-4" /> Settings
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;
