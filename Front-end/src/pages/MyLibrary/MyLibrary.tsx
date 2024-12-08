const MyLibrary = () => {
  return (
    <div className="pb-4">
      <div className="p-2  min-h-screen">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold">My Library</h2>{" "}
            {/* Add user name here */}
          </div>
          <img
            src="/avatar.png"
            alt="User Avatar"
            className="w-12 h-12 rounded-full border-"
          />
        </div>

        {/* Search Bar */}
        <div className="relative mb-10">
          <input
            type="text"
            placeholder="Search for books..."
            className="w-799  px-4 py-3 rounded-full border border-gray-300 shadow-sm"
          />
          <button className="absolute right-3 top-3 ">
            <i className="fa fa-search"></i> {/* Add search icon here */}
          </button>
          <div>
            <h2 className="text-2xl font-bold mb-4">Added books</h2>
          </div>
          <div className="bg-[#D9D9D9] ">
            {/* Add added books section here */}
            <div>
              <div className="flex flex-wrap">
                <div className="w-1/2 p-4 mb-4">
                  <img
                    src="/book1.jpg"
                    alt="Book 1"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLibrary;
