import React from 'react'
import { FaHome, FaInfoCircle, FaBook, FaCog } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SideBar:  React.FC = () => {

  return (
    <div className="bg-black text-white w-1/5 min-w-[200px] p-6 flex flex-col">
      <h1 className="text-3xl font-bold mb-10">BookMania</h1>
      <nav>
        <Link to="/home" className="flex items-center mb-6 text-lg hover:text-gray-400">
          <FaHome className="mr-4" /> Home
        </Link>
        <Link to="/about" className="flex items-center mb-6 text-lg hover:text-gray-400">
          <FaInfoCircle className="mr-4" /> About Us
        </Link>
        <Link to="/genre" className="flex items-center mb-6 text-lg hover:text-gray-400">
          <FaBook className="mr-4" /> Genre
        </Link>
        <Link to="/settings" className="flex items-center text-lg hover:text-gray-400">
          <FaCog className="mr-4" /> Settings
        </Link>
      </nav>
    </div>
  )
}

export default SideBar
