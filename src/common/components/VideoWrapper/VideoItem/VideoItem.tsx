import { useEffect, useState } from 'react';

import { Box, Typography } from '@mui/material';

import { MediaImageModel } from 'common/types';
import PlaceholderImage from 'common/images/placeholderImage.jpg';

interface VideoItemProps {
  images: MediaImageModel[];
  title: string;
}

export const VideoItem = ({ images, title }: VideoItemProps) => {
  const [imageSrc, setImageSrc] = useState<string | undefined>('');

  useEffect(() => {
    if (images.length === 0) {
      setImageSrc(PlaceholderImage);
    }

    images.forEach((image) => {
      if (images.some((item) => item.ImageTypeCode === 'FRAME')) {
        setImageSrc(image.Url);
      } else {
        setImageSrc(PlaceholderImage);
      }
    });
  }, [images]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'secondary.main',
        minWidth: '410px',
        borderRadius: 2,
        mr: 2
      }}
    >
      <Box component="img" sx={{ aspectRatio: '16 / 9', height: '75%' }} src={imageSrc} />
      <Typography
        variant="h5"
        sx={{
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'center',
          minHeight: '25%'
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};
