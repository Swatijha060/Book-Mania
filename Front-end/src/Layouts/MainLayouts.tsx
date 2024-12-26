import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { ThemeProvider, useTheme } from "../components/ThemeContext";
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

      {/* Main Content */}
      <div className="flex flex-col w-full">
        {/* Header */}
        <header className="relative flex items-center justify-end p-4 border-b bg-gray-100 dark:bg-gray-900">
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Link to="/Settings">
            <img
              src="/avatar.svg"
              alt="User Avatar"
              className="w-10 h-10 ml-4 rounded-full border"
            />
          </Link>
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
