import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import {
  useGetAllBooksQuery,
  useGetBooksByGenreQuery,
  useAddBookmarkMutation,
} from "../redux/api/booksApiSlice";
import { useDispatch } from "react-redux";
import { bookmarkBook, setSelectedBook } from "../redux/features/books/booksSlice";




// Custom Arrows
import { TiArrowRight } from "react-icons/ti";
 const CustomNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{
        ...style,
        display: "block",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "50%",
        right: "10px",
        zIndex: 1000,
      }}
      onClick={onClick}
    >
      <TiArrowRight size={24} color="white" />
    </div>
  );
};

// Custom Prev Arrow
const CustomPrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{
        ...style,
        display: "block",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "50%",
        left: "10px",
        zIndex: 1000,
      }}
      onClick={onClick}
    >
      <TiArrowRight
        size={24}
        color="white"
        style={{ transform: "rotate(180deg)" }}
      />
    </div>
  );
};
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
    { breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 1 } },
    { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    { breakpoint: 350, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

// Book Card Component
const BookCard = ({ book }: { book: any }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addBookmark] = useAddBookmarkMutation();

  const handleBookmark = async () => {
    try {
      await addBookmark({ bookId: book._id }).unwrap();
      dispatch(bookmarkBook({ ...book, id: book._id }));
    } catch (error) {
      console.error("Failed to bookmark:", error);
    }
  };

  return (
    <div className="px-2">
      <div className="shadow-md rounded-lg bg-white w-full mx-auto max-w-[160px]">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-52 object-cover rounded-t-lg cursor-pointer"
          onClick={() => {
            dispatch(setSelectedBook({ ...book, id: book._id }));
            navigate(`/book/${book._id}`, { state: book });
          }}
        />
        <div className="p-3 text-center">
          <h3 className="text-sm font-bold truncate">{book.title}</h3>
          <p className="text-xs text-gray-500">{book.authors_name}</p>
          <CiBookmark
            className="mt-2 cursor-pointer text-gray-600 hover:text-blue-400"
            onClick={handleBookmark}
          />
        </div>
      </div>
    </div>
  );
};

// Section Component
const BookSection = ({ title, books }: { title: string; books: any[] }) => (
  <section className="mb-12">
    <div className="flex justify-between items-center mb-4 px-4">
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
    <Slider {...settings}>
      {books.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </Slider>
  </section>
);

const BookCarousel: React.FC = () => {
  const { data: allBooks, isLoading: allLoading } = useGetAllBooksQuery({});
  const { data: fictionBooks, isLoading: fictionLoading } = useGetBooksByGenreQuery("Fiction");
  const { data: nonFictionBooks, isLoading: nonFictionLoading } = useGetBooksByGenreQuery("Non-Fiction");

  if (allLoading || fictionLoading || nonFictionLoading) return <div>Loading books...</div>;

  return (
    <div className="max-w-screen-xl mx-auto container overflow-hidden">
      <BookSection title="Popular Books" books={allBooks?.data || []} />
      <BookSection title="Fiction Books" books={fictionBooks?.data || []} />
      <BookSection title="Non-Fiction Books" books={nonFictionBooks?.data || []} />
    </div>
  );
};

export default BookCarousel;