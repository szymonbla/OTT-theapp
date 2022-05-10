import * as z from 'zod';
import { apiClient } from 'common/utils';
import { tokenDataSchema } from 'common/types';

const getMediaPlayInfoRequestSchema = z.object({
  MediaId: z.number().optional(),
  StreamType: z.string()
});

const mediaTimestampModelSchema = z.object({
  Hour: z.number(),
  Minute: z.number(),
  Second: z.number(),
  ClientTimestamp: z.string().optional(),
  ApiTimestamp: z.string().optional()
});

const getMediaPlayInfoResponseSchema = z.object({
  MediaId: z.number().optional(),
  Title: z.string().optional(),
  Description: z.string().optional(),
  MediaTypeCode: z.string().optional(),
  MediaTypeDisplayName: z.string().optional(),
  Timestamp: mediaTimestampModelSchema.array().optional(),
  StreamId: z.number().optional(),
  Provider: z.string().optional(),
  ContentUrl: z.string().optional(),
  ContentType: z.string().optional(),
  DrmLicenseServer: z.string().optional(),
  DrmToken: z.string().optional(),
  DrmType: z.string().optional(),
  DrmCdmData: z.string().optional()
});

export type GetMediaPlayInfoData = z.infer<typeof getMediaPlayInfoRequestSchema> & z.infer<typeof tokenDataSchema>;
export type GetMediaPlayInfoResponseData = z.infer<typeof getMediaPlayInfoResponseSchema>;

export const getMediaPlayInfo = async ({ MediaId, StreamType, token }: GetMediaPlayInfoData) => {
  const response = await apiClient(token)
    .post('Media/GetMediaPlayInfo', {
      json: {
        StreamType,
        MediaId
      }
    })
    .json();

  return getMediaPlayInfoResponseSchema.parse(response);
};
