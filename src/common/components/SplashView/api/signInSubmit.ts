import { apiClient } from 'common/utils/api';
import { signInRequestSchema, authenticatedUserResponseSchema } from 'common/types';
import * as z from 'zod';

type SignInRequestData = z.TypeOf<typeof signInRequestSchema>;

export const signInSubmit = async ({ Device, Password, UserName }: SignInRequestData) => {
  const response = await apiClient()
    .post('Authorization/SignIn', {
      json: {
        UserName,
        Device,
        Password
      }
    })
    .json();

  return authenticatedUserResponseSchema.parse(response);
};
