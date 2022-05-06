import { RouteProps } from 'react-router-dom';
import { RoutesDefinition } from './RoutesDefinition';

import { SplashPage } from 'pages/SplashPage';

export const guestRoutes: RouteProps[] = [
  {
    path: RoutesDefinition.splash,
    element: <SplashPage />
  }
];
