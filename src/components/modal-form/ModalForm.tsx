import { Modal, Stack, useTheme } from '@mui/material';
import { ModalFormProps } from './ModalForm.types';

const ModalForm = ({ open, handleClose, children }: ModalFormProps) => {
  const theme = useTheme();

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: `1px solid ${theme.palette.primary.dark}`,
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <form noValidate>
        <Stack sx={modalStyle} direction="column" alignItems="center" gap={1}>
          {children}
        </Stack>
      </form>
    </Modal>
  );
};

export default ModalForm;
