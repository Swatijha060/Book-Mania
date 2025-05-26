import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { useParams, useNavigate } from "react-router-dom";
import { useGetBookByIdQuery, useDownloadBookQuery,useGetRecommendationsQuery } from "../redux/api/booksApiSlice";


const BookDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: bookData, isLoading, isError } = useGetBookByIdQuery(id);
  const { data: downloadData } = useDownloadBookQuery(id);
  const { data: recommendations } = useGetRecommendationsQuery({});
  const [isExpanded, setIsExpanded] = useState(false);

  if (isLoading) return <div>Loading book...</div>;
  if (isError || !bookData) return <div>Book not found!</div>;

  const book = bookData.data;
  const formattedRating = book.ratings ? book.ratings.toFixed(1) : "N/A";
  const reviewCount = book.numReviews ?? 0;

  return (
    <div className="flex pt-5">
      <IoIosArrowBack
        className="rounded bg-slate-400"
        onClick={() => navigate(-1)}
      />
      <div className="p-4 rounded-lg shadow-lg mt-8">
        <div className="max-w-4xl mx-auto flex gap-3">
          <img
            src={book.image}
            alt={book.title}
            className="w-fit h-56 object-cover rounded-lg mb-6"
          />
          <div>
            <h1 className="text-3xl mb-4">{book.title}</h1>
            <div className="text-sm text-gray-700 mb-4">by {book.authors_name}</div>
            <div className="flex gap-4">
              <AiFillStar size={16} />
              <span className="ml-2 font-semibold">{formattedRating} stars</span>
              <span className="text-sm ml-4">{reviewCount} reviews</span>
              <a
                href={downloadData?.data?.url}
                className="bg-slate-500 hover:bg-black text-white font-bold py-2 px-4 rounded-lg"
                download
              >
                Download
              </a>
            </div>
            <p className="text-gray-600">
              {isExpanded
                ? book.Description
                : book.Description.length > 60
                ? book.Description.substring(0, 60) + "... "
                : book.Description}
              {book.Description.length > 60 && (
                <span
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-blue-500 cursor-pointer"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </span>
              )}
            </p>
            <div className="grid grid-cols-2">
              <div className="text-gray-600">
                Publisher: <span className="ml-2">{book.publisher.name}</span>
              </div>
              <div className="text-gray-600">
                Pages: <span className="ml-2">{book.pageCount}</span>
              </div>
              <div className="text-gray-600">
                Published: <span className="ml-2">{new Date(book.published_on).toLocaleDateString()}</span>
              </div>
              <div className="text-gray-600">
                Language: <span className="ml-2">{book.language}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-5 pt-5 font-bold md:block sm:hidden">
        <h2 className="text-xl mb-4">Recommended</h2>
        {recommendations?.data?.map((rec: any) => (
          <div
            key={rec._id}
            className="mb-2 cursor-pointer"
            onClick={() => navigate(`/book/${rec._id}`, { state: rec })}
          >
            <img src={rec.image} alt={rec.title} className="w-16 h-24 inline-block mr-2" />
            <span>{rec.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookDetails;