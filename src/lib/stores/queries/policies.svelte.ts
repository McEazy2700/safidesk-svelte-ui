import {
  customizedHelpdeskslaPoliciesList,
  type CustomizedHelpdeskslaPoliciesListData,
  type SlaPolicy,
} from "$lib/services/api";
import { BaseListQueryStore } from "./base.svelte";

export const SlaPoliciesStore = new BaseListQueryStore<
  SlaPolicy & { name: string },
  CustomizedHelpdeskslaPoliciesListData
>({
  fetchFn: customizedHelpdeskslaPoliciesList,
  loadFn: (data) => data.data,
});
