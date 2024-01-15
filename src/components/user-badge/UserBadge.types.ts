import { BoxProps } from '@mui/material';
import { User } from 'models/User';

export interface UserBadgeProps extends BoxProps {
  user: User;
}
