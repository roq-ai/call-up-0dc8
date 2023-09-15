import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CallReceiverInterface {
  id?: string;
  user_id: string;
  status: string;
  call_charge: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface CallReceiverGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  status?: string;
}
