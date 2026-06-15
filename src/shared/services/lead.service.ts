import { api } from '../lib/api';

export interface CreateLeadPayload {
  type: string;
  name: string;
  email: string;
  message: string;

  company?: string;
  phone?: string;
  subject?: string;
  source?: string;
}

export const createLead = async (payload: CreateLeadPayload) => {
  const response = await api.post('/leads', payload);

  return response.data;
};
