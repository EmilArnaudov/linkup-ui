import { Stack, useTheme } from '@mui/material';
import { Sessions } from 'components';
import { useEffect } from 'react';
import { useSessionStore } from 'stores/session/sessionStore';

const SessionsPage = () => {
  const theme = useTheme();
  const getAllSessions = useSessionStore((state) => state.getAllSessions);

  useEffect(() => {
    getAllSessions();
  }, []);

  return (
    <Stack
      sx={{
        backgroundColor: theme.palette.background.default,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      direction="column"
    >
      <Sessions />
    </Stack>
  );
};

export default SessionsPage;
