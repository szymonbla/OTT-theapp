import { Grid, Typography } from '@mui/material';

import { SplashLogo } from './SplashLogo';

export const SplashView = () => {
  return (
    <Grid container flexDirection="column" justifyContent="center" alignItems="center">
      <SplashLogo />
      <Typography variant="h1">The app</Typography>
    </Grid>
  );
};
