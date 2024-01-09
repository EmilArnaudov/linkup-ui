import { api } from 'api/api';
import { FormValues } from 'components/auth-modal/AuthModal.types';
import { User } from 'models/User';
// import { Game } from 'models/game-models/Game'
import { create } from 'zustand';
import { LoginResponse } from './AuthStore.types';

interface GamesState {
  currentUser: User | null;
  register: (formData: FormValues) => Promise<void>;
  login: (formData: FormValues) => Promise<void>;
  logout: () => void;
}

export const useGamesStore = create<GamesState>()((set, get) => ({
  currentUser: null,
  register: async (formData) => {
    const response = await api.post('/auth/register', formData);
    if (response.ok) {
      await get().login(formData);
    }
  },
  login: async (formData) => {
    const response = await api.post('/auth/login', formData);
    if (response.ok) {
      const data = response.data as LoginResponse;
      set({ currentUser: data.userDetails });
      localStorage.setItem('token', `${data.tokenType} ${data.accessToken}`);
    }
  },
  logout: () => {
    localStorage.removeItem('token');
    set({ currentUser: null });
  },
}));
