import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios';
import type { StudentInfo } from '@/types/type';

// DashboardPage Example
// Replace with actual code

function DashboardPage() {
  const [user, setUser] = useState<StudentInfo | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get('/api/auth/me');
        setUser(response.data);
      } catch (error) {
        navigate('/');
      }
    };
    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await api.post('/api/auth/logout');
      navigate('/');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  if (!user) {
    return <div>Loading dashboard...</div>;
  }

  console.log('user', user);
  return (
    <div>
      <h1>Welcome to your Dashboard, {user.nickname}!</h1>
      <p>Display Name: {user.displayName}</p>
      <p>Email: {user.email}</p>
      <p>Nickname: {user.nickname || 'No nickname'}</p>
      <p>Lives: {user.lives ?? 3}</p>
      <p>House: {user.house || 'No house assigned'}</p>
      <p>
        {user.displayName} ({user.nickname || 'No nickname'})
      </p>
      <p>Social Tags</p>
      {user.instagram && <span> - Instagram: {user.instagram}</span>}
      {user.discord && <span> - Discord: {user.discord}</span>}
      {user.line && <span> - Line: {user.line}</span>}
      <p>
        Role: <strong>{user.role}</strong> ({user.isSenior ? 'Senior (CS25)' : 'Junior (CS26)'})
      </p>

      {user.isSenior && user.mentees && (
        <div>
          <h2>Your Juniors (Mentees):</h2>
          <ul>
            {user.mentees.length === 0 && <li>No mentees assigned.</li>}
            {user.mentees.map((junior) => (
              <>
                <li key={junior.id}>
                  {junior.displayName} ({junior.nickname || 'No nickname'})
                </li>
                <p>Social Tags</p>
                <div>
                  {junior.instagram && <span> - Instagram: {junior.instagram}</span>}
                  {junior.discord && <span> - Discord: {junior.discord}</span>}
                  {junior.line && <span> - Line: {junior.line}</span>}
                </div>
              </>
            ))}
          </ul>
        </div>
      )}

      {!user.isSenior && user.mentor && (
        <div>
          <h2>Your Mentor:</h2>
          <p>
            {user.mentor.senior.displayName} ({user.mentor.senior.nickname || 'No nickname'})
          </p>
          <p>Social Tags</p>
          {user.mentor.senior.instagram && (
            <span> - Instagram: {user.mentor.senior.instagram}</span>
          )}
          {user.mentor.senior.discord && <span> - Discord: {user.mentor.senior.discord}</span>}
          {user.mentor.senior.line && <span> - Line: {user.mentor.senior.line}</span>}
        </div>
      )}

      {user.hints && (
        <div>
          <h2>Hints:</h2>
          <ul>
            {user.hints.length === 0 && <li>No hints available.</li>}
            {user.hints.map((hint) => (
              <li key={hint.id}>
                <strong>Hint {hint.order}:</strong> {hint.content} (Reveals:{' '}
                {new Date(hint.revealDate).toLocaleString()})
              </li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default DashboardPage;
