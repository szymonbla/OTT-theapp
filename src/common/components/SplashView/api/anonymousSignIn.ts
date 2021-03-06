import * as z from 'zod';

import { apiClient } from 'common/utils/api';
import { authenticatedAnonymousUserRequestSchema, authenticatedUserResponseSchema } from 'common/types';

type AuthenticatedUserRequestData = z.TypeOf<typeof authenticatedAnonymousUserRequestSchema>;

export const anonymousSignIn = async (requestData: AuthenticatedUserRequestData) => {
  const response = await apiClient()
    .post('Authorization/SignIn', {
      json: {
        ...requestData
      }
    })
    .json();

  return authenticatedUserResponseSchema.parse(response);
};
