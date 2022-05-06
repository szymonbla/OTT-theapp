import { ReactNode } from 'react';

import { SessionContextProvider } from 'state';

interface StateWrapperProps {
  children: ReactNode;
}

export const StateWrapper = ({ children }: StateWrapperProps) => (
  <SessionContextProvider>{children}</SessionContextProvider>
);
