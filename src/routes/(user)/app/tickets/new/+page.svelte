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

<div class="h-full overflow-hidden">
	<div class="flex h-[80px] items-center border-b border-black/10 p-2 px-4">
		<h3 class="text-xl font-semibold text-primary capitalize">New Ticket</h3>
	</div>
	<div class="flex h-[calc(100%-70px)] flex-col gap-4 overflow-y-auto p-4">
		<MTicketForm onsave={handleCreate} loading={TicketMutations.loading} />
	</div>
</div>
