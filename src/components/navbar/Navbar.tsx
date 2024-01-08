import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Stack } from '@mui/material';
// import { Link } from 'react-router-dom';
// import styled from '@emotion/styled';
import { Image } from 'components';

export default function Navbar() {
  // const theme = useTheme();

  // const StyledLink = styled(Link)`
  //   color: white;
  //   text-decoration: none;
  //   font-family: ${theme.typography.h1.fontFamily};

  //   &:hover {
  //     text-decoration: underline;
  //   }
  // `;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap={1}
        >
          <IconButton
            sx={{
              transition: 'transform 400ms ease-in-out',
              '&:hover': {
                transform: 'rotate(360deg)',
              },
            }}
          >
            <Image src="/logo.png" alt="linkup logo" height={54} width={88} />
          </IconButton>
          {/* <Stack direction="row" gap={1}>
            <StyledLink to="/register">Register</StyledLink>

            <StyledLink to="/login">Login</StyledLink>
          </Stack> */}
        </Stack>
      </AppBar>
    </Box>
  );
}
