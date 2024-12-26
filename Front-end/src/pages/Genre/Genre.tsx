import { useState } from "react";
import GenreCarousel from "../../components/GenreCarousel";
import {
  FaBook,
  FaBookOpen,
  FaHeart,
  FaRocket,
  FaDragon,
  FaStar,
} from "react-icons/fa";
import { MdOutlineLanguage } from "react-icons/md";
import { BsSearch } from "react-icons/bs";

// Updated genres list to match booksData structure
const genres = [
  { name: "Fiction", icon: <FaBook /> },
  { name: "Non-Fiction", icon: <FaBookOpen /> },
  { name: "Mystery", icon: <BsSearch /> },
  { name: "Romance", icon: <FaHeart /> },
  { name: "Sci-Fi", icon: <FaRocket /> },
  { name: "Fantasy", icon: <FaDragon /> },
  { name: "Cultural and Regional", icon: <MdOutlineLanguage /> },
  { name: "Other Popular Genres", icon: <FaStar /> },
];

const Genre = () => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [bookmarkedBooks, setBookmarkedBooks] = useState<any[]>([]);

  // Handle genre click
  const handleGenreClick = (genre: string) => {
    setSelectedGenre(genre); // Set the selected genre for the carousel
  };

  // Handle bookmarking of books
  const handleBookmark = (book: any) => {
    setBookmarkedBooks((prev) => {
      if (!prev.some((b) => b.id === book.id)) {
        return [...prev, book]; // Add book to bookmarks if not already added
      }
      return prev;
    });
  };

  // Handle back to genres
  const handleBackToGenres = () => {
    setSelectedGenre(null); // Go back to genre grid
  };

  return (
    <div className="p-6 min-h-screen">
      {/* Render genre grid or carousel based on selectedGenre */}
      {!selectedGenre ? (
        <>
          <h1 className="text-3xl font-bold pb-3 text-center">Genres</h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {genres.map((genre, index) => (
              <div
                key={index}
                onClick={() => handleGenreClick(genre.name)} // Set the genre
                className="cursor-pointer bg-red-200 p-8 rounded-lg shadow-md hover:bg-blue-100 flex flex-col items-center justify-center text-lg font-semibold transition"
              >
                <span className="text-3xl mb-2">{genre.icon}</span>
                {genre.name}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Back button to genres */}
          <button
            onClick={handleBackToGenres} // Back to genre grid
            className="mb-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded shadow"
          >
            Back to Genres
          </button>
          <h1 className="text-2xl font-bold pb-3 text-center">
            {/* Books in {selectedGenre}*/}
          </h1>

          {/* GenreCarousel Component */}
          <GenreCarousel genre={selectedGenre} onBookmark={handleBookmark} />

          {/* Bookmarks Section */}
          {bookmarkedBooks.length > 0 && (
            <p className="text-center mt-4">
              You have bookmarked {bookmarkedBooks.length} book(s).
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Genre;
