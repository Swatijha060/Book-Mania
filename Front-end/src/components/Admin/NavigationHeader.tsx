import React from "react";
import { useNavigate } from "react-router-dom";
import { useRole } from "./RoleContext";

const NavigationHeader = () => {
  const navigate = useNavigate();
  const { role } = useRole(); // Get the role of the user

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md flex justify-between items-center">
      <div
        className="text-lg font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        BookMania
      </div>
      <div className="space-x-4">
        {/* Show Home button for all users */}
        <button
          onClick={() => navigate("/")}
          className="py-1 px-3 bg-gray-600 hover:bg-gray-500 rounded-md"
        >
          Home
        </button>
        {/* Only show Admin Dashboard button for admins */}
        {role === "admin" && (
          <button
            onClick={() => navigate("/admin")}
            className="py-1 px-3 bg-blue-500 hover:bg-blue-400 rounded-md"
          >
            Admin Dashboard
          </button>
        )}
      </div>
    </header>
  );
};

export default NavigationHeader;
