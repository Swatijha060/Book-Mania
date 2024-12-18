import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { ThemeProvider, useTheme } from "../components/ThemeContext";
import DarkModeToggle from "../components/DarkModeToggle";

const LayoutContent: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="relative flex-row min-h-screen bg-gray-100 dark:bg-gray-900 overflow-x-hidden">
      {/* Toggle Button */}
      <div className="absolute top-4 right-4 z-50">
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>

      {/* Sidebar and Page Content */}
      <div className="flex flex-row">
        <SideBar />
        <div className="w-full bg-red-400 dark:bg-gray-900 p-1">
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const MainLayouts: React.FC = () => {
  return (
    <ThemeProvider>
      <LayoutContent />
    </ThemeProvider>
  );
};

export default MainLayouts;
