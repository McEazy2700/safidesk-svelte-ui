<script lang="ts">
	import type { NavGroup } from '$lib/types/navigation';
	import { slide } from 'svelte/transition';
	import ANavItem from '../atoms/a-nav-item.svelte';

	type Props = NavGroup & {
		navOpen: boolean;
		open?: boolean;
		onopenchange?: (open: boolean) => void;
	};

	let { open = $bindable(false), ...props }: Props = $props();
	let Icon = props.icon;
</script>

<div>
	<button
		type="button"
		onclick={() => props.onopenchange?.(!open)}
		class="flex cursor-pointer items-center gap-2 text-lg font-bold"
	>
		<Icon size={30} />
		{#if props.navOpen}
			<span transition:slide>{props.label}</span>
		{/if}
	</button>
	{#if open && props.navOpen}
		<div transition:slide class="mt-2 flex flex-col gap-2 pl-8">
			{#each props.navs as nav, index (index)}
				<ANavItem navOpen={props.navOpen} {...nav} />
			{/each}
		</div>
	{/if}
</div>
