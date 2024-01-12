import { Box, Stack, Typography, useTheme } from '@mui/material';
import { Image } from 'components';
import { SessionProps } from './Session.types';
import { timestampToDateFormatter } from 'utils';

const Session = ({ session }: SessionProps) => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        width: '80%',
        backgroundColor: '#342056',
        '&:hover': {
          cursor: 'pointer',
          transform: 'scale(1.0035)',
          boxShadow: '0px 0px 5px 1px rgba(245,228,245,0.51)',
        },
        transition: 'all 300ms ease-in-out',
      }}
      // border="1px solid white"
      borderRadius={2}
      overflow="hidden"
      direction="row"
    >
      <Image
        src={session.game.thumbnail}
        alt="game lobby thumbnail"
        width={1}
        height={1}
        sx={{ width: '40%' }}
      />
      <Stack flex={1} justifyContent="space-between">
        <Stack px={2} pt={4} pb={2} gap={0.5}>
          <Typography
            variant="h5"
            fontWeight="600"
            color={theme.palette.grey[300]}
          >
            {session.title}
          </Typography>
          <Typography
            variant="body2"
            fontSize={14}
            fontWeight={400}
            color={theme.palette.grey[500]}
            // fontStyle="italic"
          >
            Looking for 4 man ranked
          </Typography>
        </Stack>

        <Stack
          sx={{
            backgroundColor: theme.palette.primary.light,
          }}
          direction="row"
          alignItems="center"
          gap={1}
          py={1}
          px={2}
        >
          {session.isLive ? (
            <>
              <Box
                sx={{
                  backgroundColor: theme.palette.success.light,
                  p: 0.8,
                  borderRadius: '10%',
                }}
              >
                <Typography
                  fontWeight={500}
                  fontSize={14}
                  color={theme.palette.primary.contrastText}
                >
                  Live
                </Typography>
              </Box>
            </>
          ) : (
            <>
              <Typography
                variant="body2"
                color={theme.palette.primary.contrastText}
              >
                Starts 10:45
              </Typography>
            </>
          )}

          <Typography
            variant="body2"
            color={theme.palette.primary.contrastText}
          >
            Ends {timestampToDateFormatter(session.end)}
          </Typography>
          <Box
            ml="auto"
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={1}
          >
            <Image
              borderRadius="50%"
              src="/profile-pic.png"
              alt="host profile pic"
              width={32}
              height={32}
            />
            <Typography
              variant="body2"
              color={theme.palette.primary.contrastText}
              fontWeight={500}
            >
              {session.host.username}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export { Session };

// {
//   "id": 340,
//   "title": "Game Of Thrones Winter Is Coming",
//   "thumbnail": "https://www.freetogame.com/g/340/thumbnail.jpg",
//   "short_description": "A free-to-play browser-based RTS based on the George R.R. Martin novels and popular HBO series.",
//   "game_url": "https://www.freetogame.com/open/game-of-thrones-winter-is-coming",
//   "genre": "Strategy",
//   "platform": "Web Browser",
//   "publisher": "GTArcade",
//   "developer": "YOOZOO Games ",
//   "release_date": "2019-11-14",
//   "freetogame_profile_url": "https://www.freetogame.com/game-of-thrones-winter-is-coming"
// },
