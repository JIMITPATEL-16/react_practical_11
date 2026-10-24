import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 text-center">
      <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
        Welcome
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
        Welcome to the Home Page
      </h1>
      <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
        This single-page application navigates dynamically using client-side routing.
        No page reloads, fast transitions, and seamless user experience.
      </p>

      <div className="flex justify-center gap-4">
        <Link
          to="/about"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
        >
          Learn More About Us
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 bg-white text-slate-700 font-medium rounded-lg border border-slate-300 hover:bg-slate-50 transition"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default Home;