<script lang="ts">
	import { STATUS_NAMES } from '$lib/constants/tickets';

	type Props = {
		status?: number;
	};
	let { status = $bindable() }: Props = $props();
</script>

<div class="dropdown w-full">
	<div tabindex="0" role="button" class="btn m-1 w-full justify-start border-black/10 btn-outline">
		<span class="border-r border-black/10 pr-4">Status</span>
		<span class="pl-4 capitalize">{status ? STATUS_NAMES[status] : 'All'}</span>
	</div>
	<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
	<ul tabindex="0" class="dropdown-content menu z-1 w-full rounded-box bg-base-100 p-2 shadow-sm">
		<li>
			<button onclick={() => (status = undefined)} type="button" class="capitalize"> All </button>
		</li>
		{#each Object.keys(STATUS_NAMES) as key (key)}
			<li>
				<button onclick={() => (status = Number(key))} type="button" class="capitalize"
					>{STATUS_NAMES[Number(key)]}</button
				>
			</li>
		{/each}
	</ul>
</div>
