import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Genre from "./pages/Genre/Genre";
import BookDetails from "./components/BookDetails";
import MyLibrary from "./pages/MyLibrary/MyLibrary";
import SettingsPage from "./pages/SettingsPage/Settings";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/Signup";
// import AdminDashboard from "./components/Admin/AdminDashboard";
import MainLayouts from "./Layouts/MainLayouts";
import AuthLayouts from "./Layouts/AuthLayouts";
import NotFound from "./pages/NotFound/NotFound";

import { ThemeProvider } from "./components/ThemeContext";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import AdminDashboard from "./components/Admin/AdminDashboard";
import GenreList from "./pages/Genre/GenreList";


function App() {
  const [bookmarkedBooks] = useState([]);

  

  return (
    <ThemeProvider>
      <Provider store={store}>
        <ToastContainer/>
        <Routes>
          {/* Main Layout */}
          <Route element={<MainLayouts />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/mylibrary"
              element={<MyLibrary books={bookmarkedBooks} />}
            />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/genre" element={<Genre />} />
            <Route path="/genre/book/:bookId" element={<BookDetails />} />
            <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
            <Route path = "/genreList" element={<GenreList/>}/>
          </Route>

          {/* Authentication Layout */}
          <Route element={<AuthLayouts />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
          

          {/* Catch-All Route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        </Provider>
    </ThemeProvider>
  );
}

export default App;
