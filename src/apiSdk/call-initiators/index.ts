import axios from 'axios';
import queryString from 'query-string';
import { CallInitiatorInterface, CallInitiatorGetQueryInterface } from 'interfaces/call-initiator';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCallInitiators = async (
  query?: CallInitiatorGetQueryInterface,
): Promise<PaginatedInterface<CallInitiatorInterface>> => {
  const response = await axios.get('/api/call-initiators', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCallInitiator = async (callInitiator: CallInitiatorInterface) => {
  const response = await axios.post('/api/call-initiators', callInitiator);
  return response.data;
};

export const updateCallInitiatorById = async (id: string, callInitiator: CallInitiatorInterface) => {
  const response = await axios.put(`/api/call-initiators/${id}`, callInitiator);
  return response.data;
};

export const getCallInitiatorById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/call-initiators/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCallInitiatorById = async (id: string) => {
  const response = await axios.delete(`/api/call-initiators/${id}`);
  return response.data;
};
