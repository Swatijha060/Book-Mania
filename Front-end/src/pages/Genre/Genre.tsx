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
import { useGetAllGenresQuery } from "../../redux/api/genreApiSlice";

const Genre = () => {
  const { data: genreData, isLoading, isError } = useGetAllGenresQuery({});
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [bookmarkedBooks, setBookmarkedBooks] = useState<any[]>([]);

  console.log("Genre data:", genreData); // Debug API response

  // Handle genre click
  const handleGenreClick = (genre: string) => {
    setSelectedGenre(genre);
  };

  // Handle bookmarking of books
  const handleBookmark = (book: any) => {
    setBookmarkedBooks((prev) => {
      if (!prev.some((b) => b.id === book.id)) {
        return [...prev, book];
      }
      return prev;
    });
  };

  // Handle back to genres
  const handleBackToGenres = () => {
    setSelectedGenre(null);
  };

  // Helper function to assign icons based on genre name
  const getGenreIcon = (genreName: string) => {
    switch (genreName.toLowerCase()) {
      case "fiction":
        return <FaBook />;
      case "non-fiction":
        return <FaBookOpen />;
      case "mystery":
        return <BsSearch />;
      case "romance":
        return <FaHeart />;
      case "sci-fi":
        return <FaRocket />;
      case "fantasy":
        return <FaDragon />;
      case "cultural and regional":
        return <MdOutlineLanguage />;
      default:
        return <FaStar />;
    }
  };

  // Map API genres to our format with icons
  const genres = Array.isArray(genreData?.data)
    ? genreData.data.map((genre: { name: string }) => ({
        name: genre.name,
        icon: getGenreIcon(genre.name),
      }))
    : [];
  console.log("Mapped genres:", genres); // Debug mapped genres

  if (isLoading) return <div className="p-6 text-center">Loading genres...</div>;
  if (isError)
    return (
      <div className="p-6 text-center text-red-500">
        Error loading genres. Please ensure you are logged in and try again.
      </div>
    );
  if (genres.length === 0)
    return <div className="p-6 text-center">No genres available.</div>;

  return (
    <div className="p-6 min-h-screen">
      {!selectedGenre ? (
        <>
          <h1 className="text-3xl font-bold pb-3 text-center">Genres</h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {genres.map((genre, index) => (
              <div
                key={index}
                onClick={() => handleGenreClick(genre.name)}
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
          <button
            onClick={handleBackToGenres}
            className="mb-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded shadow"
          >
            Back to Genres
          </button>
          <h1 className="text-2xl font-bold pb-3 text-center">
            Books in {selectedGenre}
          </h1>
          <GenreCarousel genre={selectedGenre} onBookmark={handleBookmark} />
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