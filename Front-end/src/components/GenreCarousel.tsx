import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { TiArrowRight } from 'react-icons/ti';
import { CiBookmark } from 'react-icons/ci';
import { booksData} from '../constants/data';
import { CustomPrevArrow, CustomNextArrow } from '../constants/constants';
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
  interface Book {
    id: number;
    cover: string;
    title: string;
    author: string;
    description: string;
  }
  interface BookCarouselProps {
    onBookmark: (book: Book) => void;
  }


  const GenreCarousel: React.FC<BookCarouselProps> = ({ onBookmark }) => {
  const navigate = useNavigate();

  const handleBookClick = (booksData: any) => {
    navigate(`/genre/book/${booksData.id}`, { state: booksData });
  };

  return (
    <><section className="mb-6">
      <div className="text-2xl flex font-bold justify-center mb-6">
        Popular Books
        <button>
          <TiArrowRight size={40} />
        </button>
      </div>
      <Slider {...settings}>
        {booksData.popular.map((book) => (
          <div key={book.id} className="p-4">
            <div
              className="shadow-lg rounded-lg bg-white w-44 cursor-pointer"
              onClick={() => handleBookClick(book)}
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-56 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-sm font-bold truncate">{book.title}</h3>
                <p className="text-xs text-gray-600">{book.author}</p>
                <CiBookmark
                  className="cursor-pointer dark:bg-blue-400"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering book click
                    alert('Bookmarked');
                    onBookmark(book);
                  } } />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section><section className="mb-6">
        <div className="text-2xl flex font-bold justify-center mb-6">
          Fiction
          <button>
            <TiArrowRight size={40} />
          </button>
        </div>
        <Slider {...settings}>
          {booksData.fiction.map((book) => (
            <div key={book.id} className="p-4">
              <div
                className="shadow-lg rounded-lg bg-white w-44 cursor-pointer"
                onClick={() => handleBookClick(book)}
              >
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-56 object-cover rounded-t-lg" />
                <div className="p-4">
                  <h3 className="text-sm font-bold truncate">{book.title}</h3>
                  <p className="text-xs text-gray-600">{book.author}</p>
                  <CiBookmark
                    className="cursor-pointer dark:bg-blue-400"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering book click
                      alert('Bookmarked');
                      onBookmark(book);
                    } } />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section><section className="mb-6">
        <div className="text-2xl flex font-bold justify-center mb-6">
          Non-Fiction
          <button>
            <TiArrowRight size={40} />
          </button>
        </div>
        <Slider {...settings}>
          {booksData.nonFiction.map((book) => (
            <div key={book.id} className="p-4">
              <div
                className="shadow-lg rounded-lg bg-white w-44 cursor-pointer"
                onClick={() => handleBookClick(book)}
              >
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-56 object-cover rounded-t-lg" />
                <div className="p-4">
                  <h3 className="text-sm font-bold truncate">{book.title}</h3>
                  <p className="text-xs text-gray-600">{book.author}</p>
                  <CiBookmark
                    className="cursor-pointer dark:bg-blue-400"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering book click
                      alert('Bookmarked');
                      onBookmark(book);
                    } } />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section></>
  );
};

export default GenreCarousel;
