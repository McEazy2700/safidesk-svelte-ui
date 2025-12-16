import {
  customizedHelpdeskticketsList,
  type CustomizedHelpdeskticketsListData,
  type TicketRead,
} from "$lib/services/api";
import { BaseListQueryStore } from "./base.svelte";

export const TicketsStore = new BaseListQueryStore<
  TicketRead,
  CustomizedHelpdeskticketsListData
>({
  fetchFn: customizedHelpdeskticketsList,
});
