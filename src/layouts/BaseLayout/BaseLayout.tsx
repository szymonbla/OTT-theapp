import { ReactNode } from 'react';
import { Box } from '@mui/material';

interface BaseLayoutProps {
  children: ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Box
      sx={(theme) => ({
        width: '100vw',
        height: '100vh',
        position: 'relative',
        background: `linear-gradient(180deg, ${theme.palette.secondary.main}, ${theme.palette.background.default})`
      })}
    >
      {children}
    </Box>
  );
};
