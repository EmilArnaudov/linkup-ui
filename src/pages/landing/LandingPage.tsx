// import styled from '@emotion/styled';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import { Image } from 'components';
import InformationSection from './InformationSection';
import { useEffect, useState } from 'react';
import { useGamesStore } from 'stores/games/GamesStore';
import AuthModal from 'components/auth-modal/AuthModal';

const LandingPage = () => {
  const theme = useTheme();
  const { getAllGames } = useGamesStore((state) => ({
    getAllGames: state.getAllGames,
    images: state.imagesForMainCarousel,
  }));

  useEffect(() => {
    getAllGames();
  }, []);

  const [modalOpen, setModalOpen] = useState(false);

  // const Background = () => {
  //   return (
  //     <Image
  //       src="/background.jpg"
  //       alt="hero page background"
  //       width={0}
  //       height={0}
  //       sx={{
  //         position: 'absolute',
  //         zIndex: -2,
  //         backgroundRepeat: 'no-repeat',
  //         backgroundSize: 'cover',
  //         height: 'calc(100vh - 70px)',
  //         width: '100%',
  //       }}
  //     />
  //   );
  // };

  // const MemoizedCarousel = useMemo(
  //   () => <ImageCarousel mt={10} images={images()} />,
  //   [images()],
  // );

  const handleAuthModal = () => {
    setModalOpen((prevState) => !prevState);
  };

  return (
    <>
      <Box
        sx={{
          height: 'calc(100vh - 70px)',
          backgroundColor: theme.palette.background.default,
        }}
      >
        {/* <Background /> */}
        <Image
          src="/app-image-main.png"
          height={1}
          width={1}
          alt="fantasy characters"
          sx={{
            position: 'absolute',
            width: '65%',
            height: '75%',
            right: -50,
            bottom: 100,
          }}
        />
        <Stack>
          <Typography
            variant="h2"
            color={theme.palette.primary.contrastText}
            sx={{
              mt: '7%',
              ml: '6%',
              maxWidth: '70%',
            }}
          >
            Find Gaming Partners!
          </Typography>
          <Typography
            color={theme.palette.primary.contrastText}
            variant="h2"
            sx={{
              mt: 1,
              ml: '6%',
              maxWidth: '70%',
              fontSize: 22,
            }}
          >
            Connect with fellow adventurers and forge your legacy!
          </Typography>
        </Stack>

        {/* {MemoizedCarousel} */}

        {/* <Stack direction="row" mt={8}> */}
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ p: 2, mx: 'auto', mt: 32, ml: '20%' }}
          onClick={handleAuthModal}
        >
          Get Started
        </Button>
        {/* </Stack> */}
      </Box>
      <InformationSection />

      <AuthModal open={modalOpen} handleClose={handleAuthModal} />
    </>
  );
};

export default LandingPage;
