import {
  helpdeskApiFollowupsList,
  type FollowUp,
  type HelpdeskApiFollowupsListData,
} from "$lib/services/api";
import { getContext, setContext } from "svelte";
import { BaseListQueryStore } from "./base.svelte";

const KEY = "$_tickets_state";

export function getFollowUpState(key = KEY) {
  const manager =
    getContext<BaseListQueryStore<FollowUp, HelpdeskApiFollowupsListData>>(key);
  if (!manager) {
    return setFollowUpState();
  } else {
    return manager;
  }
}

export function setFollowUpState(key = KEY) {
  const manager = new BaseListQueryStore<
    FollowUp,
    HelpdeskApiFollowupsListData
  >({
    fetchFn: helpdeskApiFollowupsList,
  });
  return setContext(key, manager);
}
