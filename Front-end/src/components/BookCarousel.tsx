import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from "../constants/constants";
import { booksData } from "../constants/data";
import { TiArrowRight } from "react-icons/ti";
import { CiBookmark } from "react-icons/ci";

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




const BookCarousel: React.FC = () => {
  
  return (
    
    <>
   
      {/* Popular Books */}
      <section className="mb-6">
        <div className="text-2xl flex font-bold justify-center mb-6">
          Popular Books
          <button>
            <TiArrowRight size={40} />
          </button>
        </div>
        <Slider {...settings}>
          {booksData.popular.map((book, index) => (
            <div key={index} className="p-4">
              <div className="shadow-lg rounded-lg bg-white w-44">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-50 h-56 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-sm font-bold truncate">{book.title}</h3>
                  <p className="text-xs text-gray-600">{book.author}</p>
                  <CiBookmark
                  className={`cursor-pointer fill-black dark:bg-blue-400`}
                    
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Fiction Books */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">Fiction Books</h2>
        <Slider {...settings}>
          {booksData.fiction.map((book, index) => (
            <div key={index} className="p-4">
              <div className="shadow-lg rounded-lg bg-white w-44">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-sm font-bold truncate">{book.title}</h3>
                  <p className="text-xs text-gray-600">{book.author}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Non-Fiction Books */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-6">
          Non-Fiction Books
        </h2>
        <Slider {...settings}>
          {booksData.nonFiction.map((book, index) => (
            <div key={index} className="p-4">
              <div className="shadow-lg rounded-lg bg-white w-44">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-sm font-bold truncate">{book.title}</h3>
                  <p className="text-xs text-gray-600">{book.author}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default BookCarousel;
