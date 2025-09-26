<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	type Props = { priority: number };
	let { priority }: Props = $props();

	const names: Record<number, string> = {
		1: 'critical',
		2: 'high',
		3: 'normal',
		4: 'low',
		5: 'very low'
	};
</script>

<span
	class={twMerge(
		'rounded-full bg-purple-400/20 p-1 px-2 text-xs font-semibold text-purple-600 capitalize'
	)}
>
	{names[priority]}
</span>
