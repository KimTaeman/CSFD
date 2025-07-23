import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios';

function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const response = await api.get('/auth/me');
        const user = response.data;

        if (!user.nickname) {
          navigate('/houses');
        } else {
          navigate('/coven');
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
