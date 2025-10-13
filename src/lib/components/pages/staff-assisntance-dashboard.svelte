<script lang="ts">
	import { TicketStatsStore } from '$lib/stores/queries/ticket-stats-svelte';
	import MSummaryCountItem from '../molecules/m-summary-count-item.svelte';
	import { Calendar, TimeGrid } from '@event-calendar/core';
	import OTicketList from '$lib/components/organisms/o-ticket-list.svelte';
	import ANotifications from '$lib/components/atoms/a-notifications.svelte';
	import type { UserResponseData } from '$lib/types/api/auth';

	type Props = {
		user: UserResponseData;
	};

	let { user }: Props = $props();

	const MOCK_EVENTS = [
		{
			id: '1',
			title: 'Printer Servicing',
			start: new Date(new Date().setHours(10, 0, 0, 0)),
			end: new Date(new Date().setHours(11, 30, 0, 0)),
			backgroundColor: '#3b82f6'
		},
		{
			id: '2',
			title: 'Network Diagnostic',
			start: new Date(new Date().setHours(14, 0, 0, 0)),
			end: new Date(new Date().setHours(15, 0, 0, 0)),
			backgroundColor: '#84cc16'
		},
		{
			id: '3',
			title: 'Server Maintenance',
			start: new Date(new Date().setHours(16, 0, 0, 0)),
			end: new Date(new Date().setHours(17, 0, 0, 0)),
			backgroundColor: '#ef4444'
		},
		{
			id: '4',
			title: 'Onboarding New Employee',
			start: new Date(new Date().setDate(new Date().getDate() + 1)),
			end: new Date(new Date().setDate(new Date().getDate() + 1)),
			backgroundColor: '#eab308'
		}
	];

	let options = $state<Calendar.Options>({
		view: 'timeGridWeek',
		events: MOCK_EVENTS
	});

	$effect(() => {
		TicketStatsStore.load({});
	});
</script>

<div class="p-5">
	<div class="flex flex-col gap-4">
		<h1 class="text-3xl font-bold">Summary</h1>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<MSummaryCountItem
				label="Open Tickets"
				count={TicketStatsStore.data?.data.total_tickets ?? 0}
			/>
			<MSummaryCountItem label="Services to Fulfill" count={4} />
			<MSummaryCountItem label="Due Today" count={2} />
		</div>
	</div>

	<div class="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-5">
		<div class="flex flex-col gap-4 lg:col-span-2">
			<div class="flex flex-col gap-4">
				<h2 class="text-2xl font-bold">Your Tickets</h2>
				<div class="min-h-[400px] rounded-2xl bg-white p-4">
					<OTicketList {user} />
				</div>
			</div>

			<div class="flex flex-col gap-4 rounded-2xl bg-white p-4">
				<ANotifications />
			</div>
		</div>

		<div class="col-span-3 flex flex-col gap-8">
			<div class="flex flex-col gap-4">
				<h3 class="text-2xl font-bold">Your Schedule</h3>
				<div class=" rounded-2xl bg-white p-4">
					<Calendar plugins={[TimeGrid]} {options} />
				</div>
			</div>
		</div>
	</div>
</div>
