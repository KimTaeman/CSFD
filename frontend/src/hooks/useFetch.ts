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

  type FilterStatus = 'found' | 'not_found' | 'all';

  const fetchMentorPairs = async (status: FilterStatus) => {
    const { data } = await api.get(`/students/admin/pairs?status=${status}`);
    return data;
  };

  return { fetchUserData, fetchStudents, fetchMentorPairs };
};
