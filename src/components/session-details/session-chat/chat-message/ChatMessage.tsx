import { Box, Typography, useTheme } from '@mui/material';
import { useAuthStore } from 'stores/auth/AuthStore';
import { ChatMessageProps } from './ChatMessage.types';

const ChatMessage = ({ message }: ChatMessageProps) => {
  const theme = useTheme();
  const currentUser = useAuthStore((state) => state.currentUser);

  if (!currentUser) return;

  console.log(message, 'MESSAGE FROM CHAT MESSAGE');

  const isSender = message.sender.id === currentUser.id;

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: isSender ? 'end' : 'start',
      }}
    >
      <Box
        sx={{
          width: 'fit-content',
          backgroundColor: isSender ? '#4A90E2' : '#7E8C8D',
          p: 1.5,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="body1"
          color={theme.palette.primary.contrastText}
          fontSize={14}
        >
          {message.content}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatMessage;
