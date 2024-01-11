import { Stack } from '@mui/material';
import { Session } from './session/Session';
import { useSessionStore } from 'stores/session/sessionStore';

const Sessions = () => {
  const allSessions = useSessionStore((state) => state.allSessions);

  return (
    <Stack
      sx={{
        width: '60%',
        mx: 'auto',
      }}
      direction="column"
      alignItems="center"
      gap={3}
    >
      {allSessions.map((session) => (
        <Session key={session.id} session={session} />
      ))}
    </Stack>
  );
};

export { Sessions };
