// import styled from '@emotion/styled';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import { Image, ImageCarousel } from 'components';
import InformationSection from './InformationSection';
import { useEffect, useMemo, useState } from 'react';
import { useGamesStore } from 'stores/games/GamesStore';
import AuthModal from 'components/auth-modal/AuthModal';

const LandingPage = () => {
  const theme = useTheme();
  const { images, getAllGames } = useGamesStore((state) => ({
    getAllGames: state.getAllGames,
    images: state.imagesForMainCarousel,
  }));

  useEffect(() => {
    getAllGames();
  }, []);

  const [modalOpen, setModalOpen] = useState(false);

  const Background = () => {
    return (
      <Image
        src="/background.jpg"
        alt="hero page background"
        width={0}
        height={0}
        sx={{
          position: 'absolute',
          zIndex: -2,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: 'calc(100vh - 70px)',
          width: '100%',
        }}
      />
    );
  };

  const MemoizedCarousel = useMemo(
    () => <ImageCarousel mt={10} images={images()} />,
    [images()],
  );

  const handleAuthModal = () => {
    setModalOpen((prevState) => !prevState);
  };

  return (
    <>
      <Box
        sx={{
          height: 'calc(100vh - 70px)',
        }}
      >
        <Background />
        <Stack>
          <Typography
            variant="h1"
            color={theme.palette.primary.contrastText}
            sx={{
              mt: '6%',
              mx: 'auto',
              maxWidth: '70%',
            }}
          >
            Find Gaming Partners!
          </Typography>
        </Stack>

        {MemoizedCarousel}

        <Stack direction="row" justifyContent="center" mt={8}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ p: 2, mx: 'auto', mt: 2 }}
            onClick={handleAuthModal}
          >
            Get Started
          </Button>
        </Stack>
      </Box>
      <InformationSection />

      <AuthModal open={modalOpen} handleClose={handleAuthModal} />
    </>
  );
};

export default LandingPage;
