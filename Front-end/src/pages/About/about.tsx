
import React from "react";
import { useTheme } from "../../components/ThemeContext";

const About: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`p-6 min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-4">
          Welcome to our Book Reading Platform! We are passionate about connecting readers with their next favorite book.
          Our mission is to provide a seamless and enjoyable experience for book lovers of all kinds.
        </p>
        <p className="text-lg mb-4">
          Whether you're searching for bestsellers, exploring new genres, or managing your personal library, our platform
          offers a user-friendly interface and a wide range of features to enhance your reading journey.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-3">Our Features</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Browse books by genre, popularity, or new releases.</li>
          <li>Bookmark your favorite books and manage your library.</li>
          <li>Enjoy a customizable reading experience with dark mode.</li>
          <li>Discover detailed book information and recommendations.</li>
        </ul>
        <p className="text-lg">
          Thank you for choosing our platform. We hope to inspire your love for reading and make every book discovery a
          delightful experience!
        </p>
      </div>
    </div>
  );
};

export default About;