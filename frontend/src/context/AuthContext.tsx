import api from '@/api/axios';
import { useFetch } from '@/hooks/useFetch';
import type { StudentInfo } from '@/types/type';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createContext, type ReactNode } from 'react';

interface IAuthContext {
  user: StudentInfo;
  isAuthenticated: boolean;
  isLoading: boolean;
  logout: () => void;
  isLoggingOut: boolean;
}

const logoutUser = async () => {
  try {
    const response = await api.post('/auth/logout');

    return response.data;
  } catch (e) {
    console.error(e);
    throw new Error('Logout failed. Please try again.');
  }
};

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useQueryClient();
  const { fetchUserData } = useFetch();

  const {
    data: user,
    isPending,
    isSuccess,
  } = useQuery({
    queryKey: ['authUser'],
    queryFn: fetchUserData,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  const logoutMutation = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ['authUser'] });
    },
  });

  const logout = () => {
    logoutMutation.mutate();
  };

  return (
    <AuthContext
      value={{
        user,
        isAuthenticated: isSuccess,
        isLoading: isPending,
        logout,
        isLoggingOut: logoutMutation.isPending,
      }}
    >
      {children}
    </AuthContext>
  );
};
