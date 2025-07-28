import routes from '~react-pages';
import { Suspense, useEffect } from 'react';
import { useRoutes, useNavigate, useLocation } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import LoadingLayout from '@/components/layout/loading';

export const App = () => {
  const { isAuthenticated, isLoading } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isLoading) return;

    if (!isAuthenticated && location.pathname !== '/' && !location.pathname.startsWith('/auth')) {
      navigate('/', { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, location.pathname, isLoading]);

  const pageContent = useRoutes(routes);

  return <Suspense fallback={<LoadingLayout />}>{pageContent}</Suspense>;
};
