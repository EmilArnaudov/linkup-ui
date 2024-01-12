import { SessionDetailsProps } from './SessionDetails.types';
import { Button, Stack, Typography, useTheme } from '@mui/material';
import { Image } from 'components';
import { useAuthStore } from 'stores/auth/AuthStore';
import { useSessionStore } from 'stores/session/sessionStore';

const SessionDetails = ({ session }: SessionDetailsProps) => {
  const theme = useTheme();
  const currentUser = useAuthStore((state) => state.currentUser);
  const joinSession = useSessionStore((state) => state.joinSession);
  if (!session || !currentUser) {
    return;
  }

  const handleJoin = () => {
    joinSession(session.id, currentUser.id);
  };

  const handleLeave = () => {};

  const isHost = currentUser.id === session.host.id;
  const isParticipant = session.participants
    .map((p) => p.id)
    .includes(currentUser.id);

  return (
    <Stack width="35%">
      <Image
        src={session.game.thumbnail}
        alt="game thumbnail"
        width={1}
        height={1}
        sx={{ width: '100%', height: '80%' }}
      />

      <Typography variant="body1" color={theme.palette.primary.contrastText}>
        Host: {session.host.username}
      </Typography>
      <Typography variant="body1" color={theme.palette.primary.contrastText}>
        Participants: {session.participants.map((p) => p.username).join(', ')}
      </Typography>

      {isHost ? (
        <Button variant="contained" color="secondary">
          End session
        </Button>
      ) : isParticipant ? (
        <Button variant="contained" color="secondary" onClick={handleLeave}>
          Leave session
        </Button>
      ) : (
        <Button variant="contained" color="secondary" onClick={handleJoin}>
          Join session
        </Button>
      )}
    </Stack>
  );
};

export { SessionDetails };
