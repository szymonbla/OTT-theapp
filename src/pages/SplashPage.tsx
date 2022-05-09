import { useEffect, useRef } from 'react';

import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { useSession, useUser } from 'state';
import { BaseLayout } from 'layouts';
import { PlatformCode } from 'common/constants';
import { SplashView } from 'common/components';
import { anonymousSignIn } from 'common/components/SplashView';

export const SplashPage = () => {
  const { login } = useSession();
  const { updateUserState } = useUser();
  const navigate = useNavigate();

  const isMounted = useRef<boolean>();

  const { mutate } = useMutation({
    mutationFn: anonymousSignIn,
    onSuccess: (data) => {
      login({ token: data.AuthorizationToken.Token });
      updateUserState({
        user: {
          fullName: data.User.FullName,
          userName: data.User.UserName,
          id: data.User.Id,
          avatarUrl: data.User.AvatarUrl
        }
      });
    }
  });

  useEffect(() => {
    if (isMounted.current) return; // Due to the React 18 changes. https://reactjs.org/blog/2022/03/29/react-v18.html#new-strict-mode-behaviors

    setTimeout(() => {
      mutate({ Device: { Name: uuidv4(), PlatformCode: PlatformCode.WEB } });
    }, 3000);

    isMounted.current = true;
  }, [mutate, navigate]);

  return (
    <BaseLayout sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <SplashView />
    </BaseLayout>
  );
};
