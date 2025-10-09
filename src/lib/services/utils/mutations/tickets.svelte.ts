import {
  customizedHelpdeskticketsCreate,
  helpdeskApiFollowupsCreate,
  type CustomTicketWritable,
  type FollowUpWritable
} from '$lib/services/api';
import { Toast } from '$lib/stores/toast.svelte';
import { getClientAccessToken } from '$lib/utils/cookies';

class TicketMutationsBase {
  loading = $state(false);

  sendFollowUp = async (body: FollowUpWritable) => {
    const tokens = getClientAccessToken();

    this.loading = true;
    const res = await helpdeskApiFollowupsCreate({
      headers: {
        Authorization: `Bearer ${tokens?.access}`
      },
      body: { ...body, user: tokens?.user?.user.id }
    });
    if (res.error || !res.data) {
      Toast.append({ type: 'error', message: 'Failed to send follow up' });
      console.log(res.error);
      this.loading = false;
    } else {
      Toast.append({ type: 'success', message: 'Follow up sent' });
    }
    this.loading = false;
  };

  create = async (body: CustomTicketWritable) => {
    const tokens = getClientAccessToken();

    this.loading = true;
    const res = await customizedHelpdeskticketsCreate({
      headers: {
        Authorization: `Bearer ${tokens?.access}`
      },
      body
    });
    if (res.error || !res.data) {
      Toast.append({ type: 'error', message: 'Failed to create ticket' });
      console.log(res.error);
      this.loading = false;
    } else {
      console.log(res.data);
      Toast.append({ type: 'success', message: 'Ticket Created' });
      return res.data;
    }
    this.loading = false;
  };
}

export const TicketMutations = new TicketMutationsBase();
