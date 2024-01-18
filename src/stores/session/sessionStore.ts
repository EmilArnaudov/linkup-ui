import { api } from 'api/api';
import { CreateSessionFormValues } from 'components/create-session-modal/CreateSessionModal.types';
import { Session } from 'models/Session';
import { create } from 'zustand';

interface SessionState {
  allSessions: Session[];
  sessionDetails: Session | null;

  getAllSessions: () => Promise<void>;
  getSessionById: (id: number) => Promise<void>;
  createSession: (formData: CreateSessionFormValues) => Promise<void>;
  joinSession: (sessionId: number, userId: number) => Promise<void>;
  leaveSession: (sessionId: number, userId: number) => Promise<void>;
}

export const useSessionStore = create<SessionState>()((set, get) => ({
  allSessions: [],
  sessionDetails: null,
  getAllSessions: async () => {
    const response = await api.get('/session/all');
    if (response.ok) {
      set({ allSessions: response.data as Session[] });
    }
  },
  getSessionById: async (id) => {
    const response = await api.get(`/session/${id}`);
    if (response.ok) {
      set({ sessionDetails: response.data as Session });
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
  joinSession: async (sessionId, userId) => {
    const response = await api.post(`/session/join/${sessionId}`, { userId });
    if (response.ok) {
      const session = response.data as Session;
      set({ sessionDetails: session });
    }
  },
  leaveSession: async (sessionId, userId) => {
    const response = await api.post(`/session/leave/${sessionId}`, { userId });
    if (response.ok) {
      const session = response.data as Session;
      set({ sessionDetails: session });
    }
  },
}));
