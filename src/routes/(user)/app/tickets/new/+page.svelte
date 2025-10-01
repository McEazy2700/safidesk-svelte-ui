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
	import ATicketScreen from '$lib/components/atoms/a-ticket-screen.svelte';

	function handleCreate(value: TicketFormArgs) {
		const user = getClientAccessToken()?.user;
		TicketMutations.create({
			status: cast(value.status),
			priority: cast(value.priority),
			title: value.title,
			description: value.content,
			queue_id: value.queue_id,
			submitter_email: user?.email,
			created_by: {
				email: user?.email,
				username: user?.username ?? ''
			},
			due_date: value.due_date
		}).then(async (data) => {
			await TicketsStore.refresh();
			await invalidateAll();
			if (data) {
				goto(
					resolve('/(user)/app/tickets/[slug]', {
						slug: slugify(data.title) + `__${data.id}`
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
	<MTicketForm onsave={handleCreate} loading={TicketMutations.loading} />
</ATicketScreen>
