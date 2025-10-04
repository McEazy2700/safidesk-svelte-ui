<script lang="ts">
	import type { NavItem } from '$lib/types/navigation';
	import { resolve } from '$app/paths';
	import { slide } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { page } from '$app/state';

	let props: NavItem & { navOpen: boolean } = $props();
	let Icon = props.icon;

	let active = $derived(page.url.pathname.startsWith(props.href));
</script>

<a
	href={resolve(props.href)}
	class={twMerge(
		'relative flex items-center gap-2 p-2',
		props.disabled && 'pointer-events-none opacity-70',
		active && 'rounded bg-secondary/60 font-bold'
	)}
>
	{#if active}
		<div class="absolute left-0 h-full w-1 rounded bg-secondary"></div>
	{/if}
	<Icon size={20} />
	{#if props.navOpen}
		<span transition:slide class="font-semibold whitespace-nowrap">{props.label}</span>
	{/if}
</a>
