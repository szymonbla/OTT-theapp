import { RouteProps } from 'react-router-dom';

import { HomePage } from 'pages/HomePage';
import { RoutesDefinition } from './RoutesDefinition';

export const userRoutes: RouteProps[] = [
  {
    path: RoutesDefinition.homeScreen,
    element: <HomePage />
  },
  {
    path: RoutesDefinition.player
  }
];
