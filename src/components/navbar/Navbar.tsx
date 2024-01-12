import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Stack, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';
// import styled from '@emotion/styled';
import { Image } from 'components';
import { useAuthStore } from 'stores/auth/AuthStore';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { logout, currentUser } = useAuthStore((state) => ({
    logout: state.logout,
    currentUser: state.currentUser,
  }));
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
          {currentUser && (
            <Stack direction="row" alignItems="center" gap={4}>
              <Link
                style={{ color: 'white', fontWeight: 'bold' }}
                to="/app/sessions"
              >
                Sessions
              </Link>
              <Box onClick={logout}>
                <Typography>Logout</Typography>
              </Box>
            </Stack>
          )}
        </Stack>
      </AppBar>
    </Box>
  );
}
