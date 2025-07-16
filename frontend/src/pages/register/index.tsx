import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios';
import ProtectedRoute from '@/components/protected/ProtectedRoute';

function RegisterPage() {
  const [nickname, setNickname] = useState('');
  const [instagram, setInstagram] = useState('');
  const [discord, setDiscord] = useState('');
  const [line, setLine] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // TODO: Check if user is already registered (have nickname or not) using Use Context

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nickname) {
      setError('Nickname is a required field.');
      return;
    }
    setError(null);
    setLoading(true);

    try {
      await api.put('/api/auth/complete-registration', {
        nickname,
        instagram,
        discord,
        line,
      });
      navigate('/dashboard');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 font-sans">
        <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Complete Your Profile</h2>
            <p className="mt-2 text-gray-500">
              Choose a unique nickname and add your socials to connect.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div
                className="relative rounded-lg border border-red-400 bg-red-100 px-4 py-3 text-red-700"
                role="alert"
              >
                <span className="block sm:inline">{error}</span>
              </div>
            )}

            <div className="relative">
              <label htmlFor="nickname" className="mb-1 block text-sm font-medium text-gray-700">
                Nickname <span className="text-red-500">*</span>
              </label>
              <input
                id="nickname"
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                required
                className="w-full rounded-md border border-gray-300 py-2 pr-3 pl-10 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                placeholder="YourCoolNickname"
              />
            </div>

            <div className="relative">
              <label htmlFor="instagram" className="mb-1 block text-sm font-medium text-gray-700">
                Instagram Handle (Optional)
              </label>
              <input
                id="instagram"
                type="text"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                className="w-full rounded-md border border-gray-300 py-2 pr-3 pl-10 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                placeholder="@username"
              />
            </div>

            <div className="relative">
              <label htmlFor="discord" className="mb-1 block text-sm font-medium text-gray-700">
                Discord Username (Optional)
              </label>
              <input
                id="discord"
                type="text"
                value={discord}
                onChange={(e) => setDiscord(e.target.value)}
                className="w-full rounded-md border border-gray-300 py-2 pr-3 pl-10 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                placeholder="username#1234"
              />
            </div>

            <div className="relative">
              <label htmlFor="line" className="mb-1 block text-sm font-medium text-gray-700">
                Line ID (Optional)
              </label>
              <input
                id="line"
                type="text"
                value={line}
                onChange={(e) => setLine(e.target.value)}
                className="w-full rounded-md border border-gray-300 py-2 pr-3 pl-10 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                placeholder="yourlineid"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-indigo-400"
              >
                {loading ? 'Saving...' : 'Save and Continue'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default RegisterPage;
