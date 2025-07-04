import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios';

function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const response = await api.get('/api/auth/me');
        const user = response.data;
        // TODO: get email from user and validate with the excel file and add student id maybe
        console.log(user);

        if (!user.nickname) {
          navigate('/register');
        } else {
          navigate('/dashboard');
        }
      } catch (error) {
        console.error('Authentication check failed', error);
        navigate('/');
      }
    };

    checkUserStatus();
  }, [navigate]);

  // TODO: add loading circle
  return <div>Loading... Please wait.</div>;
}

export default AuthCallback;
