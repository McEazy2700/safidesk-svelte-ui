import {
  customizedHelpdeskticketsAssignmentStatsList,
  type CustomizedHelpdeskticketsAssignmentStatsListData
} from '$lib/services/api';
import type { TicketStats } from '$lib/types/api/tickets';
import { BaseItemQueryStore } from './base.svelte';

export const TicketStatsStore = new BaseItemQueryStore<
  TicketStats,
  CustomizedHelpdeskticketsAssignmentStatsListData
>({
  fetchFn: customizedHelpdeskticketsAssignmentStatsList
});
