import { SessionDetailsProps } from './SessionDetails.types';
import { Button, Stack, Typography, useTheme } from '@mui/material';
import { Image, UserBadge } from 'components';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from 'stores/auth/AuthStore';
import { useSessionStore } from 'stores/session/sessionStore';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const SessionDetails = ({ session }: SessionDetailsProps) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const currentUser = useAuthStore((state) => state.currentUser);
  const { joinSession, leaveSession } = useSessionStore((state) => ({
    joinSession: state.joinSession,
    leaveSession: state.leaveSession,
  }));
  if (!session || !currentUser) {
    return;
  }

  const handleJoin = () => {
    joinSession(session.id, currentUser.id);
  };

  const handleLeave = () => {
    leaveSession(session.id, currentUser.id);
  };

  const goBack = () => {
    navigate(-1);
  };

  const isHost = currentUser.id === session.host.id;
  const isParticipant = session.participants
    .map((p) => p.id)
    .includes(currentUser.id);

  return (
    <Stack width="35%" gap={2}>
      <Stack
        sx={{
          '&:hover': {
            cursor: 'pointer',
          },
        }}
        direction="row"
        alignItems="center"
        gap={1}
        onClick={goBack}
      >
        <ArrowBackIosNewIcon
          fontSize="small"
          htmlColor={theme.palette.primary.contrastText}
        />
        <Typography variant="body1" color={theme.palette.primary.contrastText}>
          Go back
        </Typography>
      </Stack>
      <Image
        src={session.game.thumbnail}
        alt="game thumbnail"
        width={1}
        height={1}
        sx={{ width: '100%', height: '80%' }}
      />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        borderBottom={`1px solid ${theme.palette.primary.light}`}
        pb={2}
      >
        <Typography variant="body1" color={theme.palette.primary.contrastText}>
          Host:
        </Typography>
        <UserBadge user={session.host} />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        borderBottom={`1px solid ${theme.palette.primary.light}`}
        pb={2}
      >
        <Typography
          sx={{ alignSelf: 'start' }}
          variant="body1"
          color={theme.palette.primary.contrastText}
        >
          Participants:
        </Typography>
        <Stack gap={1}>
          {session.participants.map((p) => (
            <UserBadge user={p} />
          ))}
        </Stack>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        borderBottom={`1px solid ${theme.palette.primary.light}`}
        pb={2}
      >
        <Typography variant="body1" color={theme.palette.primary.contrastText}>
          Room Size:
        </Typography>
        {session.currentPlayers < session.maxPlayers ? (
          <Typography
            variant="body1"
            color={theme.palette.primary.contrastText}
          >
            {session.currentPlayers} / {session.maxPlayers}
          </Typography>
        ) : (
          <Typography variant="body1" color={theme.palette.error.light}>
            Session is Full
          </Typography>
        )}
      </Stack>

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
