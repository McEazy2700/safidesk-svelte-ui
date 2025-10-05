import { usersList, type User, type UsersListData } from '$lib/services/api';
import { BaseListQueryStore } from './base.svelte';

export const UsersStore = new BaseListQueryStore<User, UsersListData>({
  loadFn: (v) => {
    return v.data.data;
  },
  fetchFn: usersList
});
