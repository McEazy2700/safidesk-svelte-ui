<script lang="ts">
	import { cast } from '$lib/utils/typing';
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import { page } from '$app/state';
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';

	type Props = {
		pathname: Pathname;
		query?: Record<string, string>;
		aside?: string;
		class?: string;
		children?: Snippet;
	};

	let { pathname, query, aside, class: klass, children }: Props = $props();
	let querystring = $derived(() => {
		if (!query || Object.keys(query).length === 0) return '';
		const params = new URLSearchParams(query);
		return `?${params.toString()}`;
	});
	let pathstring = $derived(cast<Pathname>(pathname + querystring()));

	let active = $derived(
		query
			? !!Object.keys(query).find((k) => page.url.searchParams.get(k) == query[k])
			: page.url.searchParams.size === 0
	);
</script>

<a
	href={resolve(pathstring)}
	class={twMerge(
		'flex items-center justify-between p-2 px-3 whitespace-nowrap',
		active && 'rounded-lg bg-secondary text-secondary-content',
		klass
	)}
>
	<div>
		{@render children?.()}
	</div>
	{#if aside}
		<span class={twMerge('rounded-md px-2', active ? 'bg-black/30' : 'bg-white')}>{aside}</span>
	{/if}
</a>
