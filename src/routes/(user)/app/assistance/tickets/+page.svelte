<script lang="ts">
	import { resolve } from '$app/paths';
	import AQueueForm from '$lib/components/atoms/a-queue-form.svelte';
	import ASubNavItem from '$lib/components/atoms/a-sub-nav-item.svelte';
	import ATicketScreen from '$lib/components/atoms/a-ticket-screen.svelte';
	import CharmPlus from '$lib/components/icons/charm-plus.svelte';
	import MSummaryCountItem from '$lib/components/molecules/m-summary-count-item.svelte';
	import OTicketList from '$lib/components/organisms/o-ticket-list.svelte';

	let { data } = $props();
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
		<div class="grid grid-cols-5 gap-4">
			<MSummaryCountItem label="Total Tickets" count={200} primary />
			<MSummaryCountItem label="Pending Tickets" lastMonthCount={200} count={90} />
			<MSummaryCountItem label="Assigned Tickets" count={10} />
			<MSummaryCountItem label="Solved Tickets" count={34} />
			<MSummaryCountItem label="Closed Tickets" count={29} />
		</div>
		<div class="flex w-full items-start gap-4">
			<div class="flex-1 rounded-xl bg-white p-4">
				<div class="flex items-center justify-between">
					<span class="text-xl font-bold">Tickets</span>
					<a href={resolve('/app/assistance/tickets/lists')} class="btn btn-link">All Tickets >></a>
				</div>

				<div class="max-h-[50vh] overflow-y-auto">
					<OTicketList />
				</div>
			</div>

			<div class="flex-1 rounded-xl bg-white p-4">
				<div class="flex items-center justify-between">
					<span class="text-xl font-bold">Queues</span>
					<AQueueForm />
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
