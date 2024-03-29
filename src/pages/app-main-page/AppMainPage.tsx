import { Stack, Typography, useTheme } from '@mui/material';
import { useEffect } from 'react';
import { useSessionStore } from 'stores/session/sessionStore';

const AppMainPage = () => {
  const theme = useTheme();
  const getAllSessions = useSessionStore((state) => state.getAllSessions);

  useEffect(() => {
    getAllSessions();
  }, []);

  return (
    <Stack
      sx={{
        backgroundColor: theme.palette.background.default,
      }}
      direction="column"
    >
      <Typography variant="h2">Main apge</Typography>
    </Stack>
  );
};

export default AppMainPage;
