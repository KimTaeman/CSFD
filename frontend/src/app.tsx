import routes from '~react-pages';
import { Suspense, useEffect } from 'react';
import { useRoutes, useNavigate, useLocation } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import LoadingLayout from '@/components/layout/loading';

export const App = () => {
  const { isAuthenticated } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated && location.pathname !== '/' && !location.pathname.startsWith('/auth')) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, location.pathname, navigate]);

  const pageContent = useRoutes(routes);

  return <Suspense fallback={<LoadingLayout />}>{pageContent}</Suspense>;
};
