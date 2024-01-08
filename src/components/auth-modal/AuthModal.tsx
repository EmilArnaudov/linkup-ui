import {
  Button,
  Divider,
  Modal,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Image } from 'components';
import { FormValidationSchema, FormValues, Props } from './AuthModal.types';

const AuthModal = ({ open, handleClose }: Props) => {
  const theme = useTheme();
  const [isRegister, setIsRegister] = useState(true);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      username: '',
      password: '',
      repeatPassword: '',
    },
    resolver: zodResolver(FormValidationSchema),
  });

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

  const handleFormState = () => {
    setIsRegister((prevState) => !prevState);
  };

  const onSubmit = (formData: FormValues) => {
    if (isRegister) {
      if (formData.password !== formData.repeatPassword) {
        setError(
          'repeatPassword',
          { message: 'Passwords should match' },
          { shouldFocus: true },
        );
        return;
      }
    }
    console.log(formData);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-register-fields"
      aria-describedby="modal-register"
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack sx={modalStyle} direction="column" alignItems="center" gap={1}>
          <Typography variant="h4" component="h2" mb={2}>
            {isRegister ? 'Sign Up' : 'Login'}
          </Typography>

          <TextField
            fullWidth
            variant="outlined"
            label="Username"
            {...register('username')}
            error={Boolean(errors['username'])}
            helperText={errors['username']?.message ?? ' '}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Password"
            type="password"
            {...register('password')}
            error={Boolean(errors['password'])}
            helperText={errors['password']?.message ?? ' '}
          />
          {isRegister ? (
            <TextField
              fullWidth
              variant="outlined"
              label="Repeat Password"
              {...register('repeatPassword')}
              error={Boolean(errors['repeatPassword'])}
              helperText={errors['repeatPassword']?.message ?? ' '}
              type="password"
            />
          ) : null}

          <Typography component="p" fontSize={11} mt={1} mb={2}>
            {isRegister
              ? 'If you already have an account'
              : 'To create an account'}
            , please{' '}
            <Typography
              component="span"
              fontSize={11}
              onClick={handleFormState}
              sx={{
                color: theme.palette.info.main,
                '&:hover': {
                  textDecoration: 'underline',
                  cursor: 'pointer',
                },
              }}
            >
              Click Here
            </Typography>
          </Typography>

          <Button
            sx={{ mt: 1, mb: 1 }}
            size="large"
            variant="contained"
            type="submit"
          >
            {isRegister ? 'Register' : 'Login'}
          </Button>

          <Divider
            orientation="horizontal"
            flexItem
            color={theme.palette.grey[300]}
          />

          <Typography component="p" fontSize={11}>
            Or you can use our social logins
          </Typography>

          <Image
            sx={{
              transition: 'all 300ms ease-in-out',
              '&:hover': {
                cursor: 'pointer',
                transform: 'scale(1.1)',
              },
            }}
            src="/discord-logo.png"
            alt="discord logo"
            height={32}
            width={32}
          />
        </Stack>
      </form>
    </Modal>
  );
};

export default AuthModal;
