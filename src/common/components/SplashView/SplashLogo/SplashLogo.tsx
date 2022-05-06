import { Box, keyframes } from '@mui/material';

import LogoBall from 'common/images/logoBall.png';

export const SplashLogo = () => {
  return (
    <Box
      component="img"
      src={LogoBall}
      sx={{
        width: '120px',
        height: '120px',
        animation: `2.1s ${BounceAnimation} ease-out 3.5`,
        mb: '2em'
      }}
    />
  );
};

const BounceAnimation = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -60px, 0);
  }

  70% {
    transform: translate3d(0, -30px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;
