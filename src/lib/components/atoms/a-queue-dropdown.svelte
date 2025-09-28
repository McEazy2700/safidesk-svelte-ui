<script lang="ts">
	import { QueuesStore } from '$lib/stores/queries/queues.svelte';
	import { twMerge } from 'tailwind-merge';

	type Props = {
		disabled?: boolean;
		queue_id?: number;
	};
	let { disabled, queue_id = $bindable() }: Props = $props();

	$effect(() => {
		QueuesStore.loadInitial();
	});
</script>

<div
	class={twMerge(
		'dropdown w-full',
		disabled && 'pointer-events-none cursor-not-allowed opacity-60'
	)}
>
	<div tabindex="0" role="button" class="btn m-1 w-full justify-start border-black/10 btn-outline">
		<span class="border-r border-black/10 pr-4">Queue</span>
		<span class="pl-4 capitalize"
			>{QueuesStore.list.find((i) => i.id === queue_id)?.title.replaceAll('_', ' ')}</span
		>
	</div>
	<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
	<ul tabindex="0" class="dropdown-content menu z-1 w-full rounded-box bg-base-100 p-2 shadow-sm">
		{#if QueuesStore.loading}
			<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
			{#each Array.from({ length: 4 }) as _, index (index)}
				<span class="h-[40px] skeleton rounded-md"></span>
			{/each}
		{/if}
		{#each QueuesStore.list as queue, index (index)}
			<li>
				<button onclick={() => (queue_id = Number(queue.id))} type="button" class="capitalize">
					{queue.title.replaceAll('_', ' ')}
				</button>
			</li>
		{/each}
	</ul>
</div>
