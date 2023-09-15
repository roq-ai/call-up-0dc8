import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SiteAdministratorInterface {
  id?: string;
  user_id: string;
  role: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface SiteAdministratorGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  role?: string;
  status?: string;
}
