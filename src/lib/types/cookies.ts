import type { AuthUser } from "./api/auth";

export type AuthTokens = {
  refresh: string;
  access: string;
  user?: AuthUser;
};
