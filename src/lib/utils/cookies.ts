import { browser } from '$app/environment';
import COOKIES from '$lib/constants/cookies';
import type { AuthTokens } from '$lib/types/cookies';
import { redirect, type Cookies } from '@sveltejs/kit';

export function getClientAccessToken(): AuthTokens | null {
	if (!browser) return null;

	const cookies = document.cookie.split(';');
	const tokenCookie = cookies.find((cookie) => cookie.trim().startsWith(COOKIES.AUTH_TOKEN_KEY));
	try {
		if (tokenCookie) {
			const authStr = tokenCookie.split('=').at(1)?.trim();
			if (authStr) {
				const decoded = decodeURIComponent(authStr);
				const val = JSON.parse(decoded) as AuthTokens;
				return val;
			}
			return null;
		}
	} catch {
		return null;
	}
	return null;
}

export function getServerAccessTokens(cookies: Cookies) {
	const authToken = cookies.get(COOKIES.AUTH_TOKEN_KEY);
	if (!authToken) {
		throw redirect(303, '/');
	}
	const tokens: AuthTokens = JSON.parse(decodeURIComponent(authToken));
	return tokens;
}

export function clearCookie(name: string) {
	const expiredDate = 'Expires=Thu, 01 Jan 1970 00:00:00 GMT';
	const path = 'path=/';
	document.cookie = `${name}=; ${expiredDate}; ${path}; SameSite=Lax; Secure`;
}
