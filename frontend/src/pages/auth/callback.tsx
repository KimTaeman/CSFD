import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios';
import LoadingLayout from '@/components/layout/loading.tsx';

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

  return <LoadingLayout />;
}

export default AuthCallback;
