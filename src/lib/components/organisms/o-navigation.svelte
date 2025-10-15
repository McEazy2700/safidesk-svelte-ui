<script lang="ts">
	import type { NavGroup, NavItem } from '$lib/types/navigation';
	import ANavItem from '../atoms/a-nav-item.svelte';
	import MNavGroup from '../molecules/m-nav-group.svelte';

	let props: { navigation: (NavGroup | NavItem)[]; navOpen: boolean } = $props();
	let open = $state<string>();
</script>

<div class="flex h-[calc(100vh-75px)] flex-col overflow-y-auto">
	{#each props.navigation as group, index (index)}
		{#if group.type === 'group'}
			<div class="py-2">
				<MNavGroup
					{...group}
					navOpen={props.navOpen}
					open={open === group.label}
					onopenchange={(iopen) => {
						if (iopen) {
							open = group.label;
						} else {
							open = undefined;
						}
					}}
				/>
			</div>
		{:else}
			<ANavItem large navOpen={props.navOpen} {...group} />
		{/if}
	{/each}
</div>
