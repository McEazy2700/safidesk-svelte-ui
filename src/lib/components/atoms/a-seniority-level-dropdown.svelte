<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	type Props = {
		disabled?: boolean;
		seniorityLevel?: number;
	};
	let { seniorityLevel = $bindable(), disabled }: Props = $props();
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
		<span class="border-r border-black/10 pr-4">Seniority Level</span>
		<span class={twMerge('pl-4 capitalize', !seniorityLevel && 'opacity-60')}
			>{seniorityLevel ?? 'Select Level'}</span
		>
	</div>
	<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
	<ul tabindex="0" class="dropdown-content menu z-1 w-full rounded-box bg-base-100 p-2 shadow-sm">
		{#each Array.from({ length: 5 }) as _, index (index)}
			<li>
				<button onclick={() => (seniorityLevel = index + 1)} type="button" class="capitalize"
					>{index + 1}</button
				>
			</li>
		{/each}
	</ul>
</div>
