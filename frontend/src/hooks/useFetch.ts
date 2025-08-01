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
      const { data } = await api.get(`/students`);
      return data.students;
    } catch (e) {
      console.error(e);
    }
  };

  const fetchFoundPairs = async () => {
    const { data } = await api.get('/students/admin/found');
    return data;
  };

  return { fetchUserData, fetchStudents, fetchFoundPairs };
};
