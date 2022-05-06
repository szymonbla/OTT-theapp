import { BaseLayout, Menu } from 'layouts';
import { ReactNode } from 'react';

interface PanelLayoutProps {
  children: ReactNode;
}

export const PanelLayout = ({ children }: PanelLayoutProps) => {
  return (
    <BaseLayout>
      <Menu />
      {children}
    </BaseLayout>
  );
};
