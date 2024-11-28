import React from 'react';
import { useAuthStore } from '../stores/authStore';

export const Dashboard: React.FC = () => {
  const { user } = useAuthStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="bg-gray-50 p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-2">Welcome, {user?.name}!</h2>
          <p className="text-gray-600">You are logged in as: {user?.role}</p>
        </div>
      </div>
    </div>
  );
};