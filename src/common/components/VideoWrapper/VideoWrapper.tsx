import { useEffect, useRef, useState } from 'react';

import { Box, Skeleton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useMutation } from 'react-query';

import { MovieMediaModelData } from 'common/types';
import { showMediaItem } from 'common/constants';
import { VideoArrow } from './VideoArrow';
import { VideoItem } from './VideoItem';
import { getMediaList, GetMediaListRequestData } from './api';

interface VideoWrapperProps {
  mediaLists: GetMediaListRequestData[];
}

export const VideoWrapper = ({ mediaLists }: VideoWrapperProps) => {
  const [entities, setEntities] = useState<MovieMediaModelData[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [length, setLength] = useState<number>(0);

  const isMounted = useRef<boolean>();

  const token = localStorage.getItem('token') as string;

  const { mutate, isLoading } = useMutation({
    mutationFn: getMediaList,
    onSuccess: ({ Entities }) => {
      setEntities((prevState) => [...prevState, ...Entities].slice(0, 15));
    }
  });

  const fetchAllMediaLists = () => {
    mediaLists.forEach((item) => {
      mutate({ token, MediaListId: item.MediaListId, IncludeImages: item.IncludeImages });
    });
  };

  useEffect(() => {
    if (isMounted.current) return; // Due to the React 18 changes. https://reactjs.org/blog/2022/03/29/react-v18.html#new-strict-mode-behaviors

    fetchAllMediaLists();

    isMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    setLength(entities.length);
  }, [entities.length]);

  const nextMovie = () => {
    if (currentIndex < length - showMediaItem) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prevNext = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '40%',
        py: 4,
        borderRadius: 2,
        position: 'relative',
        overflowX: 'hidden'
      }}
    >
      {currentIndex > 0 && (
        <VideoArrow img={<ArrowBackIosNewIcon />} sx={{ left: 10 }} handleClickArrow={() => prevNext()} />
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          position: 'relative',
          transform: `translateX(-${currentIndex * (100 / showMediaItem)}%)`,
          height: '100%',
          width: '100%'
        }}
      >
        {isLoading && (
          <Skeleton
            variant="rectangular"
            animation="wave"
            sx={{ backgroundColor: 'grey.600', height: '80%', width: '100%', borderRadius: 2, mx: 2 }}
          />
        )}
        {entities.map((video, index) => (
          <VideoItem images={video.Images ? video.Images : []} title={video.Title} key={index} />
        ))}
      </Box>
      {currentIndex < length - showMediaItem && (
        <VideoArrow img={<ArrowForwardIosIcon />} sx={{ right: 10 }} handleClickArrow={() => nextMovie()} />
      )}
    </Box>
  );
};
