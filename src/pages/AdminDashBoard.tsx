import React from 'react';

export const AdminDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="text-gray-600">This page is only accessible to administrators.</p>
        </div>
      </div>
    </div>
  );
};