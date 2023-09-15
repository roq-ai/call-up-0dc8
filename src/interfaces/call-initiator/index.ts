import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CallInitiatorInterface {
  id?: string;
  user_id: string;
  status: string;
  call_charge: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface CallInitiatorGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  status?: string;
}
