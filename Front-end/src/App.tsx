import About from "./pages/About/about";
import Home from "./pages/Home/home";
import { Route, Routes } from "react-router-dom";
// import MyLibrary from "./pages/MyLibrary/MyLibrary";
import SettingsPage from "./pages/SettingsPage/Settings";
import Login from "./pages/Login/Login"; // Import Login component
import AuthLayouts from "./Layouts/AuthLayouts";
import MainLayouts from "./Layouts/MainLayouts";
import Genre from "./pages/Genre/Genre";
import BookDetails from "./components/BookDetails";
import { useState } from "react";
import MyLibrary from "./pages/MyLibrary/MyLibrary";
import GenreCarousel from "./components/GenreCarousel";

// import Register from "./pages/Register/register";
// import Profile from "./pages/Profile/profile";

function App() {
  const [bookmarkedBooks, setBookmarkedBooks] = useState<any[]>([]);
  const handleBookmark = (book: any) => {
    setBookmarkedBooks((prev) => {
      // Prevent duplicates
      if (!prev.some((b) => b.id === book.id)) {
        return [...prev, book];
      }
      return prev;
    });
  };

  return (
    <Routes>
      <Route element={<MainLayouts />}>
        {/**This is for the layout separations */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/mylibrary"
          element={<MyLibrary books={bookmarkedBooks} />}
        />
        <Route path="/Settings" element={<SettingsPage />} />
        <Route path="/genre" element={<GenreCarousel onBookmark={handleBookmark} />} />
        <Route path="/genre/book/:bookId" element={<BookDetails />} />
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
