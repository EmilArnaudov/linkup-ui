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
  start: z.string().transform((val, ctx) => {
    const number = parseInt(val, 10);
    if (isNaN(number)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Start should be a timestamp.`,
      });
      return z.NEVER;
    }
    return number;
  }),
  end: z.string().transform((val, ctx) => {
    const number = parseInt(val, 10);
    if (isNaN(number)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `End should be a timestamp.`,
      });
      return z.NEVER;
    }
    return number;
  }),
  hostId: z.string().transform((val, ctx) => {
    const number = parseInt(val, 10);
    if (isNaN(number)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Host ID is invalid.`,
      });
      return z.NEVER;
    }
    return number;
  }),
});

export type CreateSessionFormValues = z.infer<
  typeof CreateSessionFormValidationSchema
>;
