import { api } from 'api/api';
import { Game } from 'models/game/Game';
import { create } from 'zustand';

interface GamesState {
  allGames: Game[];
  getAllGames: () => Promise<void>;
  gameOptions: { value: number; label: string }[];
  setGameOptions: (games: Game[]) => void;
}

export const useGamesStore = create<GamesState>()((set, get) => ({
  allGames: [],
  gameOptions: [],

  getAllGames: async () => {
    const response = await api.get('/games/all');
    if (response.ok) {
      const allGames = (response.data as Game[]).sort((a, b) =>
        a.title.localeCompare(b.title),
      );
      set({
        allGames,
      });

      get().setGameOptions(allGames);
    }
  },
  setGameOptions: (games) => {
    const gameOptions = games.map((game) => ({
      label: game.title,
      value: game.id,
    }));
    set({ gameOptions });
  },
}));
