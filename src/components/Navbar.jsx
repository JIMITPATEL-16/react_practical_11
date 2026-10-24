import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Helper function to apply active styles based on route
  const getLinkClasses = (path) => {
    const isActive = location.pathname === path;
    return `px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
      isActive
        ? 'bg-blue-600 text-white shadow-sm'
        : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'
    }`;
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-sm font-semibold">
            R
          </span>
          Router<span className="text-blue-600">App</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-2">
          <Link to="/" className={getLinkClasses('/')}>
            Home
          </Link>
          <Link to="/about" className={getLinkClasses('/about')}>
            About
          </Link>
          <Link to="/contact" className={getLinkClasses('/contact')}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;