import { queueList, type Queue, type QueueListData } from '$lib/services/api';
import { BaseListQueryStore } from './base.svelte';

export const QueuesStore = new BaseListQueryStore<Queue, QueueListData>({
  fetchFn: queueList
});
