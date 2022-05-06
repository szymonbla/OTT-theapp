import { Button, Grid, Typography } from '@mui/material';

import { SplashLogo } from './SplashLogo';
import { anonymousSignIn } from './api';

export const SplashView = () => {
  const handleSignIn = () => {
    console.log(process.env.REACT_APP_API_URI);
    anonymousSignIn({ Device: { PlatformCode: 'WEB', Name: '014f9d19-56ef-42d5-b9bc-090c1b3c7720' } });
  };

  return (
    <Grid container flexDirection="column" justifyContent="center" alignItems="center">
      <SplashLogo />
      <Typography variant="h1">The app</Typography>
      <Button type="submit" onClick={() => handleSignIn()}>
        Try!
      </Button>
    </Grid>
  );
};
