import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useParams } from "react-router-dom";

// interface Books {
//   id: number;
//   cover: string;
//   title: string;
//   author: string;
//   description: string;
//   rating: number;
//   reviewCount: number;
// }

const BookDetails: React.FC = () => {
  // const { bookID } = useParams(); // Assuming you're using dynamic routing
  const location = useLocation();
  const Books = location.state; // Book data passed via state
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);// for the readmore button
  };
  

  if (!Books) {
    return <div>Book not found!</div>;
  }
  const formattedRating = Books.rating ? Books.rating.toFixed(1) : 'N/A';
  const reviewCount = Books.reviewCount ?? 0; // Fallback to 0 if undefined

  return (
    <div className="flex pt-5 ">
      <IoIosArrowBack
        className="rounded bg-slate-400"
        onClick={() => {
          window.history.back();
        }}
      />
      <div className="p-4  rounded-lg shadow-lg mt-8">
        <div className="max-w-4xl mx-auto flex gap-3">
          <img
            src={Books.cover}
            alt={Books.title}
            className="w-fit h-56 object-cover rounded-lg mb-6"
          />
          <div>
            <h1 className="text-3xl  mb-4">{Books.title}</h1>
            <div className="text-sm text-gray-700 mb-4">by {Books.author}</div>
            <div className="flex gap-4">
              <AiFillStar size={16}/>
              <span className="ml-2 font-semibold">{formattedRating} stars</span>
              <span className="text-sm ml-4">{reviewCount} reviews</span>
              <button className="bg-slate-500 hover:bg-black text-white font-bold py-2 px-4 rounded-lg">Download</button>
            </div>
            <p className="text-gray-600">
              {isExpanded
                ? Books.description
                : Books.description.length > 60
                  ? Books.description.substring(0, 60) + "... "
                  : Books.description}
              {Books.description.length > 60 && (
                <span
                  onClick={toggleDescription}
                  className="text-blue-500 cursor-pointer"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </span>
              )}
            </p>
            <div className="grid grid-cols-2">
              <div className="text-gray-600">Publisher:
                <span className="ml-2">{Books.publisher}</span>
              </div>
              <div className="text-gray-600">Page
                <span className="ml-2">{Books.pages}</span>
              </div>
              <div className="text-gray-600">Published:
                <span className="ml-2">{Books.published}</span>
              </div>
              <div className="text-gray-600">Language:
                <span className="ml-2 ">{Books.language}</span>
              </div>


            </div>
          </div>
         
        </div>
      </div>
      <div className="pl-5 pt-5 font-bold md:block sm:hidden">Recommemded</div>
    </div>
  );
};

export default BookDetails;
