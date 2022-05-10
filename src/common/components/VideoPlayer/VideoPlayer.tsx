import { Box } from '@mui/material';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  contentUrl: string | undefined;
}

export const VideoPlayer = ({ contentUrl }: VideoPlayerProps) => {
  return (
    <Box sx={{ height: '70%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ReactPlayer url={contentUrl} controls height="100%" width="100%" />;
    </Box>
  );
};
