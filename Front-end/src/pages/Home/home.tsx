import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import BookCarousel from "../../components/BookCarousel";
import { useTheme } from "../../components/ThemeContext";
import DarkModeToggle from "../../components/DarkModeToggle";

const Home: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme(); // Get dark mode functionality from context

  return (
    <div className="p-1  min-h-screen">
      <div className="flex justify-between items-center mb-10 relative">
        {/* Greeting Text */}
        <div>
          <h2 className="text-3xl font-bold">Hello, User!</h2>
          <h4 className="text-xl">Which book do you want to read today?</h4>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <div className="relative w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search for books..."
            className={`w-full px-14 py-3 border rounded-full shadow-md focus:outline-none focus:ring-2 ${
              darkMode
                ? "bg-gray-700 text-white border-gray-600 focus:ring-gray-400"
                : "bg-gray-100 text-gray-700 border-gray-300 focus:ring-blue-400"
            }`}
          />
          <CiSearch
            className={`absolute left-6 top-1/2 transform -translate-y-1/2 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
            size={24}
          />
        </div>
      </div>

      {/* Book Categories */}
      <div className="mb-6">
        <nav>
          <ul className="flex space-x-6 text-lg font-semibold">
            <Link
              to="/all"
              className={`hover:border-b-2 ${
                darkMode ? "border-gray-400" : "border-black"
              }`}
            >
              All
            </Link>
            <Link
              to="/eBooks"
              className={`hover:border-b-2 ${
                darkMode ? "border-gray-400" : "border-black"
              }`}
            >
              eBooks
            </Link>
            <Link
              to="/bestseller"
              className={`hover:border-b-2 ${
                darkMode ? "border-gray-400" : "border-black"
              }`}
            >
              Bestsellers
            </Link>
            <Link
              to="/new"
              className={`hover:border-b-2 ${
                darkMode ? "border-gray-400" : "border-black"
              }`}
            >
              New
            </Link>
            <Link
              to="/textbooks"
              className={`hover:border-b-2 ${
                darkMode ? "border-gray-400" : "border-black"
              }`}
            >
              Textbooks
            </Link>
          </ul>
        </nav>
      </div>

      {/* Book Carousel */}
      <BookCarousel />
    </div>
  );
};

export default Home;
