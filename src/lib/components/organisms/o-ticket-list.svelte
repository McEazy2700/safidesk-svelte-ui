<script>
	import { TicketsStore } from '$lib/stores/queries/tickets.svelte';
	import MTicketListItem from '../molecules/m-ticket-list-item.svelte';
	import { page } from '$app/state';
	import { cast } from '$lib/utils/typing';

	let queue = $derived(page.url.searchParams.get('queue'));
	let status = $derived(page.url.searchParams.get('status'));
	let priority = $derived(page.url.searchParams.get('priority'));

	$effect(() => {
		TicketsStore.loadInitial({
			query: {
				queue: queue ? Number(queue) : undefined,
				priority: cast(priority),
				status: cast(status)
			}
		});
	});
</script>

<div>
	{#each TicketsStore.list as ticket, index (index)}
		<MTicketListItem {ticket} />
	{/each}
	{#if TicketsStore.loading}
		<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
		{#each Array.from({ length: 10 }) as _, index (index)}
			<div class="h-32 w-full skeleton rounded-none border-y border-black/10"></div>
		{/each}
	{/if}
</div>
