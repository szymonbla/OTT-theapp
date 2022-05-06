import { Box, Typography } from '@mui/material';
import LogoBall from 'common/images/logoBall.png';

export const Menu = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: 'secondary.dark',
        py: 2
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h3" sx={{ mr: 3 }}>
          The app
        </Typography>
        <Box component="img" src={LogoBall} alt="Logo ball" />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="subtitle2">Logged in </Typography>
      </Box>
    </Box>
  );
};
