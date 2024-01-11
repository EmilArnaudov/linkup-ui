import { User } from './User';
import { SessionGame } from './game/Game';

export interface Session {
  id: number;
  title: string;
  isLive: boolean;
  currentPlayers: number;
  maxPlayers: number;
  game: SessionGame;
  start: number;
  end: number;
  host: User;
  participants: User[];
}
