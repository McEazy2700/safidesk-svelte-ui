<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import IconamoonTrendUpLight from '../icons/iconamoon-trend-up-light.svelte';
	import IconamoonTrendDownLight from '../icons/iconamoon-trend-down-light.svelte';
	import ACountUp from '../atoms/a-count-up.svelte';

	type Props = {
		label: string;
		count: number;
		primary?: boolean;
		lastMonthCount?: number;
	};

	let { label, count, primary, lastMonthCount = 0 }: Props = $props();
	let percentage = $derived((count * (100 / (count - lastMonthCount))).toFixed(0).replace('-', ''));
</script>

<div
	class={twMerge(
		'flex flex-col gap-3 rounded-xl bg-white p-4',
		primary && 'bg-secondary text-secondary-content'
	)}
>
	<span class="text-lg font-bold">{label}</span>
	<span class="text-4xl font-bold">
		<ACountUp target={count} />
	</span>

	<div>
		{#if lastMonthCount < count}
			<div
				class={twMerge(
					'flex items-center gap-1 rounded-lg text-sm text-green-300',
					!primary && 'text-green-500'
				)}
			>
				<IconamoonTrendUpLight size={18} />
				<span>{percentage}%</span>
				<span>from last month</span>
			</div>
		{:else}
			<div
				class={twMerge(
					'flex items-center gap-1 rounded-lg text-sm text-red-300',
					!primary && 'text-red-500'
				)}
			>
				<IconamoonTrendDownLight />
				<span>{percentage}%</span>
				<span>Down</span>
				<span>from last month</span>
			</div>
		{/if}
	</div>
</div>
