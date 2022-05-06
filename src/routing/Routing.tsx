import { Routes, Route } from 'react-router-dom';
import { userRoutes } from './constants/userRoutes';
import { guestRoutes } from './constants/guestRoutes';

function Routing(): JSX.Element {
  return (
    <Routes>
      {guestRoutes.map((singleRoute, index) => (
        <Route key={(singleRoute.path as string) || `route-${index}`} {...singleRoute} />
      ))}
      {userRoutes.map((singleRoute, index) => (
        <Route key={(singleRoute.path as string) || `route-${index}`} {...singleRoute} />
      ))}
    </Routes>
  );
}

export default Routing;
