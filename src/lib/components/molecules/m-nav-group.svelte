<script lang="ts">
	import type { NavGroup } from '$lib/types/navigation';
	import { slide } from 'svelte/transition';
	import ANavItem from '../atoms/a-nav-item.svelte';
	import { page } from '$app/state';
	import { twMerge } from 'tailwind-merge';

	type Props = NavGroup & {
		navOpen: boolean;
		open?: boolean;
		onopenchange?: (open: boolean) => void;
	};

	let { open = $bindable(false), ...props }: Props = $props();
	let Icon = props.icon;

	let active = $derived(page.url.pathname.startsWith(props.baseRoute));
</script>

<div class="relative">
	{#if active}
		<div class="absolute -left-6 h-full w-1 rounded-r bg-secondary/50"></div>
	{/if}
	<button
		type="button"
		onclick={() => props.onopenchange?.(!open)}
		class={twMerge(
			'flex cursor-pointer items-center gap-2 text-lg font-bold',
			active && 'relative text-secondary'
		)}
	>
		{#if active}
			<div class="absolute -left-6 h-full w-1 rounded-r bg-secondary"></div>
		{/if}
		<Icon size={30} />
		{#if props.navOpen}
			<span transition:slide>{props.label}</span>
		{/if}
	</button>
	{#if (open || active) && props.navOpen}
		<div transition:slide class="relative mt-2 flex flex-col pl-8">
			{#each props.navs as nav, index (index)}
				<ANavItem navOpen={props.navOpen} {...nav} />
			{/each}
		</div>
	{/if}
</div>
