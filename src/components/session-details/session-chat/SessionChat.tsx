import {
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useState,
} from 'react';
import { useAuthStore } from 'stores/auth/AuthStore';
import { useSessionStore } from 'stores/session/sessionStore';
import { socket } from 'socket';
import { Message } from 'models/Message';

const SessionChat = () => {
  const theme = useTheme();
  const currentUser = useAuthStore((state) => state.currentUser);
  const { sendMessage, sessionDetails } = useSessionStore((state) => ({
    sendMessage: state.sendMessage,
    sessionDetails: state.sessionDetails,
  }));
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    socket.on('newMessage', handleNewMessage);

    return () => {
      socket.off('newMessage');
    };
  }, []);

  if (!sessionDetails || !currentUser) {
    return;
  }

  const handleNewMessage = (message: Message) => {
    console.log(message);
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
      <Stack flex={1}>
        {sessionDetails.messages.map((message) => (
          <Typography
            key={`${message.id}-${Math.random()}`}
            variant="body1"
            color={theme.palette.primary.contrastText}
          >
            {message.content}
          </Typography>
        ))}
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
