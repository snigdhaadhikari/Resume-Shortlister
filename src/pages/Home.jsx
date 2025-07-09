// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          AI-Powered Resume Shortlister
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl">
          Upload resumes and a job description to get instant shortlisting powered by AI.
        </p>
        <button
          onClick={() => navigate("/upload")}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
