import api from '@/api/axios';
import { useFetch } from '@/hooks/useFetch';
import type { StudentInfo } from '@/types/type';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createContext, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface IAuthContext {
  user: StudentInfo;
  students: StudentInfo[];
  isAuthenticated: boolean;
  isLoading: boolean;
  isFetchingStudents: boolean;
  updateGuessStatus: () => void;
  logout: () => void;
  isLoggingOut: boolean;
}

const guessCorrect = async (id: number) => {
  const response = await api.get(`/students/${id}/isCorrect`);
  return response.data.info;
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
  const { fetchUserData, fetchStudents } = useFetch();

  const isAuthenticated = !!queryClient.getQueryData(['authUser']);

  const { data: user, isPending } = useQuery({
    queryKey: ['authUser'],
    queryFn: fetchUserData,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  const { data: students, isPending: isFetchingStudents } = useQuery({
    queryKey: ['students'],
    queryFn: fetchStudents,
    staleTime: 5 * 60 * 1000,
    enabled: isAuthenticated,
  });

  const guessMutation = useMutation({
    mutationFn: guessCorrect,
    onSuccess: (guessCheck) => {
      const oldData = queryClient.getQueryData(['authUser']);
      if (oldData) {
        queryClient.setQueryData(['authUser'], {
          ...oldData,
          guessCheck,
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
      navigate(0);
    },
  });

  const logout = () => {
    logoutMutation.mutate();
  };

  return (
    <AuthContext
      value={{
        user,
        students,
        isAuthenticated,
        isLoading: isPending,
        isFetchingStudents,
        updateGuessStatus,
        logout,
        isLoggingOut: logoutMutation.isPending,
      }}
    >
      {children}
    </AuthContext>
  );
};
