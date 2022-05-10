import { RouteProps } from 'react-router-dom';

import { HomePage } from 'pages/HomePage';
import { VideoPlayerPage } from 'pages/VideoPlayer';
import { RoutesDefinition } from './RoutesDefinition';

export const userRoutes: RouteProps[] = [
  {
    path: RoutesDefinition.homeScreen,
    element: <HomePage />
  },
  {
    path: RoutesDefinition.playerWithId,
    element: <VideoPlayerPage />
  }
];
