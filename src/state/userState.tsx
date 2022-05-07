import { createContext, ReactNode, useContext } from 'react';

import { UserInfoViewModel } from 'common/types';
import { USER_STORAGE_KEY } from 'common/constants';
import { useLocalStorageState } from 'common/hooks';

interface UserProfile {
  user: UserInfoViewModel;
}

interface UserFunctions {
  updateUserState: (updatedUser: UserProfile) => void;
}

type UserContextShape = UserProfile & UserFunctions;

const UserContext = createContext<UserContextShape | undefined>(undefined);

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [localState, setLocalState] = useLocalStorageState(USER_STORAGE_KEY, {});

  function updateUserState(updatedUser: UserProfile) {
    setLocalState({ ...localState, ...updatedUser });
  }

  const userContextValues: UserContextShape = {
    user: {
      fullName: localState?.user?.fullName ?? '',
      id: localState?.user?.id ?? -1,
      userName: localState?.user?.userName ?? '',
      avatarUrl: localState?.user?.avatarUrl ?? '',
      clientRoles: localState?.user?.clientRoles ?? '',
      email: localState?.user?.email ?? '',
      initials: localState?.user?.initials ?? '',
      phoneNumber: localState?.user?.phoneNumber ?? ''
    },
    updateUserState
  };

  return <UserContext.Provider value={userContextValues}>{children}</UserContext.Provider>;
};

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
