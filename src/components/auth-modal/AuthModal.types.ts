import { z } from 'zod';

export const FormValidationSchema = z.object({
  username: z
    .string()
    .min(4, { message: 'Username must be atleast 4 characters' })
    .max(15, { message: 'Username must be maximum 15 characters' }),
  password: z
    .string()
    .min(6, { message: 'Password must be atleast 6 characters' })
    .max(15, { message: 'Password must be maximum 15 characters' }),
  repeatPassword: z.string(),
});
// .refine((data) => data.password === data.repeatPassword, {
//   path: ['repeatPassword'],
//   message: "Passwords don't match",
// });
// extracting the type
export type FormValues = z.infer<typeof FormValidationSchema>;

export interface Props {
  open: boolean;
  handleClose: () => void;
}

// export interface FormValues {
//   username: string
//   password: string
//   repeatPassword?: string
// }
