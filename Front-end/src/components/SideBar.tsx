import React from "react";
import {
  FaHome,
  FaInfoCircle,
  FaBook,
  FaCog,
  FaUserShield,
  FaBookReader,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "../redux/api/userApiSlice";
import { logout } from "../redux/features/auth/authSlice";
import { toast } from "react-toastify";

const SideBar: React.FC = () => {
  const activeClass = "text-[#A85C5C] font-bold";
  const defaultClass = "text-white hover:text-[#A85C5C]";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutUser] = useLogoutUserMutation();

  // Access userInfo from Redux state
  interface RootState {
    auth: {
      userInfo: {
        role?: 'admin' | 'user';
        fullName?: string;
      } | null;
    };
  }

  const { userInfo } = useSelector((state: RootState) => state.auth);
  const isMainAdmin = userInfo?.role === "admin";
  const isLoggedIn = !!userInfo;

  const handleLogout = async () => {
    try {
      await logoutUser({}).unwrap(); // Pass an empty object or the required argument
      dispatch(logout());
      toast.success("Successfully logged out!");
      navigate('/login');
      localStorage.removeItem("rememberMe"); // Clear rememberMe if it exists
      localStorage.removeItem("userInfo"); // Clear userInfo if it exists

    } catch (err) {
      console.error('Failed to logout:', err);
    }
  };

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
        
        {isLoggedIn && (
          <>
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
          </>
        )}

        {/* Admin Panel Link - Only shown to admin users */}
        {isMainAdmin && (
          <>
          <NavLink
            to="/admin-dashboard"
            className={({ isActive }) =>
              `flex items-center text-lg mt-6 ${isActive ? activeClass : defaultClass}`
            }
          >
            <FaUserShield className="mr-4" /> Admin Panel
          </NavLink>
          <NavLink
          to="/genreList"
          className={({ isActive }) =>
            `flex items-center text-lg mt-6 ${isActive ? activeClass : defaultClass}`
          }
        >
          <FaBookReader className="mr-4" /> Genre List
        </NavLink>
        </>
        )}

        {/* Login/Logout Link */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className={`flex items-center text-lg mt-6 ${defaultClass}`}
          >
            <FaUserShield className="mr-4" /> Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `flex items-center text-lg mt-6 ${isActive ? activeClass : defaultClass}`
            }
          >
            <FaUserShield className="mr-4" /> Login
          </NavLink>
        )}
        
        <div className="text-white p-4">
          <h2 className="text-lg font-bold mb-4">User Info</h2>
          <p>Name: {userInfo?.fullName}</p> {/* Added user name display */}
          <p>User Role: {userInfo?.role}</p> {/* Added user role display */}
        </div>
      </nav>
      
      <div className="mt-auto text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} BookMania. All rights reserved.</div>
</div>
   
  );
};

export default SideBar;