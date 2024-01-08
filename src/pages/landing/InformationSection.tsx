import { Box, useTheme } from '@mui/material';
import InformationCard from './InformationCard';

const InformationSection = () => {
  const theme = useTheme();

  const cardsData = [
    {
      title: 'Connect with Fellow Gamers',
      content:
        "Dive into a vast community of passionate gamers! LinkUp offers a seamless platform to find and connect with players sharing your interests. Whether you're a casual player or a competitive enthusiast, join a network that understands and enhances your gaming journey. Get ready to team up, compete, and enjoy your favorite games like never before!",
      image: '/card1.png',
    },
    {
      title: 'Discover New Games and Challenges',
      content:
        'Explore a world of new gaming possibilities! On LinkUp, not only do you meet new players, but you also discover an array of games across genres. From the latest releases to timeless classics, our platform guides you to your next gaming adventure. Embrace new challenges, learn different strategies, and enrich your gaming experience with every session.',
      image: '/card2.png',
    },
    {
      title: 'Join or Host Gaming Events',
      content:
        "Be a part of thrilling gaming events or take the lead to host your own! LinkUp empowers you to join community-driven gaming tournaments, cooperative playthroughs, and social gaming nights. Or, if you're feeling adventurous, create and manage your own gaming event. Bring your gaming community together for unforgettable experiences and forge lasting friendships in the gaming world.",
      image: '/card3.png',
    },
  ];

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      {cardsData.map((card, i) => (
        <InformationCard
          key={`${card.title}-${i}`}
          content={card.content}
          title={card.title}
          image={card.image}
          reverse={i % 2 !== 0}
        />
      ))}
    </Box>
  );
};

export default InformationSection;
