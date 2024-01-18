import { Message } from 'react-hook-form';
import { User } from './User';
import { SessionGame } from './game/Game';

export interface Session {
  id: number;
  title: string;
  isLive: boolean;
  currentPlayers: number;
  maxPlayers: number;
  game: SessionGame;
  start: string;
  end: string;
  host: User;
  messages: Message[];
  participants: User[];
}
