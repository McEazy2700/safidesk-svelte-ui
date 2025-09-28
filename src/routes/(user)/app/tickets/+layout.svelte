<script>
	import ASubNavItem from '$lib/components/atoms/a-sub-nav-item.svelte';
	import BoardSplit28Regular from '$lib/components/icons/board-split-28-regular.svelte';
	import HeadsetStroke16 from '$lib/components/icons/headset-stroke-16.svelte';
	import MenuAlt2 from '$lib/components/icons/menu-alt-2.svelte';
	import { twMerge } from 'tailwind-merge';
	import { page } from '$app/state';
	import ASearchInput from '$lib/components/atoms/a-search-input.svelte';
	import OTicketList from '$lib/components/organisms/o-ticket-list.svelte';
	import { QueuesStore } from '$lib/stores/queries/queues.svelte';
	import { resolve } from '$app/paths';
	import CharmPlus from '$lib/components/icons/charm-plus.svelte';
	import MTicketsFilter from '$lib/components/molecules/m-tickets-filter.svelte';

	let sideopen = $state(true);
	let { children } = $props();

	$effect(() => {
		QueuesStore.loadInitial();
	});
</script>

<div class="flex h-full">
	<aside
		class={twMerge(
			'w-0 overflow-hidden p-4 px-0 transition-all duration-300',
			sideopen && 'w-xs p-4'
		)}
	>
		<h3 class="mb-3 rounded-lg bg-black/10 p-2 px-3 text-xl font-bold text-primary">Tickets</h3>
		<div class="flex flex-col gap-1">
			<ASubNavItem pathname="/app/tickets" aside="2,192">All Tickets</ASubNavItem>
			{#if QueuesStore.loading}
				<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
				{#each Array.from({ length: 4 }) as _, index (index)}
					<span class="h-[40px] skeleton rounded-md"></span>
				{/each}
			{/if}
			{#each QueuesStore.list as queue, index (index)}
				<ASubNavItem
					pathname="/app/tickets"
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
			{#if !QueuesStore.loading}
				<ASubNavItem pathname="/app/tickets/chat" query={{ title: 'Live Chat' }}>
					<div class="flex items-center gap-2">
						<HeadsetStroke16 />
						<span>Live Chat</span>
					</div>
				</ASubNavItem>
				<ASubNavItem pathname="/app/tickets/boards" query={{ title: 'Boards' }}>
					<div class="flex items-center gap-2">
						<BoardSplit28Regular />
						<span>Boards</span>
					</div>
				</ASubNavItem>
			{/if}
		</div>
	</aside>
	<div class="flex h-full flex-1 overflow-hidden rounded-2xl bg-white">
		<div class="flex w-xs flex-col">
			<div class="flex h-[83px] w-full items-center justify-between border-b border-black/10 py-2">
				<div class="flex items-center gap-2">
					<button
						type="button"
						class="btn text-primary btn-link"
						onclick={() => (sideopen = !sideopen)}
					>
						<MenuAlt2 />
					</button>
					<h4 class="text-lg font-bold text-primary capitalize">
						{page.url.searchParams.get('title') ?? 'All'}
					</h4>
				</div>
				<MTicketsFilter />
			</div>
			<div class="border-b border-black/10 p-2">
				<ASearchInput placeholder="Search..." class="text-base-content" />
			</div>
			<div class="h-[calc(100vh-175px)] overflow-y-auto">
				<OTicketList />
			</div>
		</div>
		<div class="flex-1 rounded-2xl border-l border-black/10">{@render children?.()}</div>
		{#if !page.url.pathname.endsWith('/new')}
			<a
				href={resolve('/app/tickets/new')}
				class="btn fixed right-6 bottom-6 flex items-center rounded-full btn-lg btn-info"
			>
				<CharmPlus />
				<span>New Ticket</span>
			</a>
		{/if}
	</div>
</div>
