import React, { useState } from 'react';
import { TreePine, MapPin, Upload } from 'lucide-react';
import { LocationInput } from '../componets/locationInput';
import { LocationData } from '../types/location';
// import { useAuthStore } from '../stores/authStore';

export const Dashboard: React.FC = () => {
  // const { user } = useAuthStore();
  const [inputMethod, setInputMethod] = useState<'manual' | 'upload' | null>(null);

  const handleLocationSubmit = async (location: LocationData) => {
    try {
      // TODO: Implement API call to save tree location
      console.log('Submitting location:', location);
    } catch (error) {
      console.error('Error submitting location:', error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="bg-gray-50 p-4 rounded-md">
          {/* <h2 className="text-lg font-semibold mb-2">Welcome, {user?.name}!</h2>
          <p className="text-gray-600">You are logged in as: {user?.role}</p> */}
        </div>
      </div>

{/* location input */}
<div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <TreePine className="mx-auto h-16 w-16 text-green-600" />
          <h1 className="mt-4 text-4xl font-bold text-gray-900">Add a New Tree</h1>
          <p className="mt-2 text-lg text-gray-600">
            Help us track and preserve our forest by adding tree locations
          </p>
        </div>

        {!inputMethod ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <button
              onClick={() => setInputMethod('manual')}
              className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <MapPin className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Enter Coordinates</h3>
              <p className="mt-2 text-gray-600 text-center">
                Manually input latitude and longitude coordinates
              </p>
            </button>

            <button
              onClick={() => setInputMethod('upload')}
              className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Upload className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Upload Image</h3>
              <p className="mt-2 text-gray-600 text-center">
                Extract location from image metadata
              </p>
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={() => setInputMethod(null)}
              className="mb-6 text-green-600 hover:text-green-700 flex items-center"
            >
              ← Back to selection
            </button>
            <LocationInput onLocationSubmit={handleLocationSubmit} />
          </div>
        )}
      </div>
    </div>



    </div>
  );
};