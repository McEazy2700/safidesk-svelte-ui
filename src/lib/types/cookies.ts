import type { UserDetails } from './api/auth';

export type AuthTokens = {
  refresh: string;
  access: string;
  user?: UserDetails;
};
