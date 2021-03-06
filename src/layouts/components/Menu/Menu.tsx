import { Box, Button, Link, Typography } from '@mui/material';
import { useMutation } from 'react-query';
import { v4 as uuidv4 } from 'uuid';

import { signInSubmit } from 'common/components/SplashView/api';
import { PlatformCode } from 'common/constants';
import { useUser, useSession } from 'state';
import LogoBall from 'common/images/logoBall.png';
import { RoutesDefinition } from 'routing/constants/RoutesDefinition';

export const Menu = () => {
  const { login, logout } = useSession();
  const {
    user: { fullName, id },
    updateUserState
  } = useUser();

  const mockedUser = {
    userName: 'test@bsgroup.eu',
    password: 'Test12!@'
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: signInSubmit,
    onSuccess: (data) => {
      login({ token: data.AuthorizationToken.Token });
      updateUserState({
        user: {
          fullName: data.User.FullName,
          userName: data.User.UserName,
          id: data.User.Id,
          avatarUrl: data.User.AvatarUrl,
          email: data.User.Email
        }
      });
    }
  });

  const handleLogin = () => {
    mutate({
      Device: { Name: uuidv4(), PlatformCode: PlatformCode.WEB },
      UserName: mockedUser.userName,
      Password: mockedUser.password
    });
  };

  const handleLogut = () => {
    logout();
  };

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
      <Link href={RoutesDefinition.homeScreen} sx={{ textDecoration: 'none' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h3" sx={{ mr: 3, color: 'common.white' }}>
            The app
          </Typography>
          <Box component="img" src={LogoBall} alt="Logo ball" />
        </Box>
      </Link>
      <Box>
        <Typography variant="subtitle2" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          Logged in
        </Typography>
        <Typography variant="subtitle1" fontWeight="600" sx={{ ml: 2 }}>
          {fullName}
        </Typography>
        {id === -999 && (
          <Button disabled={isLoading} onClick={() => handleLogin()} sx={{ typography: 'subtitle1', ml: 2 }}>
            Sign in
          </Button>
        )}
      </Box>
      <Button disabled={isLoading} onClick={() => handleLogut()} sx={{ typography: 'subtitle1', ml: 2 }}>
        Sign out
      </Button>
    </Box>
  );
};
