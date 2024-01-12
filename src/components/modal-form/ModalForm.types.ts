import { ReactNode } from 'react';

export interface ModalFormProps {
  open: boolean;
  handleClose: () => void;
  children?: ReactNode;
  // onSubmit: (data) => void;
}
