import { createContext, useEffect, ReactNode, useContext, useReducer, useCallback } from 'react';

import { useNavigate } from 'react-router-dom';

import { RoutesDefinition } from 'routing/constants/RoutesDefinition';

interface LoginData {
  token: string;
}

interface SessionContextShape {
  token: string | null;
  isAuthenticated: boolean;
  login: ({ token }: LoginData) => void;
}

type ActionTypes = 'logout' | 'login';

interface SessionAction {
  type: ActionTypes;
  params?: { token?: string | null };
}

interface SessionState {
  token: string | null;
  isAuthenticated: boolean;
}

const sessionReducer = (state: SessionState, action: SessionAction): SessionState => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        token: action.params?.token || null,
        isAuthenticated: !!action.params?.token
      };
    case 'logout':
      return {
        ...state,
        token: null,
        isAuthenticated: false
      };
    default: {
      throw new Error(`Unsupported action type: ${action.type} `);
    }
  }
};

const SessionContext = createContext<SessionContextShape | undefined>(undefined);

interface SessionContextProviderProps {
  children: ReactNode;
}

export const SessionContextProvider = ({ children }: SessionContextProviderProps) => {
  const [sessionState, sessionDispatcher] = useReducer(sessionReducer, {
    isAuthenticated: false,
    token: null
  });
  const navigate = useNavigate();

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem('token');

    if (tokenFromLocalStorage) {
      navigate(RoutesDefinition.homeScreen);
    } else {
      navigate(RoutesDefinition.splash);
    }
  }, [navigate, sessionState]);

  const loginHandler = ({ token }: LoginData) => {
    localStorage.setItem('token', token);
    sessionDispatcher({ type: 'login', params: { token } });
    navigate(RoutesDefinition.homeScreen);
  };

  const authContextValues: SessionContextShape = {
    ...sessionState,
    login: loginHandler
  };

  return <SessionContext.Provider value={authContextValues}>{children}</SessionContext.Provider>;
};

export function useSession() {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
}
