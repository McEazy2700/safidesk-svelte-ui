<script lang="ts">
	import type { NavItem } from '$lib/types/navigation';
	import { resolve } from '$app/paths';
	import { slide } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { page } from '$app/state';
	import { cast } from '$lib/utils/typing';

	let props: NavItem & { navOpen: boolean; large?: boolean } = $props();
	let Icon = props.icon;

	let active = $derived(page.url.pathname.endsWith(props.href));
</script>

<a
	href={resolve(cast<any>(props.href))}
	class={twMerge(
		'relative flex items-center gap-2 p-2',
		props.disabled && 'pointer-events-none opacity-70',
		active && 'rounded bg-secondary/60 font-bold',
		props.large && 'px-0',
		props.large && active && !props.navOpen && 'bg-transparent text-secondary',
		props.large && active && props.navOpen && 'pl-2'
	)}
>
	{#if active}
		<div
			class={twMerge(
				'absolute left-0 h-full w-1 rounded bg-secondary',
				props.large && '-left-1',
				props.large && props.navOpen && 'left-0'
			)}
		></div>
	{/if}
	<Icon size={props.large ? 25 : 20} />
	{#if props.navOpen}
		<span transition:slide class="font-semibold whitespace-nowrap">{props.label}</span>
	{/if}
</a>
