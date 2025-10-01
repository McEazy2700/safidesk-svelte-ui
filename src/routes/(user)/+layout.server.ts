import { queueList, userGetList, type Queue } from '$lib/services/api';
import { getServerAccessTokens } from '$lib/utils/cookies';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { cast } from '$lib/utils/typing';
import type { GetCurrentAuthUser } from '$lib/types/api/auth';

export const load: LayoutServerLoad = async (event) => {
  const tokens = getServerAccessTokens(event.cookies);

  const headers = {
    Authorization: `Bearer ${tokens.access}`
  };

  const userResPromise = userGetList({
    headers
  });

  const queueResPromise = queueList({
    headers
  });

  const [userRes, queueRes] = await Promise.all([userResPromise, queueResPromise]);

  if (userRes.error || !userRes.data) {
    throw redirect(301, '/');
  }

  const userData = cast<GetCurrentAuthUser>(userRes.data);
  const queueData = cast<Array<Queue>>(queueRes.data);

  return { user: userData.data, queues: queueData };
};
