import { Box } from '@mui/material';

import { PanelLayout } from 'layouts';
import { VideoWrapper } from 'common/components';

export const HomePage = () => {
  return (
    <PanelLayout>
      <Box sx={{ display: 'flex', flexDirection: 'column', mt: '100px', height: '100%' }}>
        <VideoWrapper
          mediaLists={[
            { MediaListId: 2, IncludeImages: true },
            { MediaListId: 3, IncludeImages: true },
            { MediaListId: 4, IncludeImages: true }
          ]}
        />
        <VideoWrapper
          mediaLists={[
            { MediaListId: 5, IncludeImages: true },
            { MediaListId: 6, IncludeImages: true },
            { MediaListId: 7, IncludeImages: true }
          ]}
        />
      </Box>
    </PanelLayout>
  );
};
