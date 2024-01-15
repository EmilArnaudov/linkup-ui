import { Box, Typography, useTheme } from '@mui/material';
import { UserBadgeProps } from './UserBadge.types';
import { Image } from 'components';

const UserBadge = ({ user }: UserBadgeProps) => {
  const theme = useTheme();
  return (
    <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
      <Image
        borderRadius="50%"
        src="/profile-pic.png"
        alt="user pic"
        width={32}
        height={32}
      />
      <Typography
        variant="body2"
        color={theme.palette.primary.contrastText}
        fontWeight={500}
      >
        {user.username}
      </Typography>
    </Box>
  );
};

export { UserBadge };
