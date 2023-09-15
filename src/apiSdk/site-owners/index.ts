import axios from 'axios';
import queryString from 'query-string';
import { SiteOwnerInterface, SiteOwnerGetQueryInterface } from 'interfaces/site-owner';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSiteOwners = async (
  query?: SiteOwnerGetQueryInterface,
): Promise<PaginatedInterface<SiteOwnerInterface>> => {
  const response = await axios.get('/api/site-owners', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSiteOwner = async (siteOwner: SiteOwnerInterface) => {
  const response = await axios.post('/api/site-owners', siteOwner);
  return response.data;
};

export const updateSiteOwnerById = async (id: string, siteOwner: SiteOwnerInterface) => {
  const response = await axios.put(`/api/site-owners/${id}`, siteOwner);
  return response.data;
};

export const getSiteOwnerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/site-owners/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSiteOwnerById = async (id: string) => {
  const response = await axios.delete(`/api/site-owners/${id}`);
  return response.data;
};
