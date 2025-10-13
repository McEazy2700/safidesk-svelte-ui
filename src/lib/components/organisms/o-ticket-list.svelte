<script lang="ts">
	import { TicketsStore } from '$lib/stores/queries/tickets.svelte';
	import MTicketListItem from '../molecules/m-ticket-list-item.svelte';
	import { page } from '$app/state';
	import { cast } from '$lib/utils/typing';
	import type { GetCurrentAuthUser } from '$lib/types/api/auth';

	type Props = {
		fullWidth?: boolean;
		user: GetCurrentAuthUser['data'];
	};

	let queue = $derived(page.url.searchParams.get('queue'));
	let status = $derived(page.url.searchParams.get('status'));
	let priority = $derived(page.url.searchParams.get('priority'));

	let { fullWidth, user }: Props = $props();

	let queueIds = $derived(
		(() => {
			if (queue) {
				return [Number(queue)];
			} else if (user.user.username === 'admin') {
				return undefined;
			} else if (user.user.is_staff) {
				return user.queues?.map((v) => v.queue_id);
			}
			return undefined;
		})()
	);

	$effect(() => {
		TicketsStore.loadInitial({
			query: {
				queue: queueIds,
				priority: cast(priority),
				status: cast(status),
				user_id: !user.user.is_staff ? user.user.id : undefined
			}
		});
	});
</script>

<div>
	{#if !TicketsStore.loading && TicketsStore.list.length === 0}
		<div class="w-full p-4">
			<div
				class="flex w-full items-center justify-center rounded-xl border border-black/10 p-4 py-8 text-base-content/70"
			>
				<span>No tickets found</span>
			</div>
		</div>
	{/if}
	{#each TicketsStore.list as ticket, index (index)}
		<MTicketListItem {fullWidth} {ticket} />
	{/each}
	{#if TicketsStore.loading}
		<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
		{#each Array.from({ length: 10 }) as _, index (index)}
			<div class="h-32 w-full skeleton rounded-none border-y border-black/10"></div>
		{/each}
	{/if}
</div>
