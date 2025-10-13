<script lang="ts">
	import { TicketStatsStore } from '$lib/stores/queries/ticket-stats-svelte';
	import MSummaryCountItem from '../molecules/m-summary-count-item.svelte';
	import { Calendar, TimeGrid } from '@event-calendar/core';

	let options = $state<Calendar.Options>({
		view: 'timeGridWeek',
		events: [
			{ id: '1', start: new Date(), allDay: true, end: new Date(), title: 'Printer Servicing' }
		]
	});

	$effect(() => {
		TicketStatsStore.load({});
	});
</script>

<div class="p-5">
	<div class="flex flex-col gap-4">
		<h1 class="text-3xl font-bold">Summary</h1>
		<div class="grid grid-cols-3 gap-4">
			<MSummaryCountItem
				label="Open Tickets"
				count={TicketStatsStore.data?.data.total_tickets ?? 0}
			/>
			<MSummaryCountItem label="Services to Fulfill" count={4} />
			<MSummaryCountItem label="Due Today" count={2} />
		</div>
	</div>
	<div class="mt-8 flex flex-col gap-2 rounded-2xl bg-white p-4">
		<h3 class="text-2xl font-bold">Your Schedule</h3>
		<div class="">
			<Calendar plugins={[TimeGrid]} {options} />
		</div>
	</div>
</div>
