import { Box, Typography } from '@mui/material';

import { useUser } from 'state';
import LogoBall from 'common/images/logoBall.png';

export const Menu = () => {
  const {
    user: { userName }
  } = useUser();

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: 'secondary.dark',
        py: 2,
        '& > div': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      }}
    >
      <Box>
        <Typography variant="h3" sx={{ mr: 3 }}>
          The app
        </Typography>
        <Box component="img" src={LogoBall} alt="Logo ball" />
      </Box>
      <Box>
        <Typography variant="subtitle2" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          Logged in
          <Typography variant="subtitle2" fontWeight="600" sx={{ ml: 2 }}>
            {userName}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};
