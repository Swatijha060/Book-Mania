import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
// import BookCarousel from '../../components/BookCarousel';

const Home: React.FC = () => {
  return (
    <div className="p-2  min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-bold">Hello, User!</h2>{" "}
          {/* Add user name here */}
          <h4 className="text-xl">Which book do you want to read today?</h4>
        </div>
        <img
          src="/avatar.svg"
          alt="User Avatar"
          className="w-12 h-12 rounded-full border-"
        />
      </div>

      {/* Search Bar */}
      <div className="relative mb-10">
        <input
          type="text"
          placeholder="Search for books"
          className="w-full px-4 py-3 rounded-full border border-gray-300 shadow-sm"
        />
        {/* <i>Search</i> Add search icon here */}
        <CiSearch />
      </div>

      {/* Book Categories */}
      <div className="mb-6">
        <nav>
          {/**This will navigate the inner pages from home */}
          <ul className="flex space-x-6 text-lg font-semibold">
            <Link to="/all" className="hover:border-b-2 border-black">All</Link>
            <Link to="eBooks" className="hover:border-b-2 border-black">eBooks</Link>
            <Link to="/bestseller" className="hover:border-b-2 border-black">Bestsellers</Link>
            <Link to="/new" className="hover:border-b-2 border-black">New</Link>
            <Link to="/textbooks" className="hover:border-b-2 border-black">Textbooks</Link>
          </ul>
        </nav>
      </div>

      
    </div>
  );
};

export default Home;
