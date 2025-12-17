import { usersList, type AppUser, type UsersListData } from "$lib/services/api";
import { BaseListQueryStore } from "./base.svelte";

export const UsersStore = new BaseListQueryStore<AppUser, UsersListData>({
  loadFn: (v) => {
    return v.data.data;
  },
  fetchFn: usersList,
});
