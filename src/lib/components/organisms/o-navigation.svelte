<script lang="ts">
	import type { NavGroup } from '$lib/types/navigation';
	import MNavGroup from '../molecules/m-nav-group.svelte';

	let props: { navigation: NavGroup[]; navOpen: boolean } = $props();
	let open = $state<string>();
</script>

<div class="flex h-[calc(100vh-75px)] flex-col gap-4 overflow-y-auto">
	{#each props.navigation as group, index (index)}
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
	{/each}
</div>
