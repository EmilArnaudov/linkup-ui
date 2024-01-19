import { api } from 'api/api';
import { CreateSessionFormValues } from 'components/create-session-modal/CreateSessionModal.types';
import { Message } from 'models/Message';
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

  sendMessage: (
    sessionId: number,
    senderId: number,
    content: string,
  ) => Promise<void>;
  upsertMessage: (message: Message) => void;
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
  sendMessage: async (sessionId, senderId, content) => {
    await api.post(`/session/message/${sessionId}`, {
      senderId,
      content,
    });
    // if (response.ok) {
    //   const data = response.data as { message: Message };
    //   const sessionDetails = get().sessionDetails;
    //   sessionDetails?.messages.push(data.message);
    //   set({ sessionDetails });
    // }
  },
  upsertMessage: (message) => {
    const sessionDetails = get().sessionDetails;
    sessionDetails?.messages.push(message);
    set({ sessionDetails });
  },
}));
