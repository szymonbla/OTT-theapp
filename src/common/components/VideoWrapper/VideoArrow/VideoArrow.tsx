import { ReactElement } from 'react';

import { Box, SxProps } from '@mui/material';

interface VideoArrowProps {
  img: ReactElement;
  handleClickArrow: () => void;
  sx?: SxProps;
}

export const VideoArrow = ({ img, handleClickArrow, sx }: VideoArrowProps) => {
  return (
    <Box
      onClick={handleClickArrow}
      sx={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'secondary.dark',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 100,
        '&:hover': {
          transform: 'scale(1.3)',
          cursor: 'pointer'
        },
        ...sx
      }}
    >
      {img}
    </Box>
  );
};
