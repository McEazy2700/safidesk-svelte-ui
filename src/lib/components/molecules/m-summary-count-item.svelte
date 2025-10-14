<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import IconamoonTrendUpLight from '../icons/iconamoon-trend-up-light.svelte';
	import IconamoonTrendDownLight from '../icons/iconamoon-trend-down-light.svelte';
	import ACountUp from '../atoms/a-count-up.svelte';

	type Props = {
		label: string;
		count: number;
		primary?: boolean;
		showTrend?: boolean;
		lastMonthCount?: number;
		description?: string;
		size?: 'sm' | 'base';
	};

	let {
		label,
		count,
		primary,
		lastMonthCount = 0,
		showTrend = false,
		description,
		size = 'base'
	}: Props = $props();
	let percentage = $derived((count * (100 / (count - lastMonthCount))).toFixed(0).replace('-', ''));
</script>

<div
	class={twMerge(
		'flex h-full flex-1 flex-col gap-3 rounded-xl bg-white p-4',
		primary && 'bg-secondary text-secondary-content',
		size === 'sm' && 'gap-1'
	)}
>
	<span class={twMerge('text-lg font-bold', size === 'sm' && 'text-base')}>{label}</span>
	<span class={twMerge('text-4xl font-bold', size === 'sm' && 'text-2xl')}>
		<ACountUp target={count} />
	</span>

	{#if description}
		<div
			class={twMerge(
				'flex items-center gap-1 rounded-lg text-sm text-base-content/70',
				size === 'sm' && 'text-xs'
			)}
		>
			<span>{description}</span>
		</div>
	{/if}
	{#if showTrend}
		<div>
			{#if lastMonthCount < count}
				<div
					class={twMerge(
						'flex items-center gap-1 rounded-lg text-sm text-green-300',
						!primary && 'text-green-500',
						size === 'sm' && 'text-xs'
					)}
				>
					<IconamoonTrendUpLight size={18} />
					<span>{percentage === 'NaN' ? 0 : percentage}%</span>
					<span>from last month</span>
				</div>
			{:else}
				<div
					class={twMerge(
						'flex items-center gap-1 rounded-lg text-sm text-red-100',
						!primary && 'text-red-500',
						size === 'sm' && 'text-xs'
					)}
				>
					<IconamoonTrendDownLight />
					<span>{percentage === 'NaN' ? 0 : percentage}%</span>
					<span>Down</span>
					<span>from last month</span>
				</div>
			{/if}
		</div>
	{/if}
</div>
