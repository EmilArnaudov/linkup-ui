import { Stack } from '@mui/material';
import { Session } from './session/Session';

const Sessions = () => {
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
      <Session />
      <Session />
      <Session />
    </Stack>
  );
};

export { Sessions };
