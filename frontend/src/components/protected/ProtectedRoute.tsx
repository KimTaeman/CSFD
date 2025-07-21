import { useAuthContext } from '@/hooks/useAuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingLayout from '../layout/loading';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuthContext();
  const location = useLocation();

  if (isLoading) {
    return <LoadingLayout />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
