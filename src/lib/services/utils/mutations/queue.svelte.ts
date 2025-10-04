import { invalidateAll } from '$app/navigation';
import { queueCreate, type QueueWritable } from '$lib/services/api';
import { getClientAccessToken } from '$lib/utils/cookies';

export class QueueMutationBase {
  loading = $state(false);

  create = async (inputs: QueueWritable) => {
    const token = getClientAccessToken();
    this.loading = true;
    const res = await queueCreate({
      headers: {
        Authorization: `Bearer ${token?.access}`
      },
      body: inputs
    });

    this.loading = false;

    if (res.data) {
      invalidateAll();
    }
  };
}

export const QueueMutation = new QueueMutationBase();
