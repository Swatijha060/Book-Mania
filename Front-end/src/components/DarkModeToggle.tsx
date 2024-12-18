import React from "react";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";

interface DarkModeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  darkMode,
  toggleDarkMode,
}) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="focus:outline-none"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? (
        <MdOutlineWbSunny size={28} className="text-yellow-300" />
      ) : (
        <MdOutlineDarkMode size={28} className="text-gray-600" />
      )}
    </button>
  );
};

export default DarkModeToggle;
