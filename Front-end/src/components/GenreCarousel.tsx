import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { TiArrowRight } from "react-icons/ti";
import { CiBookmark } from "react-icons/ci";
import { booksData } from "../constants/data";
import { CustomPrevArrow, CustomNextArrow } from "../constants/constants";

// Book interface
interface Book {
  id: number;
  cover: string;
  title: string;
  author: string;
  description: string;
  rating: number;
  pages: number;
  // publisher: string;
  // published: string;
  // language: string;
  publisher?: string; // Make optional
  published?: string;
  language?: string;
}

// BookCarouselProps interface
interface BookCarouselProps {
  onBookmark: (book: Book) => void;
  genre?: string;
}

// Carousel settings
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

// GenreCarousel Component
const GenreCarousel: React.FC<BookCarouselProps> = ({ onBookmark, genre }) => {
  const navigate = useNavigate();

  const handleBookClick = (book: Book) => {
    navigate(`/genre/book/${book.id}`, { state: book });
  };

  // Get books for a specific genre
  const getBooksForGenre = (genre: string) => {
    switch (genre) {
      case "Popular":
        return booksData.popular;
      case "Fiction":
        return booksData.fiction;
      case "Non-Fiction":
        return booksData.nonFiction;
      default:
        return [];
    }
  };

  // Get books for current selected genre
  const booksForCurrentGenre = getBooksForGenre(genre || "Popular");

  return (
    <section className="mb-6">
      <div className="text-2xl flex font-bold justify-center mb-6">
        {genre}
        <button>
          <TiArrowRight size={40} />
        </button>
      </div>
      <Slider {...settings}>
        {booksForCurrentGenre.map((book) => (
          <div key={book.id} className="p-4">
            <div
              className="shadow-lg rounded-lg bg-white w-44 cursor-pointer"
              onClick={() => handleBookClick(book)}
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-sm font-bold truncate">{book.title}</h3>
                <p className="text-xs text-gray-600">{book.author}</p>
                <CiBookmark
                  className="cursor-pointer dark:bg-blue-400"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering book click
                    alert("Bookmarked");
                    onBookmark(book);
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default GenreCarousel;
