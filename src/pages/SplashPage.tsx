import { useEffect } from 'react';

import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { useSession } from 'state';
import { BaseLayout } from 'layouts';
import { PlatformCode } from 'common/constants';
import { SplashView } from 'common/components';
import { anonymousSignIn } from 'common/components/SplashView';

export const SplashPage = () => {
  const { login } = useSession();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: anonymousSignIn,
    onSuccess: (data) => {
      login({ token: data.AuthorizationToken.Token });
    }
  });

  useEffect(() => {
    setTimeout(() => {
      mutate({ Device: { Name: uuidv4(), PlatformCode: PlatformCode.WEB } });
    }, 3000);
  }, [mutate, navigate]);

  return (
    <BaseLayout sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <SplashView />
    </BaseLayout>
  );
};
