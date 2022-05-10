import { ReactNode } from 'react';

import { SxProps } from '@mui/material';

import { BaseLayout, Menu } from 'layouts';

interface PanelLayoutProps {
  children: ReactNode;
  sx?: SxProps;
}

export const PanelLayout = ({ children, sx }: PanelLayoutProps) => {
  return (
    <BaseLayout sx={{ display: 'flex', flexDirection: 'column', overflowY: 'scroll', ...sx }}>
      <Menu />
      {children}
    </BaseLayout>
  );
};
