import * as z from 'zod';

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

interface TokenResonse {
  token: string;
  tokenExpires: string;
  refreshToken: string;
}
