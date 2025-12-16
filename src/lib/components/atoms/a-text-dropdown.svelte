<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import ArrowDown from '../icons/arrow-down.svelte';

	type Props = {
		items: string[];
		disabled?: boolean;
		onselect?: (value: string) => void;
		selected?: string;
		placeholder?: string;
		class?: string;
	};
	let {
		selected = $bindable(),
		onselect,
		placeholder = 'Select item',
		items,
		disabled,
		class: klass
	}: Props = $props();
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
		class={twMerge(
			'btn input w-full flex-row items-center justify-between bg-white btn-outline',
			klass
		)}
	>
		<span class={twMerge('capitalize', !selected && 'text-base-content/40')}
			>{selected ?? placeholder}</span
		><ArrowDown />
	</div>
	<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
	<ul tabindex="0" class="dropdown-content menu z-1 w-full rounded-box bg-base-100 p-2 shadow-sm">
		{#each items as key (key)}
			<li>
				<button
					onclick={() => {
						selected = key;
						onselect?.(key);
					}}
					type="button"
					class="capitalize">{key}</button
				>
			</li>
		{/each}
	</ul>
</div>
