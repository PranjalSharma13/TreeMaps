import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, MapPin } from 'lucide-react';
import { extractImageLocation } from '../utils/ImageUtils';
import { LocationData } from '../types/location';

interface LocationInputProps {
  onLocationSubmit: (location: LocationData) => void;
  inputMethod: 'manual' | 'upload';
}

export const LocationInput: React.FC<LocationInputProps> = ({ onLocationSubmit, inputMethod }) => {
  const [location, setLocation] = useState<LocationData>({
    latitude: '',
    longitude: '',
    message: '',
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];
      setError(null);
      if (file) {
        try {
          const locationData = await extractImageLocation(file);
          if (locationData) {
            setLocation(prev => ({
              ...prev,
              latitude: locationData.latitude,
              longitude: locationData.longitude
            }));
            setImagePreview(URL.createObjectURL(file));
          } else {
            setError('No location data found in image. Please try another image or enter coordinates manually.');
          }
        } catch (error) {
          console.error('Error extracting location:', error);
          setError('Failed to extract location data from image.');
        }
      }
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLocationSubmit(location);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-green-800">
        {inputMethod === 'upload' ? 'Upload Tree Image' : 'Enter Tree Location'}
      </h2>
      
      {inputMethod === 'upload' && (
        <>
          <div {...getRootProps()} className="border-2 border-dashed border-green-300 rounded-lg p-8 mb-6 text-center cursor-pointer hover:border-green-500 transition-colors">
            <input {...getInputProps()} />
            <Upload className="mx-auto h-12 w-12 text-green-500 mb-4" />
            <p className="text-gray-600">Drag & drop an image here, or click to select</p>
            <p className="text-sm text-gray-500 mt-2">Supported formats: JPEG, PNG</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          {imagePreview && (
            <div className="mb-6">
              <img src={imagePreview} alt="Preview" className="max-h-48 mx-auto rounded-lg" />
            </div>
          )}
        </>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {inputMethod === 'manual' && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Latitude
              </label>
              <input
                type="text"
                value={location.latitude}
                onChange={(e) => setLocation(prev => ({ ...prev, latitude: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="Enter latitude"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Longitude
              </label>
              <input
                type="text"
                value={location.longitude}
                onChange={(e) => setLocation(prev => ({ ...prev, longitude: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="Enter longitude"
              />
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message about this tree
          </label>
          <textarea
            value={location.message}
            onChange={(e) => setLocation(prev => ({ ...prev, message: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            rows={3}
            placeholder="Share something about this tree..."
          />
        </div>

        <button
          type="submit"
          disabled={!location.message || (!location.latitude && !location.longitude)}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <MapPin className="inline-block mr-2 h-5 w-5" />
          Save Tree Location
        </button>
      </form>
    </div>
  );
};