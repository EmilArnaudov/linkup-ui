import { Box, Button, Stack, Typography } from '@mui/material';
import { Session } from './session/Session';
import { useSessionStore } from 'stores/session/sessionStore';
import { useState } from 'react';
import CreateSessionModal from 'components/create-session-modal/CreateSessionModal';
import { useGamesStore } from 'stores/games/GamesStore';

const Sessions = () => {
  const allSessions = useSessionStore((state) => state.allSessions);
  const { gamesLoaded } = useGamesStore((state) => ({
    gamesLoaded: state.gamesLoaded,
  }));
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prevState) => !prevState);
  };

  return (
    <>
      <Typography variant="h2" mt={2} mb={4} alignSelf="start" ml={5}>
        Sessions
      </Typography>
      <Box
        sx={{
          width: '50%',
          // border: '1px solid rgba(95,87,217,1)',
          // borderRadius: 20,
          // height: '100vh',
          // overflow: 'auto',
          // p: 4,
          // boxShadow: '0px 0px 300px -101px rgba(95,87,217,1)',
        }}
      >
        <Stack width="100%" direction="column" alignItems="center" gap={5}>
          <Button
            onClick={toggleModal}
            variant="contained"
            color="secondary"
            size="large"
          >
            Create Session
          </Button>
          {allSessions.map((session) => (
            <Session key={session.id} session={session} />
          ))}
        </Stack>
        {gamesLoaded && (
          <CreateSessionModal open={modalOpen} handleClose={toggleModal} />
        )}
      </Box>
    </>
  );
};

export { Sessions };
