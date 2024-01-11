import { Stack, useTheme } from '@mui/material';
import { Sessions } from 'components';
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
        height: 'calc(100vh - 70px)',
      }}
      direction="column"
    >
      <Sessions />
    </Stack>
  );
};

export default AppMainPage;
