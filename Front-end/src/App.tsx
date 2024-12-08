import About from "./pages/About/about";
import Home from "./pages/Home/home";
import { Route, Routes } from "react-router-dom";
import MyLibrary from "./pages/MyLibrary/MyLibrary";
import SettingsPage from "./pages/SettingsPage/Settings";
import Login from "./pages/Login/Login"; // Import Login component
import AuthLayouts from "./Layouts/AuthLayouts";
import MainLayouts from "./Layouts/MainLayouts";

// import Register from "./pages/Register/register";
// import Profile from "./pages/Profile/profile";

function App() {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        {/**This is for the layout separations */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mylibrary" element={<MyLibrary />} />
        <Route path="/Settings" element={<SettingsPage />} />
      </Route>

      <Route element={<AuthLayouts />}>
        {" "}
        {/* AuthLayouts component for protected routes */}
        <Route path="/login" element={<Login />} /> {/* Login component */}
      </Route>
    </Routes>
  );
}
export default App;
