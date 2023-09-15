import axios from 'axios';
import queryString from 'query-string';
import { SiteAdministratorInterface, SiteAdministratorGetQueryInterface } from 'interfaces/site-administrator';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSiteAdministrators = async (
  query?: SiteAdministratorGetQueryInterface,
): Promise<PaginatedInterface<SiteAdministratorInterface>> => {
  const response = await axios.get('/api/site-administrators', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSiteAdministrator = async (siteAdministrator: SiteAdministratorInterface) => {
  const response = await axios.post('/api/site-administrators', siteAdministrator);
  return response.data;
};

export const updateSiteAdministratorById = async (id: string, siteAdministrator: SiteAdministratorInterface) => {
  const response = await axios.put(`/api/site-administrators/${id}`, siteAdministrator);
  return response.data;
};

export const getSiteAdministratorById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/site-administrators/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSiteAdministratorById = async (id: string) => {
  const response = await axios.delete(`/api/site-administrators/${id}`);
  return response.data;
};
