// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Slider from "react-slick";
// import { TiArrowRight } from "react-icons/ti";
// import { CiBookmark } from "react-icons/ci";


// interface Book {
//   id: number;
//   cover: string;
//   title: string;
//   author: string;
//   description: string;
//   rating: number;
//   pages: number;
//   publisher?: string;
//   published?: string;
//   language?: string;
// }

// interface BookCarouselProps {
//   onBookmark: (book: Book) => void;
//   genre?: string;
// }
// //custom next arrow
// const CustomNextArrow = (props: any) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         right: "15px",
//         top: "50%",
//         transform: "translateY(-50%)",
//       }}
//       onClick={onClick}
//     >
//       <TiArrowRight size={30} color="black" />
//     </div>
//   );
// };

// // Custom Prev Arrow
// const CustomPrevArrow = (props: any) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         left: "10px",
//         zIndex: 10,
//       }}
//       onClick={onClick}
//     ></div>
//   );
// };

// // Carousel settings
// const settings = {
//   dots: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   nextArrow: <CustomNextArrow />, // Custom Next Arrow
//   prevArrow: <CustomPrevArrow />, // Custom Prev Arrow
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// };

// const GenreCarousel: React.FC<BookCarouselProps> = ({ onBookmark, genre }) => {
//   const navigate = useNavigate();

//   const handleBookClick = (book: Book) => {
//     navigate(`/genre/book/${book.id}`, { state: book });
//   };

//   const getBooksForGenre = (genre: string) => {
//     switch (genre) {
//       case "Popular":
//         return booksData.popular;
//       case "Fiction":
//         return booksData.fiction;
//       case "Non-Fiction":
//         return booksData.nonFiction;
//       default:
//         return [];
//     }
//   };

//   const booksForCurrentGenre = getBooksForGenre(genre || "Popular");

//   return (
//     <section className="mb-6">
//       <div className="text-2xl flex items-center font-bold justify-between mb-6">
//         <span>{genre}</span>
//         <button className="flex items-center space-x-2 text-blue-500 hover:text-blue-700">
//           <span>More</span>
//           <TiArrowRight size={30} />
//         </button>
//       </div>
//       <Slider {...settings}>
//         {booksForCurrentGenre.map((book: any) => (
//           <div key={book.id} className="p-4">
//             <div
//               className="shadow-lg rounded-lg bg-white w-44 cursor-pointer"
//               onClick={() => handleBookClick(book)}
//             >
//               <img
//                 src={book.cover}
//                 alt={book.title}
//                 className="w-full h-56 object-cover rounded-t-lg"
//               />
//               <div className="p-4">
//                 <h3 className="text-sm font-bold truncate">{book.title}</h3>
//                 <p className="text-xs text-gray-600">{book.author}</p>
//                 <CiBookmark
//                   className="cursor-pointer"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     alert("Bookmarked");
//                     onBookmark(book);
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export default GenreCarousel;
