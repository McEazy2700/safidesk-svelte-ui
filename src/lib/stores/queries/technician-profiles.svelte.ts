import {
  customizedHelpdesktechnicianProfilesList,
  type TechnicianProfile,
  type CustomizedHelpdesktechnicianProfilesListData,
} from "$lib/services/api";
import { BaseListQueryStore } from "./base.svelte";

export const TechnicianProfileStore = new BaseListQueryStore<
  TechnicianProfile,
  CustomizedHelpdesktechnicianProfilesListData
>({
  loadFn: (v) => {
    return v.data;
  },
  fetchFn: customizedHelpdesktechnicianProfilesList,
});
