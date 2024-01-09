import { User } from 'models/User';

export interface LoginResponse {
  tokenType: string;
  accessToken: string;
  userDetails: User;
}
