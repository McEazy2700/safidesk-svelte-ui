<script lang="ts">
	import { getTicketDetailsState } from '$lib/stores/queries/ticket-details.svete.js';
	import { page } from '$app/state';
	import AAvatarGroup from '$lib/components/atoms/a-avatar-group.svelte';
	import { formatToFullDateTime } from '$lib/utils/time';
	import ATicketStatusPill from '$lib/components/atoms/a-ticket-status-pill.svelte';
	import ATicketPriorityPill from '$lib/components/atoms/a-ticket-priority-pill.svelte';
	import { TicketMutations } from '$lib/services/utils/mutations/tickets.svelte';
	import { getFollowUpState } from '$lib/stores/queries/ticket-follow-ups.svelte';
	import ATiptap from '$lib/components/atoms/a-tiptap.svelte';
	import MTicketFollowUpItem from '$lib/components/molecules/m-ticket-follow-up-item.svelte';
	import { invalidateAll } from '$app/navigation';
	import { TicketsStore } from '$lib/stores/queries/tickets.svelte';
	import { STATUS_NAMES } from '$lib/constants/tickets';
	import UisAngleDown from '$lib/components/icons/uis-angle-down.svelte';
	import { cast } from '$lib/utils/typing';

	const TicketDetails = getTicketDetailsState();
	const FollowUps = getFollowUpState();

	$effect(() => {
		TicketDetails.load({ path: { id: Number(page.url.pathname.split('__').pop()) } });
	});

	$effect(() => {
		FollowUps.loadInitial();
	});

	let title = $state('');
	let content = $state('');
	let status = $derived(TicketDetails.data?.status ?? 1);

	function handleSendFollowup(message: string) {
		if (TicketDetails.data?.id) {
			TicketMutations.sendFollowUp({
				title,
				ticket: TicketDetails.data.id,
				new_status: status,
				comment: message
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
			<div class="flex items-center justify-between">
				<h3 class="text-lg font-semibold text-primary capitalize">{TicketDetails.data?.title}</h3>
				<div class="dropdown dropdown-end">
					<div
						tabindex="0"
						role="button"
						class="btn p-1 px-3 text-info-content capitalize btn-sm btn-info"
					>
						<div class="flex items-center">
							<span class="border-r border-black/10 pr-2">{STATUS_NAMES[status]}</span>
							<UisAngleDown />
						</div>
					</div>
					<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
					<ul
						tabindex="0"
						class="dropdown-content menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm"
					>
						{#each Object.keys(STATUS_NAMES).filter((v) => Number(v) !== (TicketDetails.data?.status ?? 1)) as key (key)}
							<li>
								<button
									type="button"
									onclick={() => (status = cast<typeof status>(Number(key)))}
									class="capitalize">{STATUS_NAMES[Number(key)]}</button
								>
							</li>
						{/each}
					</ul>
				</div>
			</div>
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
				class="flex min-h-40 flex-col gap-1 rounded-xl border border-black/10 p-2 px-4 shadow-lg shadow-black/5"
			>
				<h5 class="text-xl font-semibold">Description</h5>
				<p class="text-base-content/60">{TicketDetails.data?.description}</p>
			</div>
		{/if}
		{#if TicketDetails.loading}
			<div class="flex flex-col gap-2">
				<div class="min-h-[48px] skeleton"></div>
				<div class="min-h-[360px] skeleton"></div>
			</div>
		{:else}
			<div class="flex flex-col gap-2">
				<input
					bind:value={title}
					type="text"
					class="input input-lg w-full border input-ghost border-black/5 text-xl font-extrabold"
					placeholder="Title..."
				/>
				<ATiptap
					exportDisabled={content.length < 10}
					onupdate={({ html }) => (content = html)}
					loading={TicketMutations.loading}
					onexport={({ html }) => handleSendFollowup(html)}
				/>
			</div>
		{/if}
		<div class="mt-4 flex flex-col gap-4">
			{#each TicketDetails.data?.followup_set ?? [] as followUp (followUp.id)}
				<MTicketFollowUpItem {followUp} />
			{/each}
		</div>
	</div>
</div>
