import * as z from 'zod';

import { apiClient } from 'common/utils';
import { movieListSchemaResponse, tokenDataSchema } from 'common/types';

const getMediaListResponseWithTokenSchema = z.object({
  PageSize: z.number().optional(),
  PageNumber: z.number().optional(),
  FullTextSearch: z.string().optional(),
  IncludeCount: z.boolean().optional(),
  MediaListId: z.number(),
  IncludeCategories: z.boolean().optional(),
  IncludeMedia: z.boolean().optional(),
  IncludeImages: z.boolean().optional(),
  MediaOptions: z.any().optional() // type any due to the lack of time
});

export type GetMediaListRequestData = z.infer<typeof getMediaListResponseWithTokenSchema>;
export type GetMediaListRequestDataWithToken = z.infer<typeof getMediaListResponseWithTokenSchema> &
  z.infer<typeof tokenDataSchema>;

export const getMediaList = async ({
  MediaListId,
  IncludeImages,
  IncludeCategories,
  FullTextSearch,
  IncludeCount,
  IncludeMedia,
  MediaOptions,
  PageNumber,
  PageSize,
  token
}: GetMediaListRequestDataWithToken) => {
  const response = await apiClient(token)
    .post('Media/GetMediaList', {
      json: {
        MediaListId,
        IncludeImages,
        IncludeCategories,
        FullTextSearch,
        IncludeCount,
        IncludeMedia,
        MediaOptions,
        PageNumber,
        PageSize
      }
    })
    .json();

  return movieListSchemaResponse.parse(response);
};
