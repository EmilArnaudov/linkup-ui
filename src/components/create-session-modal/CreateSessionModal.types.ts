import { z } from 'zod';

export interface Props {
  open: boolean;
  handleClose: () => void;
}

export const CreateSessionFormValidationSchema = z.object({
  title: z
    .string()
    .min(4, { message: 'Username must be atleast 4 characters' })
    .max(30, { message: 'Username must be maximum 30 characters' }),
  maxPlayers: z.number().min(1).max(8),
  gameId: z.number(),
  start: z.string(),
  end: z.string(),
  hostId: z.number(),
});

export type CreateSessionFormValues = z.infer<
  typeof CreateSessionFormValidationSchema
>;
