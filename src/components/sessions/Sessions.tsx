import { Button, Stack } from '@mui/material';
import { Session } from './session/Session';
import { useSessionStore } from 'stores/session/sessionStore';
import { useState } from 'react';
import CreateSessionModal from 'components/create-session-modal/CreateSessionModal';

const Sessions = () => {
  const allSessions = useSessionStore((state) => state.allSessions);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prevState) => !prevState);
  };

  return (
    <>
      <Stack
        sx={{
          width: '60%',
          mx: 'auto',
        }}
        direction="column"
        alignItems="center"
        gap={3}
        p={8}
        borderRadius={2}
      >
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
      <CreateSessionModal open={modalOpen} handleClose={toggleModal} />
    </>
  );
};

export { Sessions };
