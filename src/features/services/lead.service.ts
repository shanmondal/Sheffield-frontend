import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getLeads = async (
  page = 1,
  limit = 20,
) => {
  const token = localStorage.getItem('token');

const response = await axios.get(
  `${API_URL}/leads?page=${page}&limit=${limit}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
);

return response.data;
};
