<script lang="ts">
	import { PRIORITY_NAMES } from '$lib/constants/tickets';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		disabled?: boolean;
		priority?: number;
	};
	let { disabled, priority = $bindable() }: Props = $props();
</script>

<div
	class={twMerge(
		'dropdown !dropdown-center !dropdown-bottom w-full',
		disabled && 'pointer-events-none cursor-not-allowed text-base-content/60'
	)}
>
	<div
		tabindex="0"
		role="button"
		class="btn m-1 w-full justify-start border-black/10 bg-white btn-outline"
	>
		<span class="border-r border-black/10 pr-4">Priorty</span>
		<span class="pl-4 capitalize">{priority ? PRIORITY_NAMES[priority] : 'All'}</span>
	</div>
	<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
	<ul tabindex="0" class="dropdown-content menu z-1 w-full rounded-box bg-base-100 p-2 shadow-sm">
		<li>
			<button onclick={() => (priority = undefined)} type="button" class="capitalize"> All </button>
		</li>
		{#each Object.keys(PRIORITY_NAMES) as key (key)}
			<li>
				<button onclick={() => (priority = Number(key))} type="button" class="capitalize">
					{PRIORITY_NAMES[Number(key)].replaceAll('_', ' ')}
				</button>
			</li>
		{/each}
	</ul>
</div>
