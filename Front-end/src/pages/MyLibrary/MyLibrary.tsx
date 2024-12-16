import { Link, useNavigate } from "react-router-dom";

const MyLibrary: React.FC<{ books: any[] }> = ({ books }) => {
  const navigate = useNavigate();

  const handleBookClick = (book: any) => {
    navigate(`/genre/book/${book.id}`, { state: book });
  };

  return (
    <div className="pb-4">
      <div className="p-2  min-h-screen">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold">My Library</h2>{" "}
            {/* Add user name here */}
          </div>
          <Link to="/Settings">
            <img
              src="/avatar.svg"
              alt="User Avatar"
              className="w-12 h-12 rounded-full border-"
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="relative mb-10">
          <input
            type="text"
            placeholder="Search for books..."
            className="w-fit  px-4 py-3 rounded-full border border-gray-300 shadow-sm"
          />
          <button className="absolute right-3 top-3 ">
            <i className="fa fa-search"></i> {/* Add search icon here */}
          </button>
          <div>
            <h2 className="text-2xl font-bold mb-4 pt-5">Added books</h2>
          </div>
          <div className=" flex-col gap-3 ">
            {/* Add added books section here */}
            <div className="flex-col  gap-6">
              {books.length > 0 ? (
                books.map((book) => (
                <div
                    key={book.id}
                    className="shadow-lg rounded-lg bg-[#D9D9D9] w-full cursor-pointer flex-col pb-2 hover:-translate-y-2"
                    onClick={() => handleBookClick(book)}
                  >
                    <div className="flex ">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-fit h-20 object-cover rounded-t-lg pl-3 pt-3" />
                    <div className="p-4 flex-col gap-2">
                      <h3 className="text-sm font-bold truncate">
                        {book.title}
                      </h3>
                      <p className="text-xs text-gray-600  ">{book.author}</p>
                      <div className="flex gap-5">
                        <p className="text-xs text-gray-600">pages: {book.pages}</p>
                        <p className="text-xs text-gray-600  ">publisher:{book.publisher}</p>
                        <p className="text-xs">{book.rating}/5</p>
                      </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-600">
                  No books bookmarked yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLibrary;
