import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Books data
const booksData = {
  popular: [
    {
      title: "Adventures of Sherlock Holmes",
      author: "Arthur Conan Doyle",
      cover: "/Book_Images/The Adventure of Sherlock Holmes.png",
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      cover: "/Book_Images/The Alchemist.png",
    },
    {
      title: "Frankenstein",
      author: "Mary Shelley",
      cover: "/Book_Images/Frankenstein.png",
    },
    {
      title: "The Color Purple",
      author: "Alice Walker",
      cover: "/Book_Images/The Color Purple.png",
    },
    {
      title: "All Quiet on the Western Front",
      author: "Erich Maria Remarque",
      cover: "/Book_Images/western-front.png",
    },
  ],
  fiction: [
    { title: "1984", author: "George Orwell", cover: "/Book_Images/1984.png" },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      cover: "/Book_Images/Mocking-bird.png",
    },
    {
      title: "All the light we cannot see",
      author: "Anthony Doerr",
      cover: "/Book_Images/All the light we cannot see.png",
    },
    {
      title: "Animal Farm",
      author: "George Orwell",
      cover: "/Book_Images/Animal Farm.png",
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      cover: "/Book_Images/Handmaid tail.png",
    },
  ],
  nonFiction: [
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      cover: "/Book_Images/Sapiens.png",
    },
    {
      title: "Educated",
      author: "Tara Westover",
      cover: "/Book_Images/Educated.png",
    },
    {
      title: "Becoming",
      author: "Michelle Obama",
      cover: "/Book_Images/Becoming.png",
    },
    {
      title: "Eat that Frog",
      author: "Brian Tracy",
      cover: "/Book_Images/Eat that Frog.png",
    },
    {
      title: "How to win Friends and Influence people",
      author: "Dale Carnegie",
      cover: "/Book_Images/Influence-people.png",
    },
  ],
};

// Custom Next Arrow
const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      style={{
        display: "block",
        position: "absolute",
        top: "50%",
        right: "10px",
        zIndex: 2,
        width: "20px",
        height: "20px",
        border: "solid #333",
        borderWidth: "0 3px 3px 0",
        transform: "rotate(-45deg) translateY(-50%)",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
};

// Custom Prev Arrow
const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      style={{
        display: "block",
        position: "absolute",
        top: "35%",
        left: "5px",
        zIndex: 2,
        width: "20px",
        height: "20px",
        border: "solid #333",
        borderWidth: "0 3px 3px 0",
        transform: "rotate(135deg) translateY(-50%)",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
};

// Carousel settings
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
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
    <div className="w-full max-w-7xl mx-auto mt-10 cursor-pointer">
      {/* Popular Books */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-6">Popular Books</h2>
        <Slider {...settings}>
          {booksData.popular.map((book, index) => (
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
    </div>
  );
};

export default BookCarousel;
