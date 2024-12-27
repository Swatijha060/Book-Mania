import React, { useState } from "react";

interface BookFormProps {
  onSubmit: (formData: BookForm) => void;
  darkMode: boolean;
}

export interface BookForm {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  description: string;
}

const BookForm: React.FC<BookFormProps> = ({ onSubmit, darkMode }) => {
  const [formData, setFormData] = useState<BookForm>({
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
    description: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
    setFormData({
      title: "",
      author: "",
      genre: "",
      publicationDate: "",
      description: "",
    });
  };

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="title" className="block font-medium">
          Book Title
        </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={handleChange}
          className={`w-full p-2 border rounded ${
            darkMode ? "border-gray-600 bg-gray-900" : "border-gray-300"
          }`}
          placeholder="Enter book title"
        />
      </div>
      <div>
        <label htmlFor="author" className="block font-medium">
          Author
        </label>
        <input
          type="text"
          id="author"
          value={formData.author}
          onChange={handleChange}
          className={`w-full p-2 border rounded ${
            darkMode ? "border-gray-600 bg-gray-900" : "border-gray-300"
          }`}
          placeholder="Enter author's name"
        />
      </div>
      <div>
        <label htmlFor="genre" className="block font-medium">
          Genre
        </label>
        <input
          type="text"
          id="genre"
          value={formData.genre}
          onChange={handleChange}
          className={`w-full p-2 border rounded ${
            darkMode ? "border-gray-600 bg-gray-900" : "border-gray-300"
          }`}
          placeholder="Enter genre"
        />
      </div>
      <div>
        <label htmlFor="publicationDate" className="block font-medium">
          Publication Date
        </label>
        <input
          type="date"
          id="publicationDate"
          value={formData.publicationDate}
          onChange={handleChange}
          className={`w-full p-2 border rounded ${
            darkMode ? "border-gray-600 bg-gray-900" : "border-gray-300"
          }`}
        />
      </div>
      <div className="col-span-1 md:col-span-2">
        <label htmlFor="description" className="block font-medium">
          Description
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className={`w-full p-2 border rounded ${
            darkMode ? "border-gray-600 bg-gray-900" : "border-gray-300"
          }`}
          placeholder="Enter a brief description of the book"
        ></textarea>
      </div>
      <div className="col-span-1 md:col-span-2 flex justify-end">
        <button
          type="submit"
          className={`px-6 py-2 rounded ${
            darkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500"
          } text-white`}
        >
          Add Book
        </button>
      </div>
    </form>
  );
};

export default BookForm;
