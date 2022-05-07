import { ReactNode } from 'react';

import { SessionContextProvider, UserContextProvider } from 'state';

interface StateWrapperProps {
  children: ReactNode;
}

export const StateWrapper = ({ children }: StateWrapperProps) => (
  <SessionContextProvider>
    <UserContextProvider>{children}</UserContextProvider>
  </SessionContextProvider>
);
