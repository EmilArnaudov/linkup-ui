import { Stack, useTheme } from '@mui/material';
import { Sessions } from 'components';

const AppMainPage = () => {
  const theme = useTheme();

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
