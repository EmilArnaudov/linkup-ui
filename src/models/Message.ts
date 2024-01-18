import { User } from './User';

export interface Message {
  id: number;
  content: string;
  sender: User;
  session: number;
  created_at: Date;
  updated_at: Date;
}
