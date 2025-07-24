import api from '@/api/axios';
import { useFetch } from '@/hooks/useFetch';
import type { StudentInfo } from '@/types/type';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createContext, type ReactNode } from 'react';
import {useNavigate} from "react-router-dom";

interface IAuthContext {
  user: StudentInfo;
  isAuthenticated: boolean;
  isLoading: boolean;
  updateGuessStatus: () => void;
  logout: () => void;
  isLoggingOut: boolean;
}

const guessCorrect = async (id: number) => {
  const response = await api.get(`/students/${id}/isCorrect`);
  return response.data.info.isFound;
};

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
  const navigate = useNavigate();
  const { fetchUserData } = useFetch();

  const isAuthenticated = !!queryClient.getQueryData(['authUser']);

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

  const guessMutation = useMutation({
    mutationFn: guessCorrect,
    onSuccess: (isFound) => {
      const oldData = queryClient.getQueryData(['authUser']);
      if (oldData) {
        queryClient.setQueryData(['authUser'], {
          ...oldData,
          isFound,
        });
      }
    },
  });

  const updateGuessStatus = () => {
    if (user?.id) {
      guessMutation.mutate(user.id);
    }
  };

  const logoutMutation = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.setQueryData(['authUser'], null);
      navigate('/');
    },
  });

  const logout = () => {
    logoutMutation.mutate();
  };

  return (
    <AuthContext
      value={{
        user,
        isAuthenticated,
        isLoading: isPending,
        updateGuessStatus,
        logout,
        isLoggingOut: logoutMutation.isPending,
      }}
    >
      {children}
    </AuthContext>
  );
};
