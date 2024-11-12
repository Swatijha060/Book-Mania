import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar";
import About from "./pages/About/about";
import Home from "./pages/Home/home";
import {   Route, Routes } from "react-router-dom";
import MyLibrary from "./pages/MyLibrary/MyLibrary";
// import Login from "./pages/Login/login";
// import Register from "./pages/Register/register";
// import Profile from "./pages/Profile/profile";


function App() {
  return (
    <div className=" relative  flex-row w-fit h-screen">
      <div className="flex flex-row">
      <SideBar />
     
      <div className="w-full  bg-red-300 p-4">
        
    
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mylibrary" element={<MyLibrary />} />
      </Routes>
    
      </div>
      </div>
      <Footer />
      </div>
  );
    
}
export default App;