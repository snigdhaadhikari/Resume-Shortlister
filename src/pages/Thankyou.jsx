import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 text-center px-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Thank You!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Your resume and job description have been successfully uploaded. Our AI is processing it and will provide results shortly.
      </p>
      <Link to="/" className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYou;
