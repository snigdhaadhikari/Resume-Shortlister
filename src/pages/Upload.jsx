// src/pages/Upload.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.type === "application/pdf") {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Only PDF files are allowed.");
    }
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (!file) {
    setError("Please upload a valid PDF resume.");
    return;
  }

  if (!jobDescription.trim()) {
    setError("Please enter a job description.");
    return;
  }

  
  console.log("Uploading:", file.name);
  console.log("Job Description:", jobDescription);

  navigate("/thankyou");
};


  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          Upload Resume (PDF Only)
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0 file:text-sm file:font-semibold
              file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}

          <textarea
                className="w-full h-40 p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter job description here..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Upload
          </button>
        </form>
        {file && (
          <p className="text-green-600 text-sm mt-3">Selected File: {file.name}</p>
        )}
      </div>
    </div>
  );
};

export default Upload;
