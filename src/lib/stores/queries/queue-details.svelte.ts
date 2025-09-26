import { getContext, setContext } from 'svelte';
import { BaseItemQueryStore } from './base.svelte';
import { queueRead, type Queue, type QueueReadData } from '$lib/services/api';

const KEY = '$_queue_state';

export function getQueueDetailsState(key = KEY) {
  const manager = getContext<BaseItemQueryStore<Queue, QueueReadData>>(key);
  if (!manager) {
    return setQueueDetailsState();
  } else {
    return manager;
  }
}

export function setQueueDetailsState(key = KEY) {
  const manager = new BaseItemQueryStore<Queue, QueueReadData>({
    fetchFn: queueRead
  });
  return setContext(key, manager);
}
