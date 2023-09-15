import axios from 'axios';
import queryString from 'query-string';
import { CallReceiverInterface, CallReceiverGetQueryInterface } from 'interfaces/call-receiver';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCallReceivers = async (
  query?: CallReceiverGetQueryInterface,
): Promise<PaginatedInterface<CallReceiverInterface>> => {
  const response = await axios.get('/api/call-receivers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCallReceiver = async (callReceiver: CallReceiverInterface) => {
  const response = await axios.post('/api/call-receivers', callReceiver);
  return response.data;
};

export const updateCallReceiverById = async (id: string, callReceiver: CallReceiverInterface) => {
  const response = await axios.put(`/api/call-receivers/${id}`, callReceiver);
  return response.data;
};

export const getCallReceiverById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/call-receivers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCallReceiverById = async (id: string) => {
  const response = await axios.delete(`/api/call-receivers/${id}`);
  return response.data;
};
