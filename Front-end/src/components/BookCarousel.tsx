import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from "../constants/constants";
import { booksData } from "../constants/data";
import { CiBookmark } from "react-icons/ci";

// Slick Carousel settings
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
  responsive: [
    {
      breakpoint: 1280, // Large screens
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024, // Medium screens
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // Tablets
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // Phones
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 350, // Extra small screens
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// Reusable Book Card Component
const BookCard = ({ book }: { book: any }) => (
  <div className="px-2">
    <div className="shadow-md rounded-lg bg-white w-full mx-auto max-w-[160px]">
      <img
        src={book.cover}
        alt={book.title}
        className="w-full h-52 object-cover rounded-t-lg"
      />
      <div className="p-3 text-center">
        <h3 className="text-sm font-bold truncate">{book.title}</h3>
        <p className="text-xs text-gray-500">{book.author}</p>
        <CiBookmark className="mt-2 cursor-pointer text-gray-600 hover:text-blue-400" />
      </div>
    </div>
  </div>
);

// Section Component
const BookSection = ({ title, books }: { title: string; books: any[] }) => (
  <section className="mb-12">
    <div className="flex justify-between items-center mb-4 px-4">
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
    <Slider {...settings}>
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </Slider>
  </section>
);

const BookCarousel: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto container overflow-hidden">
      <BookSection title="Popular Books" books={booksData.popular} />
      <BookSection title="Fiction Books" books={booksData.fiction} />
      <BookSection title="Non-Fiction Books" books={booksData.nonFiction} />
    </div>
  );
};

export default BookCarousel;
