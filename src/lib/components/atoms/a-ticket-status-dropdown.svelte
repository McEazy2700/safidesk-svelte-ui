<script lang="ts">
	import { STATUS_NAMES } from '$lib/constants/tickets';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		disabled?: boolean;
		status?: number;
	};
	let { status = $bindable(), disabled }: Props = $props();
</script>

<div
	class={twMerge(
		'dropdown !dropdown-center !dropdown-bottom w-full',
		disabled && 'pointer-events-none opacity-80'
	)}
>
	<div
		tabindex="0"
		role="button"
		class="btn m-1 w-full justify-start border-black/10 bg-white btn-outline"
	>
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
