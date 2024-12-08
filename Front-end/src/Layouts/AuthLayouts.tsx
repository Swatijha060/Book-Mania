import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayouts = () => {
  return (
    <div
      className="min-h-screen w-screen flex items-center justify-center  bg-cover bg-center "
      style={{
        backgroundImage: `url('/Background_Image.jpg')`,
      }}
    >
      <div className="w-full max-w-md bg-white p-6 rounded-md shadow-md">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayouts;
