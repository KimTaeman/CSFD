import { useFetch } from '@/hooks/useFetch';
import type { StudentInfo } from '@/types/type';
import { createContext, useEffect, useState, type ReactNode } from 'react';

interface IDataContext {
  userData: StudentInfo | null;
  students: StudentInfo[] | null;
  setUserData: React.Dispatch<React.SetStateAction<StudentInfo | null>>;
}

export const DataContext = createContext<IDataContext | null>(null);

export const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<StudentInfo | null>(null);
  const { fetchUserData, fetchStudents } = useFetch();
  const [students, setStudents] = useState<StudentInfo[] | null>(null);

  const getUserData = async () => {
    const data = await fetchUserData();
    setUserData(data);
  };

  const getStudents = async () => {
    const data = await fetchStudents();
    setStudents(data);
  };

  useEffect(() => {
    getUserData();
    getStudents();
  }, []);

  return (
    <DataContext.Provider
      value={{
        userData,
        students,
        setUserData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
