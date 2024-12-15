import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

const MainLayouts = () => {
  return (
    <>
      <div className="relative flex-row min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-row">
          <SideBar />
          <div className="w-full bg-red-400 dark:bg-gray-900 p-4">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayouts;
