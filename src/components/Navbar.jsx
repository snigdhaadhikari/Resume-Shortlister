// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <Link to = "/" className="text-2xl font-bold text-blue-700">ShortlisterAI</Link>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/upload" className="text-gray-700 hover:text-blue-600">Upload</Link>
      </div>
    </nav>
  );
};

export default Navbar;
