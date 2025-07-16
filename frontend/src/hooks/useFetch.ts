import api from '@/api/axios';

export const useFetch = () => {
  const fetchUserData = async () => {
    try {
      const res = await api.get(`/auth/me`);
      return res.data;
    } catch (e) {
      console.error(e);
    }
  };

  const fetchStudents = async () => {
    try {
      const res = await api.get(`/students`);
      return res.data;
    } catch (e) {
      console.error(e);
    }
  };

  return { fetchUserData, fetchStudents };
};
