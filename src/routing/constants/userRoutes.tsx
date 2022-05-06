import { RouteProps } from 'react-router-dom';
import { RoutesDefinition } from './RoutesDefinition';

export const userRoutes: RouteProps[] = [
  {
    path: RoutesDefinition.homeScreen
  },
  {
    path: RoutesDefinition.player
  }
];
