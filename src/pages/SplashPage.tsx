import { BaseLayout } from 'layouts';
import { SplashView } from 'common/components';

export const SplashPage = () => {
  return (
    <BaseLayout sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <SplashView />
    </BaseLayout>
  );
};
