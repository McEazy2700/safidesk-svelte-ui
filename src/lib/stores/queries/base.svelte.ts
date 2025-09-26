/* eslint-disable @typescript-eslint/no-explicit-any */
import { goto } from '$app/navigation';
import type { Options, TDataShape } from '$lib/services/api/client';
import { getClientAccessToken } from '$lib/utils/cookies';
import { cast } from '$lib/utils/typing';
import { resolve } from '$app/paths';
import { Toast } from '../toast.svelte';

type QueryArgs<A extends TDataShape, ThrowOnError extends boolean = false> = {
  fetchFn: (options?: Options<A, ThrowOnError>) => Promise<any>;
};

type PagedData<T> = {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Array<T>;
};

export class BaseListQueryStore<T, A extends TDataShape> {
  list = $state<T[]>([]);
  fetchFn: (options?: Options<A, any>) => Promise<PagedData<T>>;
  hasMore = $state(false);
  loading = $state(true);
  args = $state<Options<A, any>>();

  constructor(args: QueryArgs<A>) {
    this.fetchFn = args.fetchFn;
  }

  private fetch = async (options?: Options<A, any>) => {
    const tokens = getClientAccessToken();
    const res = await this.fetchFn({
      headers: { Authorization: `Bearer ${tokens?.access}` },
      ...options
    } as any);
    const data = cast<typeof res>(cast<any>(res).data);
    this.list = [...this.list, ...(data.results ?? [])];
    this.hasMore = !!res.next;
  };

  loadInitial = async (options?: Options<A, any>) => {
    this.args = options;
    this.loading = true;
    this.fetch();
    this.loading = false;
  };

  refresh = async () => {
    this.list = [];
    this.fetch();
  };
}

type ItemData<T> = {
  data: T;
  error: undefined;
};

type ItemQueryArgs<A extends TDataShape> = {
  fetchFn: (options: Options<A, any>) => Promise<any>;
};

export class BaseItemQueryStore<T, A extends TDataShape> {
  data = $state<T>();
  fetchFn: (options: Options<A, any>) => Promise<ItemData<T>>;
  loading = $state(true);
  args = $state<Options<A, any>>();

  constructor(args: ItemQueryArgs<A>) {
    this.fetchFn = args.fetchFn;
  }

  private fetch = async (options: Options<A, any>) => {
    const tokens = getClientAccessToken();

    const res = await this.fetchFn({
      ...options,
      headers: { Authorization: `Bearer ${tokens?.access}` }
    });

    if (res.error || !res.data) {
      const response = cast<any>(res);
      console.log(response);
      if (response.response.status === 500) {
        this.loading = false;
        Toast.append({
          message: 'Something went wrong',
          type: 'error'
        });
      } else {
        Toast.append({
          message: 'Session Expired: Please login',
          type: 'error'
        });
        goto(resolve('/'), { replaceState: true });
      }
    } else {
      this.data = res.data;
    }
  };

  load = async (options: Options<A, any>) => {
    this.args = options;
    this.loading = true;
    this.fetch(options);
    this.loading = false;
  };

  refresh = async () => {
    if (this.args) this.fetch(this.args);
  };
}
