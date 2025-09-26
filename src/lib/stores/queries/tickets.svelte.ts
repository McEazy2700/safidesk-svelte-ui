import {
  customizedHelpdeskticketsList,
  type CustomizedHelpdeskticketsListData,
  type CustomTicket
} from '$lib/services/api';
import { BaseListQueryStore } from './base.svelte';

export const TicketsStore = new BaseListQueryStore<CustomTicket, CustomizedHelpdeskticketsListData>(
  {
    fetchFn: customizedHelpdeskticketsList
  }
);
