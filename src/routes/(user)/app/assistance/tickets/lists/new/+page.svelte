<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';
	import type { TicketFormArgs } from '$lib/components/molecules/m-ticket-form.svelte';
	import MTicketForm from '$lib/components/molecules/m-ticket-form.svelte';
	import { TicketMutations } from '$lib/services/utils/mutations/tickets.svelte';
	import { TicketsStore } from '$lib/stores/queries/tickets.svelte';
	import { getClientAccessToken } from '$lib/utils/cookies';
	import { cast } from '$lib/utils/typing';
	import { resolve } from '$app/paths';
	import { slugify } from '$lib/utils/urls';
	import ATicketScreen from '$lib/components/atoms/a-top-header-screen.svelte';
	import { getFutureDate } from '$lib/utils/time';
	import { TICKET_RESPONSE_DURATIONS } from '$lib/constants/tickets';
	import type { TicketRead } from '$lib/services/api';

	let queueId = $state<number>();
	let dueDate = $derived(
		queueId ? getFutureDate(TICKET_RESPONSE_DURATIONS[queueId]) : getFutureDate(7)
	);

	function handleCreate(value: TicketFormArgs) {
		const user = getClientAccessToken()?.user?.user;
		TicketMutations.create({
			status: cast(value.status),
			priority: cast(value.priority),
			title: value.title,
			description: value.content,
			queue_id: value.queue_id,
			ticket_type_input: 'Incident',
			submitter_email: user?.email,
			due_date: value.due_date
		}).then(async (data) => {
			const ticketData = data as TicketRead;
			await TicketsStore.refresh();
			await invalidateAll();
			if (ticketData) {
				goto(
					resolve('/(user)/app/assistance/tickets/lists/[slug]', {
						slug: slugify(ticketData.title) + `__${ticketData.id}`
					}),
					{ replaceState: true }
				);
			}
		});
	}
</script>

<ATicketScreen>
	{#snippet header()}
		<h3 class="text-xl font-semibold text-primary capitalize">New Ticket</h3>
	{/snippet}
	<MTicketForm
		due_date={dueDate.toISOString()}
		bind:queue_id={queueId}
		onsave={handleCreate}
		loading={TicketMutations.loading}
	/>
</ATicketScreen>
