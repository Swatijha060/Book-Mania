import React from "react";
import { useTheme } from "../ThemeContext";
import { Bar } from "react-chartjs-2";
import BookForm, { BookForm as BookFormType } from "./BookForm";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const AdminDashboard: React.FC = () => {
  const { darkMode } = useTheme();

  // Chart Data
  const chartData = {
    labels: ["Fiction", "Non-fiction", "Romance", "Sci-Fi", "Fantasy"],
    datasets: [
      {
        label: "Books",
        data: [12, 19, 3, 5, 2],
        backgroundColor: darkMode
          ? "rgba(255, 99, 132, 0.2)"
          : "rgba(75, 192, 192, 0.2)",
        borderColor: darkMode
          ? "rgba(255, 99, 132, 1)"
          : "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true },
    },
  };

  // Handle book form submission
  const handleFormSubmit = (formData: BookFormType) => {
    console.log("New Book Submitted:", formData);
    // Add additional logic for handling form submission, e.g., sending data to an API
  };

  return (
    <div
      className={`min-h-screen p-8 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } flex flex-col gap-6`}
    >
      {/* Header */}
      <header
        className={`p-4 rounded-lg shadow-md ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      </header>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          className={`p-6 rounded-lg shadow ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-lg font-medium">Total Users</h2>
          <p className="text-3xl font-bold mt-2">--</p>
          <p className="text-sm text-gray-500">Fetching Data...</p>
        </div>
        <div
          className={`p-6 rounded-lg shadow ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-lg font-medium">Total Books</h2>
          <p className="text-3xl font-bold mt-2">--</p>
          <p className="text-sm text-gray-500">Fetching Data...</p>
        </div>
        <div
          className={`p-6 rounded-lg shadow ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-lg font-medium">Book of the Month</h2>
          <p className="mt-2 font-bold">The Catcher in the Rye</p>
        </div>
      </div>

      {/* Chart Section */}
      <div
        className={`p-6 rounded-lg shadow ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2 className="text-xl font-bold mb-4">Book Distribution</h2>
        <div className="relative w-full h-64">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* Add Book Form Section */}
      <div
        className={`p-6 rounded-lg shadow ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2 className="text-xl font-bold mb-4">Add a New Book</h2>
        <BookForm onSubmit={handleFormSubmit} darkMode={darkMode} />
      </div>
    </div>
  );
};

export default AdminDashboard;
