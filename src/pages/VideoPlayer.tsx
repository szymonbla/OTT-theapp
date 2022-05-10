import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Box, Typography } from '@mui/material';
import { useMutation } from 'react-query';

import { getMediaPlayInfo, GetMediaPlayInfoResponseData } from 'common/components/VideoWrapper/api';
import { VideoPlayer } from 'common/components';
import { StreamType } from 'common/constants';
import { PanelLayout } from 'layouts';
import { useUser } from 'state';

export const VideoPlayerPage = () => {
  const { id } = useParams();
  const token = localStorage.getItem('token') as string;
  const [mediaPlayInfo, setMediaPlayInfo] = useState<GetMediaPlayInfoResponseData>({});
  const isMounted = useRef<boolean>();

  const { mutate, isError } = useMutation({
    mutationFn: getMediaPlayInfo,
    onSuccess: ({ ContentUrl, Description, Title }) => {
      setMediaPlayInfo({ ContentUrl, Description, Title });
    }
  });

  const {
    user: { id: userId }
  } = useUser();

  useEffect(() => {
    if (isMounted.current) return; // Due to the React 18 changes. https://reactjs.org/blog/2022/03/29/react-v18.html#new-strict-mode-behaviors

    if (userId === -999) {
      mutate({ StreamType: StreamType.TRIAL, MediaId: Number(id), token });
    }

    isMounted.current = true;
  }, [mutate, token, userId, id]);

  return (
    <PanelLayout>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 20,
          px: 10
        }}
      >
        {isError && (
          <Typography variant="h3" fontWeight="500" sx={{ mb: 2 }}>
            Lack permissions
          </Typography>
        )}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h3" fontWeight="500" sx={{ mb: 2 }}>
            {mediaPlayInfo?.Title}
          </Typography>
          <Typography variant="body2" sx={{ width: '50%', textAlign: 'justify' }}>
            {mediaPlayInfo?.Description}
          </Typography>
        </Box>
        {mediaPlayInfo?.ContentUrl ? (
          <VideoPlayer contentUrl={mediaPlayInfo?.ContentUrl} />
        ) : (
          <Typography variant="h2">Video error</Typography>
        )}
      </Box>
    </PanelLayout>
  );
};
