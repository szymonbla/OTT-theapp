import { ReactNode } from 'react';
import { Box, SxProps } from '@mui/material';

interface BaseLayoutProps {
  children: ReactNode;
  sx?: SxProps;
}

export const BaseLayout = ({ children, sx }: BaseLayoutProps) => {
  return (
    <Box
      sx={{
        ...sx,
        width: '100vw',
        height: '100vh',
        position: 'relative',
        background: (theme) =>
          `linear-gradient(180deg, ${theme.palette.secondary.main}, ${theme.palette.background.default})`
      }}
    >
      {children}
    </Box>
  );
};
