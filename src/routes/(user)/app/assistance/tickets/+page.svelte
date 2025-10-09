<script lang="ts">
	import { resolve } from '$app/paths';
	import AQueueForm from '$lib/components/atoms/a-queue-form.svelte';
	import ASubNavItem from '$lib/components/atoms/a-sub-nav-item.svelte';
	import ATicketScreen from '$lib/components/atoms/a-ticket-screen.svelte';
	import CharmPlus from '$lib/components/icons/charm-plus.svelte';
	import MSummaryCountItem from '$lib/components/molecules/m-summary-count-item.svelte';
	import OTicketList from '$lib/components/organisms/o-ticket-list.svelte';
	import { TicketStatsStore } from '$lib/stores/queries/ticket-stats-svelte.js';

	let { data } = $props();

	$effect(() => {
		TicketStatsStore.load({});
	});

	$effect(() => {
		console.log(TicketStatsStore.data);
	});
</script>

<ATicketScreen>
	{#snippet header()}
		<div class="flex w-full items-center justify-between">
			<h1 class="text-3xl font-bold text-base-content/70">Tickets</h1>
			<div>
				<a
					href={resolve('/app/assistance/tickets/lists/new')}
					class="btn flex items-center rounded-full btn-lg btn-info"
				>
					<CharmPlus />
					<span>New Ticket</span>
				</a>
			</div>
		</div>
	{/snippet}
	<div class="flex w-full flex-col gap-8">
		<div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
			<MSummaryCountItem
				showTrend={data.user.user.is_staff}
				label="Total Tickets"
				count={TicketStatsStore.data?.data.total_tickets ?? 0}
				lastMonthCount={0}
				primary
			/>
			<MSummaryCountItem
				showTrend={data.user.user.is_staff}
				label="Pending Tickets"
				lastMonthCount={0}
				count={TicketStatsStore.data?.data.unassigned_tickets ?? 0}
			/>
			{#if data.user.user.is_staff}
				<MSummaryCountItem
					showTrend={data.user.user.is_staff}
					label="Assigned Tickets"
					lastMonthCount={0}
					count={TicketStatsStore.data?.data.assigned_tickets ?? 0}
				/>
			{/if}
			<MSummaryCountItem showTrend={data.user.user.is_staff} label="Closed Tickets" count={0} />
		</div>
		<div class="flex w-full items-start gap-4">
			<div class="flex-1 rounded-xl bg-white p-4">
				<div class="flex items-center justify-between">
					<span class="text-xl font-bold">Tickets</span>
					<a href={resolve('/app/assistance/tickets/lists')} class="btn btn-link">All Tickets >></a>
				</div>

				<div class="max-h-[50vh] overflow-y-auto">
					<OTicketList user={data.user} />
				</div>
			</div>

			<div class="flex-1 rounded-xl bg-white p-4">
				<div class="flex items-center justify-between">
					<span class="text-xl font-bold">Queues</span>
					{#if data.user.user.is_staff}
						<AQueueForm />
					{/if}
				</div>
				<ul class="mt-2 flex flex-col gap-1">
					{#each data.queues as queue, index (index)}
						<ASubNavItem
							class="rounded-md bg-base-100"
							pathname="/app/assistance/tickets/lists"
							query={{
								queue: queue.id?.toString() ?? '',
								title: queue.title.replaceAll('_', ' ')
							}}
						>
							<span class="capitalize">
								{queue.title.replaceAll('_', ' ')}
							</span>
						</ASubNavItem>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</ATicketScreen>
