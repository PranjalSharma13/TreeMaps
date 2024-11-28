import React from 'react';
import { GlobeView } from '../componets/map/GlobeView';

export const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Welcome to Forest App
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover the beauty of nature and explore our forest collection.
          Login to access exclusive features and content.
        </p>
      </div>
      <GlobeView/>
    </div>
  );
};