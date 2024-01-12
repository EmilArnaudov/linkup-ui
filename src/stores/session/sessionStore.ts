import { api } from 'api/api';
import { CreateSessionFormValues } from 'components/create-session-modal/CreateSessionModal.types';
import { Session } from 'models/Session';
import { create } from 'zustand';

interface SessionState {
  allSessions: Session[];
  getAllSessions: () => Promise<void>;
  createSession: (formData: CreateSessionFormValues) => Promise<void>;
}

export const useSessionStore = create<SessionState>()((set, get) => ({
  allSessions: [],
  getAllSessions: async () => {
    const response = await api.get('/session/all');
    if (response.ok) {
      set({ allSessions: response.data as Session[] });
    }
  },
  createSession: async (formData) => {
    const response = await api.post('/session', formData);
    if (response.ok) {
      const session = response.data as Session;
      const allSessions = get().allSessions;
      allSessions.unshift(session);
      set({ allSessions });
    }
  },
}));
