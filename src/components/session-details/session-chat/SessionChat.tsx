import { Box, InputAdornment, Stack, TextField, useTheme } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { ChangeEventHandler, KeyboardEventHandler, useState } from 'react';

const SessionChat = () => {
  const theme = useTheme();
  const [message, setMessage] = useState<string>('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value) {
      setMessage(e.target.value);
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const sendMessage = () => {
    console.log(message);
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
      <Stack flex={1} />
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
