import { getContext, setContext } from "svelte";
import { BaseItemQueryStore } from "./base.svelte";
import {
  customizedHelpdeskticketsRead,
  type CustomTicket,
  type HelpdeskApiTicketsReadData,
} from "$lib/services/api";

const KEY = "$_ticket_state";

export function getTicketDetailsState(key = KEY) {
  const manager =
    getContext<BaseItemQueryStore<CustomTicket, HelpdeskApiTicketsReadData>>(
      key,
    );
  if (!manager) {
    return setTicketDetailsState();
  } else {
    return manager;
  }
}

export function setTicketDetailsState(key = KEY) {
  const manager = new BaseItemQueryStore<
    CustomTicket,
    HelpdeskApiTicketsReadData
  >({
    fetchFn: customizedHelpdeskticketsRead,
  });
  return setContext(key, manager);
}
