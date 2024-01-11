import { api } from 'api/api';
import { Session } from 'models/Session';
import { create } from 'zustand';

interface SessionState {
  allSessions: Session[];
  getAllSessions: () => Promise<void>;
}

export const useSessionStore = create<SessionState>()((set) => ({
  allSessions: [],
  getAllSessions: async () => {
    const response = await api.get('/session/all');
    if (response.ok) {
      set({ allSessions: response.data as Session[] });
    }
  },
}));
