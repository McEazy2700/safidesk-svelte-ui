import type { UserResponseData } from './api/auth';

export type AuthTokens = {
	refresh: string;
	access: string;
	user?: UserResponseData;
};
