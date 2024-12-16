import GenreCarousel from "../../components/GenreCarousel";
import { useState } from "react";

const Genre = () => {
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
    <div>
      <GenreCarousel onBookmark={handleBookmark} />
    </div>
  );
};

export default Genre;
