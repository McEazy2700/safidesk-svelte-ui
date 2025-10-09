import { loginSchema, type LoginForm } from '$lib/forms/schemas/auth';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { loginCreate, userGetList } from '$lib/services/api';
import type { Message } from '$lib/types/form';
import { cast } from '$lib/utils/typing';
import type { GetCurrentAuthUser, LoginResponse } from '$lib/types/api/auth';
import type { AuthTokens } from '$lib/types/cookies';
import COOKIES from '$lib/constants/cookies';

export const load = async () => {
  const loginForm: LoginForm = await superValidate(zod(loginSchema));

  return { loginForm };
};

export const actions: Actions = {
  default: async ({ request, url, cookies }) => {
    const form: LoginForm = await superValidate(request, zod(loginSchema));
    if (!form.valid) {
      return fail(400, { form });
    }
    const res = await loginCreate({
      body: form.data
    });

    if (res.error) {
      return message<Message>(
        form,
        { status: 'error', messages: Object.values(res.error) },
        { status: 400 }
      );
    }
    const data = cast<LoginResponse>(res.data);

    const userRes = await userGetList({
      headers: {
        Authorization: `Bearer ${data.data.access}`
      }
    });

    if (userRes.error || !userRes.data) {
      throw redirect(301, '/');
    }

    const userData = cast<GetCurrentAuthUser>(userRes.data);

    if (data) {
      const tokens: AuthTokens = {
        refresh: data.data.refresh,
        access: data.data.access,
        user: userData.data
      };

      const isHttps = url.protocol === 'https:';

      cookies.set(COOKIES.AUTH_TOKEN_KEY, JSON.stringify(tokens), {
        path: '/',
        httpOnly: false,
        sameSite: 'strict',
        secure: isHttps,
        maxAge: 60 * 60 * 24 * 7
      });

      if (!tokens.user?.user?.is_staff && !tokens.user?.groups && !tokens?.user?.queues) {
        throw redirect(301, '/app/assistance/dashboard');
      }
      throw redirect(301, '/app');
    }
  }
};
