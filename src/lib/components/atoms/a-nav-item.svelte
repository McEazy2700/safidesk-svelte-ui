<script lang="ts">
	import type { NavItem } from '$lib/types/navigation';
	import { resolve } from '$app/paths';
	import { slide } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	let props: NavItem & { navOpen: boolean } = $props();
	let Icon = props.icon;
</script>

<a
	href={resolve(props.href)}
	class={twMerge('flex items-center gap-2', props.disabled && 'pointer-events-none opacity-70')}
>
	<Icon />
	{#if props.navOpen}
		<span transition:slide class="font-semibold whitespace-nowrap">{props.label}</span>
	{/if}
</a>
