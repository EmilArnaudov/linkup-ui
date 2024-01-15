import {
  Button,
  MenuItem,
  Modal,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import {
  CreateSessionFormValidationSchema,
  CreateSessionFormValues,
  Props,
} from './CreateSessionModal.types';
import { useGamesStore } from 'stores/games/GamesStore';
import { sizeOptions } from './CreateSessionModa.data';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthStore } from 'stores/auth/AuthStore';
import { useSessionStore } from 'stores/session/sessionStore';
import dayjs from 'dayjs';

const CreateSessionModal = ({ open, handleClose }: Props) => {
  const { gameOptions } = useGamesStore((state) => ({
    gameOptions: state.gameOptions,
  }));
  const currentUser = useAuthStore((state) => state.currentUser);
  const { createSession } = useSessionStore((state) => ({
    createSession: state.createSession,
  }));
  const theme = useTheme();

  const now = dayjs().add(1, 'minute').toISOString();
  const later = dayjs().add(4, 'hour').toISOString();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateSessionFormValues>({
    defaultValues: {
      title: '',
      maxPlayers: 1,
      hostId: currentUser!.id,
      gameId: gameOptions[0].value,
      start: now,
      end: later,
    },
    resolver: zodResolver(CreateSessionFormValidationSchema),
  });

  const onSubmit = async (data: CreateSessionFormValues) => {
    await createSession(data);
    handleClose();
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: `1px solid ${theme.palette.primary.dark}`,
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
  };

  console.log(errors);

  return (
    <Modal open={open} onClose={handleClose}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack sx={modalStyle} direction="column" alignItems="center" gap={1}>
          <Stack>
            <Typography variant="h4" component="h2" mb={2}>
              Create a Session
            </Typography>
            <TextField
              variant="outlined"
              label="Session name"
              {...register('title')}
              error={Boolean(errors['title'])}
              helperText={errors['title']?.message ?? ' '}
            />

            {/* <Autocomplete
              fullWidth
              disablePortal
              options={gameOptions}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select game"
                  {...register('gameId')}
                  error={Boolean(errors['gameId'])}
                  helperText={errors['gameId']?.message ?? ' '}
                />
              )}
            /> */}
            <TextField
              variant="outlined"
              label="Select game"
              select
              {...register('gameId')}
              error={Boolean(errors['gameId'])}
              helperText={errors['gameId']?.message ?? ' '}
              defaultValue={gameOptions[0].value}
            >
              {gameOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              variant="outlined"
              label="Session size"
              select
              {...register('maxPlayers')}
              error={Boolean(errors['maxPlayers'])}
              helperText={errors['maxPlayers']?.message ?? ' '}
              defaultValue={1}
            >
              {sizeOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
          <Button
            sx={{ mt: 1, mb: 1 }}
            size="large"
            variant="contained"
            type="submit"
          >
            Create
          </Button>
        </Stack>
      </form>
    </Modal>
  );
};

export default CreateSessionModal;
