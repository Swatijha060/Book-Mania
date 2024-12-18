import About from "./pages/About/about";
import Home from "./pages/Home/home";
import { Route, Routes } from "react-router-dom";
import SettingsPage from "./pages/SettingsPage/Settings";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/Signup";
import AuthLayouts from "./Layouts/AuthLayouts";
import MainLayouts from "./Layouts/MainLayouts";
import Genre from "./pages/Genre/Genre";
import BookDetails from "./components/BookDetails";
import { useState } from "react";
import MyLibrary from "./pages/MyLibrary/MyLibrary";

// import Register from "./pages/Register/register";
// import Profile from "./pages/Profile/profile";

function App() {
  const [bookmarkedBooks, setBookmarkedBooks] = useState<any[]>([]);

  // Handle bookmark for books
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
        {/* Routes with MainLayouts component */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/mylibrary"
          element={<MyLibrary books={bookmarkedBooks} />}
        />
        <Route path="/Settings" element={<SettingsPage />} />

        {/* Genre page that shows a list of genres */}
        <Route path="/genre" element={<Genre />} />

        {/* Render individual book details when a user clicks on a book */}
        <Route path="/genre/book/:bookId" element={<BookDetails />} />
      </Route>

      <Route element={<AuthLayouts />}>
        {/* Auth-related routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
