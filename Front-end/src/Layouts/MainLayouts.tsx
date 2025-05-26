import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { useTheme } from "../components/ThemeContext";
import DarkModeToggle from "../components/DarkModeToggle";

const MainLayouts: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div
      className={`relative flex min-h-screen overflow-x-hidden ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Sidebar */}
      <SideBar />
{/**Todo: Make the whole layout into darkMode */}
      {/* Main Content */}
      <div className="flex flex-col w-full bg-red-400"> 
        {/* Header */}
        <header
          className={`flex items-center justify-end p-4 border-b ${
            darkMode ? "bg-gray-900" : "bg-red-400"
          } max-w-screen-xl mx-auto w-full`}
        >
          <div className="flex items-center space-x-4">
            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Link to="/Settings">
              <img
                src="/avatar.svg"
                alt="User Avatar"
                className="w-10 h-10 rounded-full border"
              />
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-grow p-4">
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayouts;