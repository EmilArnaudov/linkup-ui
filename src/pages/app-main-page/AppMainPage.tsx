import { Box, Stack, useTheme } from '@mui/material';
import { Image } from 'components';

const AppMainPage = () => {
  const theme = useTheme();

  return (
    <Stack
      sx={{ backgroundColor: theme.palette.background.default }}
      direction="column"
    >
      <Box marginLeft="auto" width="70%" height={600}>
        <Image
          src="/app-image-main.png"
          height={1}
          width={1}
          alt="main image"
          sx={{
            width: '100%',
          }}
        />
      </Box>
    </Stack>
  );
};

export default AppMainPage;
