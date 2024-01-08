import { Box } from '@mui/material';
import { ImageProps } from './Image.types';

const Image = ({ src, height, width, alt, sx = {}, ...rest }: ImageProps) => {
  return (
    <Box
      component="img"
      sx={{
        height,
        width,
        ...sx,
      }}
      alt={alt}
      src={src}
      {...rest}
    />
  );
};

export default Image;
