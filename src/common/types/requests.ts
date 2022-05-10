import * as z from 'zod';

export const mediaImageModel = z.object({
  Id: z.number().optional(),
  MediaId: z.number().optional(),
  PlatformCode: z.string().optional(),
  ImageTypeCode: z.string().optional(),
  Url: z.string().optional(),
  Width: z.number().optional(),
  Height: z.number().optional(),
  StorageSize: z.number().optional()
});

export type MediaImageModel = z.TypeOf<typeof mediaImageModel>;

export const movieMediaModelSchema = z.object({
  Id: z.number().optional(),
  Guid: z.string().optional(),
  MediaTypeCode: z.string().optional(),
  MediaTypeDisplayName: z.string().optional(),
  MediaAgeRestrictionValueMin: z.number().optional(),
  MediaAgeRestrictionImageUrl: z.string().optional(),
  Title: z.string(),
  Description: z.string().optional(),
  Duration: z.number().optional(),
  ParentMediaId: z.number().optional(),
  ParentMediaTitle: z.string().optional(),
  ParentOrderInParent: z.number().optional(),
  OrderInParent: z.number().optional(),
  IsTrialContentAvailable: z.boolean().optional(),
  AvailableFrom: z.string().optional(),
  AvailableTo: z.string().optional(),
  StartDateTime: z.string().optional(),
  EndDateTime: z.string().optional(),
  Products: z.object({ Id: z.number() }).array().optional(),
  People: z.any().array().optional(), // type any due to the lack of time
  Categories: z.any().array().optional(), // type any due to the lack of time
  SimilarMedia: z.any().array().optional(), // type any due to the lack of time
  Media: z.any().array().optional(), // type any due to the lack of time
  PurchaseOffers: z.any().array().optional(), // type any due to the lack of time
  Images: mediaImageModel.array().optional()
});

export type MovieMediaModelData = z.TypeOf<typeof movieMediaModelSchema>;

export const movieListSchemaResponse = z.object({
  Entities: movieMediaModelSchema.array(),
  PageSize: z.number(),
  PageNumber: z.number(),
  TotalCount: z.number(),
  CacheDataValidTo: z.string(),
  SourceType: z.string()
});

export const anonymousUserDeviceViewSchema = z.object({
  Name: z.string(),
  PlatformCode: z.string()
});

export const authenticatedAnonymousUserRequestSchema = z.object({
  Device: anonymousUserDeviceViewSchema
});

export const UserInfoViewModelSchema = z.object({
  Id: z.number(),
  UserName: z.string(),
  FullName: z.string(),
  Email: z.string().optional(),
  Initials: z.string().optional(),
  AvatarUrl: z.string().optional(),
  PhoneNumber: z.string().optional(),
  ClientRoles: z.string().array()
});

export const TokenReponseSchema = z.object({
  Token: z.string(),
  TokenExpires: z.string(),
  RefreshToken: z.string().optional()
});

export const authenticatedAnonymousUserResponseSchema = z.object({
  User: UserInfoViewModelSchema,
  AuthorizationToken: TokenReponseSchema
});

export const tokenDataSchema = z.object({
  token: z.string()
});
export interface UserInfoViewModel {
  id: number;
  userName: string;
  fullName: string;
  email?: string;
  initials?: string;
  avatarUrl?: string;
  phoneNumber?: string;
  clientRoles?: [string];
}
