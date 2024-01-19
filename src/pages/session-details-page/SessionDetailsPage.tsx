import { Stack, Typography, useTheme } from '@mui/material';
import { SessionDetails } from 'components';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { socket } from 'socket';
import { useSessionStore } from 'stores/session/sessionStore';

const SessionDetailsPage = () => {
  const theme = useTheme();
  const params = useParams();
  const { getSessionById, sessionDetails } = useSessionStore((state) => ({
    getSessionById: state.getSessionById,
    sessionDetails: state.sessionDetails,
  }));

  useEffect(() => {
    const id = Number(params.id);
    console.log(id, 'od');

    socket.emit('joinSession', { sessionId: 'are' });
    getSessionById(id);

    return () => {
      socket.emit('leaveSession', { sessionId: 'are' });
    };
  }, []);

  return (
    <Stack
      sx={{
        backgroundColor: theme.palette.background.default,
        alignItems: 'center',
        // justifyContent: 'center',
        // height: 'calc(100vh - 70px)',
        pb: 10,
      }}
      direction="column"
    >
      {sessionDetails ? (
        <>
          <Typography variant="h2" mt={2} mb={4} alignSelf="start" ml={5}>
            {sessionDetails.title}
          </Typography>
          <SessionDetails session={sessionDetails} />
        </>
      ) : (
        <Typography variant="h2">Loading</Typography>
      )}
    </Stack>
  );
};

export default SessionDetailsPage;
