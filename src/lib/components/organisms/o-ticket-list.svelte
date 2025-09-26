<script>
	import { TicketsStore } from '$lib/stores/queries/tickets.svelte';
	import MTicketListItem from '../molecules/m-ticket-list-item.svelte';

	$effect(() => {
		TicketsStore.loadInitial();
	});
</script>

<div>
	{#each TicketsStore.list as ticket (ticket.id)}
		<MTicketListItem {ticket} />
	{/each}
	{#if TicketsStore.loading}
		<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
		{#each Array.from({ length: 10 }) as _, index (index)}
			<div class="h-32 w-full skeleton rounded-none border-y border-black/10"></div>
		{/each}
	{/if}
</div>
