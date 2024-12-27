import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Genre from "./pages/Genre/Genre";
import BookDetails from "./components/BookDetails";
import MyLibrary from "./pages/MyLibrary/MyLibrary";
import SettingsPage from "./pages/SettingsPage/Settings";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/Signup";
import AdminDashboard from "./components/Admin/AdminDashboard";
import MainLayouts from "./Layouts/MainLayouts";
import AuthLayouts from "./Layouts/AuthLayouts";
import NotFound from "./pages/NotFound/NotFound";
import { RoleProvider, useRole } from "./components/Admin/RoleContext";
import { ThemeProvider } from "./components/ThemeContext";

// Protected Admin Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { role } = useRole();
  if (role !== "admin") {
    return <Navigate to="/" />; // Redirect to home if not admin
  }
  return <>{children}</>; // Render children for admin
};

function App() {
  const [bookmarkedBooks, setBookmarkedBooks] = useState<any[]>([]);

  // Bookmark Handler
  const handleBookmark = (book: any) => {
    setBookmarkedBooks((prev) => {
      if (!prev.some((b) => b.id === book.id)) {
        return [...prev, book];
      }
      return prev; // If the book is already bookmarked, do nothing
    });
  };

  return (
    <ThemeProvider>
      <RoleProvider>
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

            {/* Protected Admin Dashboard Route */}
            <Route
              path="/AdminDashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Route>

          {/* Authentication Layout */}
          <Route element={<AuthLayouts />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          {/* Catch-All Route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </RoleProvider>
    </ThemeProvider>
  );
}

export default App;
