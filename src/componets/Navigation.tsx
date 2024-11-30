import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              Forest App
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-white hover:bg-green-500 px-3 py-2 rounded-md"
              >
                Home
              </Link>
              <Link
                to="/login"
                className="text-white hover:bg-green-500 px-3 py-2 rounded-md"
              >
                Login
              </Link>
              <Link
                to="/dashboard"
                className="text-white hover:bg-green-500 px-3 py-2 rounded-md"
              >
                DashBoard
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="text-white hover:bg-green-500 block px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/login"
                className="text-white hover:bg-green-500 block px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};