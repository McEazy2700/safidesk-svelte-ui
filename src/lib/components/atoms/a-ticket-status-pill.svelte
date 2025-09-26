<script lang="ts">
	import { STATUS_NAMES } from '$lib/constants/tickets';
	import { twMerge } from 'tailwind-merge';

	type Props = { status: number };
	let { status }: Props = $props();
</script>

<span
	class={twMerge(
		'rounded-full bg-yellow-500/20 p-1 px-2 text-xs font-semibold text-yellow-600 capitalize'
	)}
>
	{STATUS_NAMES[status]}
</span>
