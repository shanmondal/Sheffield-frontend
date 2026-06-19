import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');

  return {
    Authorization: `Bearer ${token}`,
  };
};

export const getLeads = async (
  page = 1,
  limit = 20,
  search = '',
  startDate = '',
  endDate = '',
) => {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  if (search.trim()) {
    params.append('search', search);
  }

  if (startDate) {
    params.append('startDate', startDate);
  }

  if (endDate) {
    params.append('endDate', endDate);
  }

  const response = await axios.get(`${API_URL}/leads?${params.toString()}`, {
    headers: getAuthHeaders(),
  });

  return response.data;
};

export const getLeadStats = async () => {
  const response = await axios.get(`${API_URL}/leads/stats`, {
    headers: getAuthHeaders(),
  });

  return response.data;
};

export const exportLeads = async (
  search = '',
  startDate = '',
  endDate = '',
) => {
  const token = localStorage.getItem('token');

  const params = new URLSearchParams();

  if (search) {
    params.append('search', search);
  }

  if (startDate) {
    params.append('startDate', startDate);
  }

  if (endDate) {
    params.append('endDate', endDate);
  }

  const response = await axios.get(
    `${API_URL}/leads/export?${params.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: 'blob',
    },
  );

  const url = window.URL.createObjectURL(new Blob([response.data]));

  const link = document.createElement('a');

  link.href = url;

  link.setAttribute(
    'download',
    `leads-${new Date().toISOString().slice(0, 10)}.xlsx`,
  );

  document.body.appendChild(link);

  link.click();

  link.remove();
};

export const getLeadById = async (id: string) => {
  const response = await axios.get(`${API_URL}/leads/${id}`, {
    headers: getAuthHeaders(),
  });

  return response.data;
};
