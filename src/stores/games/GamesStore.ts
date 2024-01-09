import { api } from 'api/api';
import { Game } from 'models/game/Game';
import { create } from 'zustand';

interface GamesState {
  allGames: Game[];
  getAllGames: () => Promise<void>;
  imagesForMainCarousel: () => string[];
}

export const useGamesStore = create<GamesState>()((set, get) => ({
  allGames: [],
  getAllGames: async () => {
    const response = await api.get('/games/all');
    if (response.ok) {
      set({ allGames: response.data as Game[] });
    }
  },
  imagesForMainCarousel: () => {
    return get()
      .allGames.slice(0, 9)
      .map((game) => game.thumbnail);
  },
}));
