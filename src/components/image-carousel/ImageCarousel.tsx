import { Box, Stack } from '@mui/material';
import { ImageCarouselProps } from './ImageCarousel.types';
import { Image } from 'components';
import styled from '@emotion/styled';
const IMAGE_WIDTH = 320;
const IMAGE_HEIGHT = 180;

const HOVERED_WIDTH = 345;
const HOVERED_HEIGHT = 200;

const ImageCarousel = ({ images, ...rest }: ImageCarouselProps) => {
  const startingPoint = (images.length - 3) * IMAGE_WIDTH;

  const StyledStack = styled(Stack)`
    position: absolute;
    flex-direction: row;
    top: 0px;
    gap: 8px;
    animation: 40s linear 0s slide infinite;
    min-height: 140px;

    &:hover {
      animation-play-state: paused;
    }

    @keyframes slide {
      from {
        left: -${startingPoint}px;
      }
      to {
        left: 100%;
        /* transform: translateX(-100%); */
      }
    }
  `;

  return (
    <Box
      position="relative"
      minHeight={IMAGE_HEIGHT}
      overflow="hidden"
      {...rest}
    >
      <StyledStack>
        {images.map((imageSrc, i) => (
          <Image
            sx={{
              transition: 'all 300ms ease-in-out',
              '&:hover': {
                width: HOVERED_WIDTH,
                height: HOVERED_HEIGHT,
                cursor: 'pointer',
              },
            }}
            src={imageSrc}
            key={imageSrc}
            alt={`carousel image ${i + 1}`}
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
          />
        ))}
      </StyledStack>
    </Box>
  );
};

export default ImageCarousel;
