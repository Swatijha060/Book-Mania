import {  useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

import { useTheme } from "../../components/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { setSearchFilter } from "../../redux/features/books/booksSlice";


const MyLibrary: React.FC = () => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { bookmarkedBooks } = useSelector((state: any) => state.books);

  const handleBookClick = (book: any) => {
    navigate(`/book/${book.id}`, { state: book });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchFilter(e.target.value));
  };

  return (
    <div className="pb-4">
      <div className="p-2 min-h-screen">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold">My Library</h2>
          </div>
        </div>
        <div className="relative mb-10">
          <input
            type="text"
            placeholder="Search for books..."
            onChange={handleSearch}
            className={`w-4/12 px-14 py-3 border rounded-full shadow-md focus:outline-none focus:ring-2 ${
              darkMode
                ? "bg-gray-700 text-white border-gray-600 focus:ring-gray-400"
                : "bg-gray-100 text-gray-700 border-gray-300 focus:ring-blue-400"
            }`}
          />
          <CiSearch
            className={`absolute left-2 top-6 transform -translate-y-1/2 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
            size={24}
          />
          <div>
            <h2 className="text-2xl font-bold mb-4 pt-5">Added Books</h2>
          </div>
          <div className="flex-col gap-3">
            <div className="flex-col gap-6">
              {bookmarkedBooks.length > 0 ? (
                bookmarkedBooks.map((book: any) => (
                  <div
                    key={book.id}
                    className="shadow-lg rounded-lg bg-[#D9D9D9] w-full cursor-pointer flex-col pb-2 hover:-translate-y-2"
                    onClick={() => handleBookClick(book)}
                  >
                    <div className="flex">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-fit h-20 object-cover rounded-t-lg pl-3 pt-3"
                      />
                      <div className="p-4 flex-col gap-2">
                        <h3 className="text-sm font-bold truncate">{book.title}</h3>
                        <p className="text-xs text-gray-600">{book.authors_name}</p>
                        <div className="flex gap-5">
                          <p className="text-xs text-gray-600">Pages: {book.pageCount}</p>
                          <p className="text-xs text-gray-600">Publisher: {book.publisher}</p>
                          <p className="text-xs">{book.ratings}/5</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-600">No books bookmarked yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLibrary;