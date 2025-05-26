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
  image: File | null;
  pdf: File | null;
  language: string;
  publisher: string;
  isbn: string;
  pageCount: string;
}

const BookForm: React.FC<BookFormProps> = ({ onSubmit, darkMode }) => {
  const [formData, setFormData] = useState<BookForm>({
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
    description: "",
    image: null,
    pdf: null,
    language: "",
    publisher: "",
    isbn: "",
    pageCount: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: files ? files[0] : null,
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
      image: null,
      pdf: null,
      language: "",
      publisher: "",
      isbn: "",
      pageCount: "",
    });
  };

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title" className="block font-medium">Book Title</label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={handleChange}
          className={`w-full p-2 border rounded ${
            darkMode ? "border-gray-600 bg-gray-900" : "border-gray-300"
          }`}
          placeholder="Enter book title"
          required
        />
      </div>
      <div>
        <label htmlFor="author" className="block font-medium">Author</label>
        <input
          type="text"
          id="author"
          value={formData.author}
          onChange={handleChange}
          className={`w-full p-2 border rounded ${
            darkMode ? "border-gray-600 bg-gray-900" : "border-gray-300"
          }`}
          placeholder="Enter author's name"
          required
        />
      </div>
      <div>
        <label htmlFor="genre" className="block font-medium">Genre</label>
        <input
          type="text"
          id="genre"
          value={formData.genre}
          onChange={handleChange}
          className={`w-full p-2 border rounded ${
            darkMode ? "border-gray-600 bg-gray-900" : "border-gray-300"
          }`}
          placeholder="Enter genre ID"
          required
        />
      </div>
      <div>
        <label htmlFor="publicationDate" className="block font-medium">Publication Date</label>
        <input
          type="date"
          id="publicationDate"
          value={formData.publicationDate}
          onChange={handleChange}
          className={`w-full p-2 border rounded ${
            darkMode ? "border-gray-600 bg-gray-900" : "border-gray-300"
          }`}
          required
        />
      </div>
      <div>
        <label htmlFor="image" className="block font-medium">Cover Image</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleFileChange}
          className={`w-full p-2 border rounded ${
            darkMode ? "border-gray-600 bg-gray-900" : "border-gray-300"
          }`}
          required
        />
      </div>
      <div>
        <label htmlFor="pdf" className="block font-medium">PDF File</label>
        <input
          type="file"
          id="pdf"
          accept="application/pdf"
          onChange={handleFileChange}
          className={`w-full p-2 border rounded ${
            darkMode ? "border-gray-600 bg-gray-900" : "border-gray-300"
          }`}
          required
        />
      </div>
      <div>
        <label htmlFor="language" className="block font-medium">Language</label>
        <input
          type="text"
          id="language"
          value={formData.language}
          onChange={handleChange}
          className={`w-full p-2 border rounded ${
            darkMode ? "border-gray-600 bg-gray-900" : "border-gray-300"
          }`}
          placeholder="Enter language"
          required
        />
      </div>
      <div>
        <label htmlFor="publisher" className="block font-medium">Publisher</label>
        <input
          type="text"
          id="publisher"
          value={formData.publisher}
          onChange={handleChange}
          className={`w-full p-2 border rounded ${
            darkMode ? "border-gray-600 bg-gray-900" : "border-gray-300"
          }`}
          placeholder="Enter publisher ID"
          required
        />
      </div>
      <div>
        <label htmlFor="isbn" className="block font-medium">ISBN</label>
        <input
          type="text"
          id="isbn"
          value={formData.isbn}
          onChange={handleChange}
          className={`w-full p-2 border rounded ${
            darkMode ? "border-gray-600 bg-gray-900" : "border-gray-300"
          }`}
          placeholder="Enter ISBN"
          required
        />
      </div>
      <div>
        <label htmlFor="pageCount" className="block font-medium">Page Count</label>
        <input
          type="number"
          id="pageCount"
          value={formData.pageCount}
          onChange={handleChange}
          className={`w-full p-2 border rounded ${
            darkMode ? "border-gray-600 bg-gray-900" : "border-gray-300"
          }`}
          placeholder="Enter page count"
          required
        />
      </div>
      <div className="col-span-1 md:col-span-2">
        <label htmlFor="description" className="block font-medium">Description</label>
        <textarea
          id="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className={`w-full p-2 border rounded ${
            darkMode ? "border-gray-600 bg-gray-900" : "border-gray-300"
          }`}
          placeholder="Enter a brief description of the book"
          required
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