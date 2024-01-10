import { User } from './User';

export interface Session {
  id: number;
  title: string;
  isLive: boolean;
  currentPlayers: number;
  maxPlayers: number;
  game: string;
  start: string;
  end: string;
  host: User;
  participants: User[];
}
