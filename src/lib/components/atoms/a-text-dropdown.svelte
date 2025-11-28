<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import ArrowDown from '../icons/arrow-down.svelte';

	type Props = {
		items: string[];
		disabled?: boolean;
		selected?: string;
		placeholder?: string;
	};
	let { selected = $bindable(), placeholder = 'Select item', items, disabled }: Props = $props();
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
		class="btn w-full flex-row items-center justify-between border-black/10 bg-white btn-outline"
	>
		<span class={twMerge('capitalize', !selected && 'text-base-content/40')}
			>{selected ?? placeholder}</span
		><ArrowDown />
	</div>
	<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
	<ul tabindex="0" class="dropdown-content menu z-1 w-full rounded-box bg-base-100 p-2 shadow-sm">
		{#each items as key (key)}
			<li>
				<button onclick={() => (selected = key)} type="button" class="capitalize">{key}</button>
			</li>
		{/each}
	</ul>
</div>
