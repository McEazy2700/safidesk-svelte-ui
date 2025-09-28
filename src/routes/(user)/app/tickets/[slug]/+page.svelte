<script lang="ts">
	import { getTicketDetailsState } from '$lib/stores/queries/ticket-details.svete.js';
	import { page } from '$app/state';
	import AAvatarGroup from '$lib/components/atoms/a-avatar-group.svelte';
	import { formatToFullDateTime } from '$lib/utils/time';
	import ATicketStatusPill from '$lib/components/atoms/a-ticket-status-pill.svelte';
	import ATicketPriorityPill from '$lib/components/atoms/a-ticket-priority-pill.svelte';
	import { TicketMutations } from '$lib/services/utils/mutations/tickets.svelte';
	import { getFollowUpState } from '$lib/stores/queries/ticket-follow-ups.svelte';
	import MTicketFollowUpItem from '$lib/components/molecules/m-ticket-follow-up-item.svelte';
	import { invalidateAll } from '$app/navigation';
	import { TicketsStore } from '$lib/stores/queries/tickets.svelte';
	import { cast } from '$lib/utils/typing';
	import MTicketForm, { type TicketFormArgs } from '$lib/components/molecules/m-ticket-form.svelte';
	import ARichTextContent from '$lib/components/atoms/a-rich-text-content.svelte';

	const TicketDetails = getTicketDetailsState();
	const FollowUps = getFollowUpState();

	$effect(() => {
		TicketDetails.load({ path: { id: Number(page.url.pathname.split('__').pop()) } });
	});

	$effect(() => {
		FollowUps.loadInitial();
	});

	let status = $derived(TicketDetails.data?.status ?? 1);
	let priority = $derived(TicketDetails.data?.priority ?? 3);

	function handleSendFollowup(value: TicketFormArgs) {
		if (TicketDetails.data?.id) {
			TicketMutations.sendFollowUp({
				title: value.title,
				ticket: TicketDetails.data.id,
				new_status: cast(value.status),
				comment: value.content
			}).then(async () => {
				await TicketsStore.refresh();
				await invalidateAll();
				TicketDetails.refresh();
			});
		}
	}
</script>

<div class="h-full overflow-hidden">
	<div class="flex h-[80px] flex-col justify-between border-b border-black/10 p-2 px-4">
		{#if TicketDetails.loading}
			<div class="h-6 max-w-[500px] skeleton"></div>
		{:else}
			<h3 class="text-lg font-semibold text-primary capitalize">{TicketDetails.data?.title}</h3>
		{/if}
		<div class="flex items-center justify-between">
			{#if TicketDetails.loading}
				<div class="h-4 w-full max-w-32 skeleton"></div>
			{:else}
				<div class="flex items-center gap-2">
					<span class="rounded-full bg-info/20 p-1 px-2 text-xs font-semibold capitalize"
						>{TicketDetails.data?.queue?.title.replace('_', ' ')}</span
					>
					<ATicketStatusPill status={TicketDetails.data?.status ?? 1} />
					<ATicketPriorityPill priority={TicketDetails.data?.priority ?? 5} />
					<time datetime={TicketDetails.data?.due_date} class="text-sm text-base-content/40">
						{formatToFullDateTime(TicketDetails.data?.due_date)}
					</time>
				</div>
			{/if}
			{#if TicketDetails.loading}
				<div class="avatar-group -space-x-4">
					<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
					{#each Array.from({ length: 3 }) as _, index (index)}
						<div class="avatar">
							<div class="w-6 skeleton"></div>
						</div>
					{/each}
				</div>
			{:else}
				<AAvatarGroup
					avatars={[
						{ id: 'user-A', avatarUrl: 'https://i.pravatar.cc/40?img=1' },
						{ id: 'user-B', avatarUrl: 'https://i.pravatar.cc/40?img=2' }
					].map((a) => ({ src: a.avatarUrl, alt: a.id }))}
				/>
			{/if}
		</div>
	</div>
	<div class="flex h-[calc(100%-70px)] flex-col gap-4 overflow-y-auto p-4">
		{#if TicketDetails.loading}
			<div class="min-h-40 skeleton"></div>
		{:else}
			<div
				class="flex min-h-40 flex-col gap-1 overflow-hidden rounded-xl border border-black/10 bg-base-200 shadow-lg shadow-black/5"
			>
				<h5 class="px-2 py-1 text-xl font-semibold">Description</h5>
				<div class="h-full rounded-t-xl bg-white px-2 text-base-content/60">
					<ARichTextContent content={TicketDetails.data?.description} />
				</div>
			</div>
		{/if}
		{#if TicketDetails.loading}
			<div class="flex flex-col gap-2">
				<div class="min-h-[48px] skeleton"></div>
				<div class="min-h-[360px] skeleton"></div>
			</div>
		{:else}
			<MTicketForm
				edit
				bind:priority
				bind:status
				onsave={handleSendFollowup}
				loading={TicketMutations.loading}
			/>
		{/if}
		<div class="mt-4 flex flex-col gap-4">
			{#each TicketDetails.data?.followup_set ?? [] as followUp (followUp.id)}
				<MTicketFollowUpItem {followUp} />
			{/each}
		</div>
	</div>
</div>
