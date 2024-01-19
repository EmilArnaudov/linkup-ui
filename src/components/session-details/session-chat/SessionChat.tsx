import { InputAdornment, Stack, TextField, useTheme } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useAuthStore } from 'stores/auth/AuthStore';
import { useSessionStore } from 'stores/session/sessionStore';
import { socket } from 'socket';
import { Message } from 'models/Message';
import ChatMessage from './chat-message/ChatMessage';

const SessionChat = () => {
  const theme = useTheme();
  const currentUser = useAuthStore((state) => state.currentUser);
  const { sendMessage, sessionDetails, upsertMessage } = useSessionStore(
    (state) => ({
      sendMessage: state.sendMessage,
      sessionDetails: state.sessionDetails,
      upsertMessage: state.upsertMessage,
    }),
  );
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    socket.on('newMessage', handleNewMessage);

    return () => {
      socket.off('newMessage');
    };
  }, []);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [sessionDetails?.messages.length]);

  if (!sessionDetails || !currentUser) {
    return;
  }

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNewMessage = (data: { message: Message }) => {
    console.log(data.message, 'MESSAGE FROM SOCKET');

    upsertMessage(data.message);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value) {
      setMessage(e.target.value);
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    sendMessage(sessionDetails?.id, currentUser?.id, message);
    setMessage('');
  };

  return (
    <Stack
      sx={{
        width: '100%',
        height: '400px',
        backgroundColor: '#2b3a67',
      }}
    >
      <Stack
        sx={{
          maxHeight: 344,
          overflowY: 'auto',
        }}
        flex={1}
        gap={2}
      >
        {sessionDetails.messages.map((message) => (
          <ChatMessage
            key={`${message.id}-${Math.random()}`}
            message={message}
          />
        ))}
        <div ref={chatEndRef} />
      </Stack>
      <TextField
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        sx={{
          backgroundColor: theme.palette.grey[200],
          '&.Mui-focused': {
            outline: 'none',
            border: 'none',
          },
          border: 'none',
          '& fieldset': { border: 'none' },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SendIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        fullWidth
        autoComplete="off"
      />
    </Stack>
  );
};

export default SessionChat;
