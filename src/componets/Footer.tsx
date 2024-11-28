import React from 'react';
import { TreePine } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <TreePine className="h-6 w-6" />
              <span className="font-bold text-xl">Forest Explorer</span>
            </div>
            <p className="mt-2 text-green-200">
              Discover and explore the world's most remarkable trees.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-green-200 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/login" className="text-green-200 hover:text-white">
                  Login
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact</h3>
            <p className="text-green-200">
              Email: info@forestexplorer.com<br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center text-green-200">
          <p>&copy; {new Date().getFullYear()} Forest Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};